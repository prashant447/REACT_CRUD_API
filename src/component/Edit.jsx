import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Edit = () => {

    const navigate = useNavigate();
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
             setName(localStorage.getItem('name'))
             setEmail(localStorage.getItem('email'))
             setAge(localStorage.getItem('age'))
             setId(localStorage.getItem('id'))
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`https://63efb21b4d5eb64db0cf4c81.mockapi.io/crud/${id}`,{
            e_name:name,
            e_email:email,
            e_age:age
        })
        .then(() =>{
            navigate('/')
            
        })
    }
    
  return (
    <>
      <div className="container mt-5 ">

<Link to='/'><button className='btn btn-danger px-5'>Read Data</button></Link>
<form className='w-50 me-auto mt-5 'onSubmit={handleSubmit}>

<div class="mb-3 ">
<label for="exampleInputEmail1" class="form-label">Name</label>
<input type="type" name = 'name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) =>setName(e.target.value)}/>
</div>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) =>setEmail(e.target.value)}/>
</div>

<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Enter Age</label>
<input type="text"  name = 'age' class="form-control" id="exampleInputPassword1" value={age} onChange={(e) =>setAge(e.target.value)}/>
</div>

<input type="submit" value='Update' class="btn btn-primary w-100"/>
</form>
</div>
    </>
  )
}

export default Edit
