import React, { useState } from 'react'
import blok from "../assests/blok.png"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import {auth} from "../helpers/firebase.js"
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async() => {
        const email = email
        try{
            let user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user);
            
            await updateProfile(auth.currentUser, {email:email})
            navigate("/login")
        }catch(err){
            alert(err.message)
        }
        
    }
    return (
         <div className="register">
            <div className="register-form">
                <div className='blog-img'>
                    <img src={blok} alt="blok" />
                </div>
                <h1 id='register' className="form-title display-8">— Register —</h1>
                <form id="register">
                <div className="mb-4">
                    <label for="email" className="form-label display-4">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email address..."
                    onChange={(e) => setEmail(e.target.value)}
                   
                    />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label display-4">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password..." 
                    onChange={(e) => setPassword(e.target.value)}
                   
                    />
                </div>
                <input type="button" className="btn btn-primary" value="Register" 
                onClick={handleSubmit}
                  
                />
                </form>
                <button
                className='btn btn-secondary mb-2 mt-2'
                
                >
                    Continue with Google
                </button>
            </div>
        </div>
    )
}

export default Register;
