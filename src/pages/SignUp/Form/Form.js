 import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css';
import logo from './assets/img-2.svg'

 
 const Form = () => {
     const [isSubmitted, setIsSubmitted]=useState(false)

    function submitForm(){
        setIsSubmitted(true)
    }

     return (
         <>
        <div className="form-container">
            <span className="close-btn"></span>
            <div className="form-content-left">
                <img src={logo} alt="SpaceShip" className="form-img" />
            </div>
            {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess/>}
        </div> 
             
             

         
         </>
     )
 }
 
 export default Form
 