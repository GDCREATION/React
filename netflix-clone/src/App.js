import React, { useEffect } from 'react';
import './App.css';
import { HomeScreen } from './screens/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './screens/Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth)
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email
        }))
      }
      else{
        dispatch(logout())
      }
    })

    return unsubscribe;
  },[dispatch])
  return (
    <div className="app">
      <BrowserRouter>
      { !user ? (<Login/>) :(
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      )}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
