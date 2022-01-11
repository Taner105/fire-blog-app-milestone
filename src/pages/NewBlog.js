import React from 'react'
import blog from "../assests/blok.png"

const NewBlog = () => {
    return (
        <div className='newBlog-container'>
            <img id='newBlog-img' src={blog} alt="" />
            <h1>— New Blog —</h1>
            <form>
                <input 
                type="text" 
                name="title" 
                id="title" 
                placeholder='Title*' 
                value={null}
                onChange={null}
                />
                <input 
                type="text" 
                name="ımgUrl" 
                id="ımgUrl" 
                placeholder='Image URL*'
                 value={null}
                onChange={null}
                />
                <textarea 
                name="content" 
                id="content"  
                placeholder='Content*'
                value={null}
                onChange={null}
                ></textarea>
                <button id='newBlog-btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewBlog;
