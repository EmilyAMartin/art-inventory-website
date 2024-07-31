import React from 'react'

const Registration = () => {
  return (
   
    
      <div className='registration-form-container'>
        <div className='registration-header'>Sign Up</div>
        <div className='registration-primary-text'> Please fill in this form to create an account.</div>
        
        <label for='email'><b>Email</b></label>
        <input aria-label='email' type='text' placeholder='Enter Email' name='email' required/>

        <label for='password'><b>Password</b></label>
        <input aria-label='password' type='text' placeholder='Enter Password' name='password' required/>

        <label for='repeat-password'><b>Repeat Password</b></label>
        <input aria-label='repeat-password' type='text' placeholder='Repeat Password' name='repeat-password' required/>
      
        <label>
          <input aria-label='remember-me-checkbox' type='checkbox' checked='checked' name='remember'/>
          Remember me
        </label>
        
        <div className='registration-buttons'>
          <button type='button' className='cancel-button'>Cancel</button>
          <button type='submit-button' className='submit-button'>Sign Up</button>
        </div>
      </div>
     
    

  )
}

export default Registration