import React from 'react'
import './Features.css'
import ScrollingIcons from '../Scrollingicons/Scrollingicons'



const Features = () => {
  return (
    <div className='feature-cont'>
       <div className='features'>
        <p>Code</p>
        <p>Plan</p>
        <p>Collaborate</p>
        <p>Automate</p>
        <p>Secure</p>
       </div>
       <p className='comment'>Build code quickly and more securely with Github Copilot embedded throughout your workflows</p>
       <ScrollingIcons/>
       </div>
    
  )
}

export default Features