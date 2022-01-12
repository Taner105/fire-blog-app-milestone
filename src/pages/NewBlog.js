import React from 'react'
import blog from "../assests/blok.png"
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import firebase from '../helpers/firebase';
import { getDatabase, push, ref, set} from "firebase/database"

const NewBlog = () => {
    const context = useContext(AuthContext)
    // console.log(info);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        context.setInfo({...context.info,[name]:value})
        // console.log(e.target);
    }


    const handleContentChange = (e) => {
        const {name, value} = e.target;
       context.setInfo({...context.info,[name]:value})
    //    console.log(e.target);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
       addInfo(context.info)

    }

    const addInfo = (info) => {
        const db = getDatabase();
        const userRef = ref(db, "fireblog")
        const newUserRef = push(userRef)
        set(newUserRef, {
            title:context.info.title,
            ımgUrl:context.info.ımgUrl,
            content:context.info.content
        })
        console.log("veri eklendi");
    }
    return (
        <div className='newBlog-container'>
            <img id='newBlog-img' src={blog} alt="" />
            <h1>— New Blog —</h1>
            <form onSubmit={handleFormSubmit}>
                <input 
                type="text" 
                name="title" 
                id="title" 
                placeholder='Title*' 
                value={context.info.title}
                onChange={handleInputChange}
                />
                <input 
                type="text" 
                name="ımgUrl" 
                id="ımgUrl" 
                placeholder='Image URL*'
                 value={context.info.ımgUrl}
                onChange={handleInputChange}
                />
                <textarea 
                name="content" 
                id="content"  
                placeholder='Content*'
                value={context.info.content}
                onChange={handleContentChange}
                ></textarea>
                <button id='newBlog-btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewBlog;
