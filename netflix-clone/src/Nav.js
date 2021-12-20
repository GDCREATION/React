import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false)
    const navigate = useNavigate()
    const transitionHandle = ()=>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionHandle);
        return ()=>{window.removeEventListener("scroll", transitionHandle)}
    }, [])
    return (
        
        <div className={`nav ${show && "nav_black"}`}>
            <div className ='nav_contents'>
                <img className="nav_logo"
                 onClick={()=>{navigate('/', { replace: true })}}
                src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
                alt=""/>

                <img className="nav_avatar"
                onClick={()=>{navigate('/profile', { replace: true })}}
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt=""/>
            </div>
            

        </div>
    )
}

export default Nav
