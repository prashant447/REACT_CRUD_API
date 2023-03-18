import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

// https://mockapi.io/projects/63efb21b4d5eb64db0cf4c82

const Create = () => {

  let navigate = useNavigate();

    const [name, setName] = useState('')

    const [age, setAge] = useState('')

    const [email, setEmail] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://63efb21b4d5eb64db0cf4c81.mockapi.io/crud',{
            e_name: name,
            e_email: email,
            e_age: age
        })
             navigate('/')

    }
  return (
    <>

    
     <div className="container mt-5 text-center">

     <Link to='/'><button className='btn btn-danger px-5'>Read Data</button></Link>
     <form className='w-50 m-auto mt-5 ' onSubmit={handleSubmit}>

     <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="type" name = 'name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter Age</label>
    <input type="text"  name = 'age' class="form-control" id="exampleInputPassword1" onChange={(e) => setAge(e.target.value)}/>
  </div>

  <button type="submit" class="btn btn-primary w-100">Submit</button>
</form>
     </div>

     {name}
        <br />
        {age}
     <br />
     {email}

   
    </>
    
  )
}

export default Create
