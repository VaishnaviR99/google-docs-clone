import React, { useEffect, useState } from 'react'
import doc from '../image/docs_2020q4_48dp.png'
import { auth, provider } from "../firebase"
import { signInWithPopup } from "firebase/auth"
import { signIn } from 'next-auth/react'
import Header from './Header'

function Login() {
    const [value, setValue] = useState('');
    
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem('email', data.user.email)

        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'));
    })
   

    return (
        <>
         {value?<Header/>:
       
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
          
            <img src={doc} alt="docs" height={80} width={120} />

            <h1 className='mt-4 text-3xl text-gray-500'>Google Docs</h1>
            <div>
            <button className=' mt-5 bg-blue-500 hover:bg-blue-400 text-white 
             py-2 px-8 rounded' onClick={handleClick}>LogIn</button>
            </div>
            
        </div>}
         </>
    )
}

export default Login