import React, { useState } from 'react'

const Registration = () => {
  return (
      <div className='registration-form-container'>
         <div className='close-button'>&times;</div>
        <div className='registration-header'>Sign Up</div>
        <div className='registration-primary-text'> Please fill in this form to create an account.</div>
        
        <label for='email'><b>Email</b></label>
        <input aria-label='email' type='text' placeholder='Enter Email' name='email' required/>

        <label for='password'><b>Password</b></label>
        <input aria-label='password' type='text' placeholder='Enter Password' name='password' required/>

        <label for='repeat-password'><b>Repeat Password</b></label>
        <input aria-label='repeat-password' type='text' placeholder='Repeat Password' name='repeat-password' required/>
      
        <label>
          <input aria-label='remember-me-checkbox' type='checkbox' checked='checked' name='remember' style={{marginRight: '0.5rem'}}/>
          Remember me
        </label>
        
        <div className='registration-buttons'>
          <button type='submit-button' className='submit-button'>Sign Up</button>
          <button type='button' className='cancel-button'>Cancel</button>
          
        </div>
      </div>
  )
}

export default Registration