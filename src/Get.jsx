import React, {useEffect,useState} from 'react'
import axios from 'axios'


const Api = "https://jsonplaceholder.typicode.com/posts"

const Get = () => {
    const [post, setPost] = useState([])


    const loadApi = (url) =>{
        axios.get(url)
        .then((res) =>{ 
            // console.log(res.data)
            setPost(res.data)
        })
    }



    useEffect(() => {
      loadApi(Api)
    }, [])
    
  return (
    <>

       {
        post.map((currElem) =>{
               const{id,title,body}=currElem

            return(
                <>
                <div className='index' key={id}>
                <h2>{id}</h2>
                <h1>{title}</h1>
               <p>{body}</p>
                </div>
               
               </>
            )
        })
       }
    
      
    </>
  )
}

export default Get
