/* eslint-disable no-unused-vars*/ 
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const LogIn = () => {
    const {signIn,googleLogin,githubLogin}=useContext(AuthContext);
    const [use1,setUse]=useState();
    const handleLogin=(event)=>{
        event.preventDefault();
         const form=event.target;
         const email=form.email.value;
         const password=form.password.value;
         form.reset();
         signIn(email,password)
         .then(result=>{
            setUse(result);
            console.log(result.user);
         })
         .catch(error=>{
            setUse(error)
            console.log(error.message);
         })

    }
    const handleGoogleSignIn=()=>{
       
        googleLogin()
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    const handleGithubLogin=()=>{
        githubLogin()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className='text-center my-5'>
            <h3>Please Login</h3>
            <div className='d-flex flex-column flex-md-row justify-content-around align-items-center container py-5'>
                <div>
                    <h3>login with email and password</h3>
                <form onSubmit={handleLogin}>
                <input className='py-2 px-5' type="email" name="email" id="name" required placeholder='Enter your Email'/><br/>
                <input className='py-2 px-5 my-2' type="password" name="password" id="password" required placeholder='Enter Password'/><br/>
                <input className='btn btn-secondary' type="submit" value="submit" />
               </form>
                </div>
                <div>
                <div className='my-3'>
                <h3>Login with</h3>
                <button className='btn btn-secondary'  onClick={handleGoogleSignIn}>Google Account</button>
              
                </div>
                <div>
                    <h3>Login with  </h3>
                    <button className='btn btn-secondary' onClick={handleGithubLogin} >Github Account</button>
                </div>
                </div>
            </div>
            <div>
                <p className='my-3'>New User? Please <Link to='../Registration'><button className='btn btn-secondary'>Registration</button></Link></p>
            </div>
        </div>
    );
};

export default LogIn; 


// https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-mdraselislam1944/tree/main/bangladeshi-chef-recipe-client

// https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-mdraselislam1944

// Clinet site, firebase এ Deploy এর জন্য নিচের স্টেপগুলো ফলো করুন -
// firebase deploy ⤵️
//  => npm uninstall -g firebase-tools
// => npm install -g firebase-tools
// => firebase login
// => firebase init

// =>[Select]  Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys  
// => pubic directory : dist 
// => index.html : y
// => deploy with github : n
// ******************
// => npm run build 
// => firebase deploy
// *****************