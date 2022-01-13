import React from 'react'
import cw from "../assests/cw.jpeg"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className='navbar navbar-expend-lg navbar-light bg-primary'>
                <div>
                   <a className=''><img style={{width:"50px",height:"50px",padding:"5px"}} src={cw} alt="Clarusway" /></a> 
                   <div className='buttons'>
                        {
                            <button
                            type='button'
                            className='ms-2 btn btn-outline-light'
                            onClick={() => navigate("/login")}
                            >

                            </button>
                        }
                        
                   </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
