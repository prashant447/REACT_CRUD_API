import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Read = () => {

  const [get, setGet] = useState([])



           const  getData = () =>{
                axios.get('https://63efb21b4d5eb64db0cf4c81.mockapi.io/crud')
                .then((res) =>{
                    setGet(res.data)
                })
             }

             const handleDelete = (id) =>{
            axios.delete(`https://63efb21b4d5eb64db0cf4c81.mockapi.io/crud/${id}`)
              .then((res) =>{
                getData(res);
              })
             }

             const handleEdit = (id,name, age, email) =>{
               localStorage.setItem('id', id)
               localStorage.setItem('name', name)
                  localStorage.setItem('email', email)
                  localStorage.setItem('age', age)
             }



        useEffect(() => {
        getData();
        }, [])
        
  return (
    <>
      <div className="container my-4">
     <Link to='/create'><button className='btn btn-danger px-5'>Create</button></Link>

      <table class="table my-5 table-dark shadow-lg table-bordered rounded">
  <thead>

    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    

      {
        get.map( (currElem) =>{

          const {id, e_name, e_email, e_age} =currElem
          return(

            <>
            <tr >
            <th scope="row" key={id}>{id}</th>
      <td>{e_name}</td>
      <td>{e_email}</td>
      <td>{e_age}</td>
      <td><Link to='/edit'><button className='btn btn-primary' onClick={() => handleEdit(id,e_name, e_age,e_email,  )}>Edit</button></Link></td>
      <td><button onClick={() =>{ if (window.confirm('Are you you want to delete data')) { handleDelete(id) }}} className='btn btn-warning'>Delete</button></td>
      </tr>
            </>

          )
        })
      }
     
    
   
    
  
  </tbody>
</table>
      </div>
    </>
  )
}

export default Read
