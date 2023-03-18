import React, { useState } from 'react'
import axios from 'axios';

const Post = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

     const handleSubmit = (e) =>{
         e.preventDefault();
         
         axios.post("https://jsonplaceholder.typicode.com/posts",{
            title:title,
               body:body
         })
         .then((res) =>{
               
                console.log(res)
         })

         .catch((error) =>{
            console.log(error)
         })




     }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor=""> Enter title</label>
            <input type="text" name='title' value={title} onChange = {(e) => setTitle(e.target.value)}/>
           <br/>
           <br/>
            <label htmlFor=""> Enter Body</label>
            <input type="text" name='body' value={body} onChange = {(e) => setBody(e.target.value)}/>
            <br/><br/>
             <input type="submit" value='Submit' />
            
            
            </form> 
    </>
  )
}

export default Post
