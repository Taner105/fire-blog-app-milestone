import React from 'react'
import blok from "../assests/blok.png"

const Register = () => {
    return (
         <div className="register">
            {/* <div className="form-image">
                <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
            </div> */}
            
            <div className="register-form">
                <div className='blog-img'>
                    <img src={blok} alt="blok" />
                </div>
                <h1 id='register' className="form-title display-8">— Register —</h1>
                <form id="register">
                <div className="mb-4">
                    <label for="email" className="form-label display-4">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email address..."
                   
                    />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label display-4">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password..." 
                   
                    />
                </div>
                <input type="button" className="btn btn-primary" value="Register" 
                  
                />
                </form>
            </div>
        </div>
    )
}

export default Register;
