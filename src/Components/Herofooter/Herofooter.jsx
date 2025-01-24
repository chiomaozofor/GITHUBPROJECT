import React from 'react'
import "./Herofooter.css"

const Herofooter = () => {
  return (
    <div className='Herofooter'>
      <h1>Million of developers and businesses call GitHub home</h1>
      <p className='p1'>
        Whether you're scaling your development process or just learning how to code,GitHub is where you belong.join the world's most widely adopted AI-powered developer platform to build the technologies that redefined what's possible.
      </p>
      <div className='sign-H'>
      <div className='sign-up'>
        <input placeholder='ENTER YOUR EMAIL' type="text"/>
      <button className="btn get-started">Sign-up for GitHub</button>
      </div>
      
      <p className='p2'>Try Github Copilot</p>
      </div>
    </div>
  )
}

export default Herofooter
