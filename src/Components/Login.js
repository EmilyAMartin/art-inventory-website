import React from 'react'

const Login = () => {
  return (
   
    
      <div className='login-form-container'>
           <div className='close-button'>&times;</div>
        <div className='login-header'>Login</div>
        
        <label for='email'><b>Email</b></label>
        <input aria-label='email' type='text' placeholder='Enter Email' name='email' required/>

        <label for='password'><b>Password</b></label>
        <input aria-label='password' type='text' placeholder='Enter Password' name='password' required/>

        <label>
          <input aria-label='remember-me-checkbox' type='checkbox' checked='checked' name='remember' style={{marginRight: '0.5rem'}}/>
          Remember me
        </label>
        <span className='login-forgot-password'>Forgot <a href="#">password?</a></span>
        
        <div className='login-buttons'>
          <button type='submit-button' className='submit-button'>Login</button>
          <button type='button' className='cancel-button'>Cancel</button> 
        </div>
        
      </div>
  )
}

export default Login