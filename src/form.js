import React from 'react';
import { useState } from 'react';

function Form() {
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
        e.preventDefault();
    
        if (uname === '' || email==='' || password === '') {
          alert('Please enter all fields');
        }
        else {
          alert('Successfully Logged In')
        }
      }

  return (
    <div className='container'>

      <div className='top'>
      <h1>Login Form</h1>

      </div>

      <form onSubmit={handleSubmit}>
        <div className='textField'>
        <label>username:</label>
        <input type='text' value={uname} onChange={(e)=>setUname(e.target.value)}/>
        </div>
        

        <div className='textField'>
        <label>email:</label>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className='textField'>
        <label>password:</label>
        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>

        </div>
        <div className='submit-container'>
          <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
        </div>

      </form>

      <a className="link" href="/signup">Sign Up</a>

    </div>
  )
}

export default Form;