import { addDoc, collection, doc, getDocs, onSnapshot, query, where } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import "./PlansScreen.css";
import {loadStripe} from '@stripe/stripe-js';

function PlansScreen() {
  const [ products, setProducts ] = useState([]);
  const [ subscriptions, setSubscriptions ] = useState(null);

  const user = useSelector(selectUser);

  useEffect(()=>{
    const ref1 = collection(db,"customers");
    const ref2 = doc(ref1,user.uid);
    const ref3 = collection(ref2,"subscriptions");
    const ref4 = getDocs(ref3)
    ref4.then((querySnapshot)=>{
        querySnapshot.forEach(async(subscription)=>{
            setSubscriptions({
                role : subscription.data().role,
                current_period_end : subscription.data().current_period_end.seconds,
                current_period_start : subscription.data().current_period_start.seconds
            })
        })
    })
  },[user.uid])

  useEffect(() => {
    
    const queryq = query(
      collection(db, "products"),
      where("active", "==", true)
    );
    const querySnapshot = getDocs(queryq);
    
    querySnapshot.then((snap) => {
        const products = [];
      snap.forEach(async (element) => {
        products[element.id] = element.data();
        const priceSnap = collection(element.ref, "prices");
        const querySnap = await getDocs(priceSnap);
        querySnap.docs.forEach(async (price) => {
          products[element.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });
      setProducts(products);
    });
    
  }, []);

  const loadCheckout = async (priceId) =>{
      debugger
    const docRef = collection(db, "customers")
    const d = doc(docRef,user.uid)
    const  ref = collection(d,"checkout_sessions")
    const finalref = await addDoc(ref,{
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin
    })

    onSnapshot(finalref,async (snap)=>{
        const {error, sessionId} = snap.data()

        if(error){
            alert("ERROR")
        }
        if(sessionId){
            debugger
            const stripe = await loadStripe("pk_test_51JzxRLSCuOXt96sv0TLnQeq8fQrBZFM8irqfUJ5GVSXQwh4W1XZJuqK397vyfxGWvNpZ8JDBevKVDFTiiXRSYxTN00xRLrd0L6")
            stripe.redirectToCheckout({sessionId});
        }
    })

  }

  console.log(products);
  return <div className="planScreen">
      <br/>
      {subscriptions && <p>Renewal Date : {new Date(subscriptions?.current_period_end*1000).toLocaleDateString()}</p>}
      {Object.entries(products).map(([productId, productData])=>{

          const currentPackage = productData.name?.toLowerCase().includes(subscriptions?.role.toLowerCase())
          return(
              <div key={productId} className="planScreen_plan">
                  <div className="planScreen_info">
                      <h5>{productData.name}</h5>
                      <h6>{productData.description}</h6>
                      
                    </div>
                    <button
                    className={currentPackage ? "planScreen_button_static" : "planScreen_button"}
                    onClick={()=>{!currentPackage && loadCheckout(productData.prices.priceId)}}>
                        {currentPackage ? "Current Package" : "Subscribe"}
                    </button>
                </div>
          );
      })}
  </div>;
}

export default PlansScreen;
