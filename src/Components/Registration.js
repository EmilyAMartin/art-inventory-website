import React from 'react'

const Registration = () => {
  return (
    <form>
      <div className='registration-form-container'>
        <div className='registration-header'>Sign Up</div>
        <div className='registration-primary-text'> Please fill in this form to create an account.</div>
        
        <label for="email"><b>Email</b></label>
        <input aria-label='email' placeholder='Enter Email' name='email' required/>

        <label for="password"><b>Password</b></label>
        <input aria-label='password' placeholder='Enter Password' name='password' required/>

        <label for="repeat-password"><b>Repeat Password</b></label>
        <input aria-label='repeat-password' placeholder='Repeat Password' name='repeat-password' required/>
      
        <label></label>


        <div className='registration-footer-text'></div>
      </div>
      </form>

  )
}

export default Registration