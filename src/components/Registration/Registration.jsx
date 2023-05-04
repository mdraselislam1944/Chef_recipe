/* eslint-disable no-unused-vars*/ 
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Registration = () => {
    const [photoUrl, setPhotoUrl] = useState('');
    const {createUser}=useContext(AuthContext)
    const handleRegistration=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        form.reset();
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className='text-center my-5'>
            <h3>Please Registration</h3>
            <form onSubmit={handleRegistration}>
            <input className='py-2 px-5' type="text" name="name" id="name" required placeholder='Enter your name'/><br/>
                <input className='py-2 px-5 mt-2' type="email" name="email" id="email" required placeholder='Enter your Email'/><br/>
                <input className='py-2 px-5 my-2' type="password" name="password" id="password" required placeholder='Enter Password'/><br/>
                <input  className='py-2 px-5 my-2' type="text" value={photoUrl} onChange={(event) => setPhotoUrl(event.target.value)} required placeholder='Enter your Image Url' /><br/>

             <input className='btn btn-secondary' type="submit" value="submit" />
                
            </form>
            <div>
                <p className='my-3'>Already Register? Please <Link to='../LogIn'><button className='btn btn-secondary'>Login</button></Link></p>
            </div>
        </div>
    );
};

export default Registration;