import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <>
        <h3 className='auth__title'>Login</h3>
        
        <form>

          <input 
            type="text"
            placeholder='Write your email'
            name='email'
            className='auth__input'
            autoComplete='off'
          />

<input 
            type="password"
            placeholder='Write your password'
            name='password'
            className='auth__input'
          />

          <button
            type='submit'
            className='btn btn-primary btn-block'
          >
            Send
          </button>
          <hr/>
          <div className='text-center mt-1'>
              <p>Logging with Social Networks</p>

              <div 
                className="google-btn auth__social-networks"
              >
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
              </div>
          </div>
          <Link to="/auth/register" className='link'
          >
            Create New Account
          </Link>
          
        </form>
    </>
  )
}
