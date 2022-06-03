import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'

export const RegisterScreen = () => {

  const [values, handleInputChange ] = useForm({
    name: 'joser',
    email: 'jose@jose.com',
    password: '123456',
    password2: '123456'
  });

  const {name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();

    if( isFormValid() ) {
      
    }
    
  };
  
  const isFormValid = () => {

    if ( name.trim().length === 0 ) {
      console.log('name required')
      return false;
    } else if ( !validator.isEmail( email ) ) {
      console.log('email not valid')
      return false
    } else if ( password !== password2 || password.length  < 5 ) {
      console.log('password should be at least 6 characters and match each other')
      return false
    }

    return true;
  }

  return (
<>
        <h3 className='auth__title '>Register</h3>
        
        <form onSubmit={handleRegister}>

          <div className="auth__alert-error">
            Hello world
          </div>

          <input 
            type="text"
            placeholder='Write your Name'
            name='name'
            className='auth__input'
            autoComplete='off'
            value={name}
            onChange={ (e) => {handleInputChange(e)} }

          />

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

          <input 
            type="password"
            placeholder='Confirm password'
            name='password2'
            className='auth__input'
            value={password2}
            onChange={ handleInputChange }
          />

          <button
            type='submit'
            className='btn btn-primary btn-block mb-5'
          >
            Register
          </button>

          <Link to="/auth/login" className='link'
          >
            Already Register?
          </Link>
          
        </form>
    </>
  )
}
