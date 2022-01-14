import React from 'react'
import cw from "../assests/cw.jpeg"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
     const context = useContext(AuthContext)
    return (
        <div>
            <nav className='navbar navbar-expend-lg navbar-light bg-primary'>
                <div className='container-fluid'>
                   <a className='navbar-brand' onClick={() => navigate("/")}><img style={{cursor:"pointer",width:"50px",height:"50px",padding:"5px"}} src={cw} alt="Clarusway" /></a> 
                   <p style={{color:"#fff", fontSize:"30px", cursor:"pointer",marginLeft:"80px"}} onClick={() => navigate("/")}>FİRE-BLOG</p>
                   <div className='buttons'>
                       {
                           context.currentUser ? (
                               <h3>{currentUser.displayName}</h3>
                           ):(
                            <button
                            type='button'
                            className='ms-2 btn btn-outline-light'
                            onClick={() => navigate("/login")}
                            >
                                Login
                            </button>
                           )
                       }
                       {
                           context.currentUser ? (
                               <button
                               type='button'
                               className='ms-2 btn btn-outline-light'
                               >
                                   Logout
                               </button>
                           ):(
                               <button
                               type='button'
                               className='ms-2 btn btn-outline-light'
                               onClick={() => navigate("/register")}
                               >
                                   Register
                               </button>
                               
                           )
                       }
                        
                   </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
