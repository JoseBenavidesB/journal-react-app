import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    email:'jose@jose.com',
    password: '123456'
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword(email, password) ) //248
  }

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }

  return (
    <>
        <h3 className='auth__title'>Login</h3>
        
        <form onSubmit={handleLogin}>

          <input 
            type="text"
            placeholder='Write your email'
            name='email'
            className='auth__input'
            autoComplete='off'
            value={email}
            onChange={ handleInputChange }
          />

<input 
            type="password"
            placeholder='Write your password'
            name='password'
            className='auth__input'
            value={password}
            onChange={ handleInputChange }
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
                onClick={ handleGoogleLogin }
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
