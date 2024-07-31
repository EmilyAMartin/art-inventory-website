import React from 'react'

const Artwork = () => {
  return (
   
    
      <div className='artwork-form-container'>
        <div className='artwork-header'>Artwork</div>
        
        <label for='title'><b>Title</b></label>
        <input aria-label='title' type='text' placeholder='Title' name='title' required/>

        <label for='year'><b>Year</b></label>
        <input aria-label='year' type='text' placeholder='Year' name='year' required/>

        <label for='medium'><b>Medium</b></label>
        <input aria-label='medium' type='text' placeholder='Medium' name='medium' required/>
        
        <label for='Location'><b>Location</b></label>
        <input aria-label='location' type='text' placeholder='Location' name='location' required/>
        
        <div className='login-buttons'>
          <button type='submit-button' className='submit-button'>Submit</button>
          <button type='button' className='cancel-button'>Cancel</button> 
        </div>
        
      </div>
  )
}

export default Artwork