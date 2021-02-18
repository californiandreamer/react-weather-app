import React, { useEffect, useState } from 'react'
import cls from './FormAuth.module.css'
import classNames from 'classnames'
import useInput from '../../hooks/useInput'
import axios from 'axios'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { Redirect, withRouter } from 'react-router-dom'


const FormAuth = () => {
  const {value:email, bind:bindEmail} = useInput('')
  const {value:password, bind:bindPassword} = useInput('')
  const [status, setStatus] = useState(false)

  const apiKey = 'AIzaSyBAo3h0peJurzBzqfGPWx3eQRh79HxsV_A'
  
  const loginHandler = async (e) => {
    e.preventDefault();

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    try {
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, authData)
      const isRegistered = response.data.registered
      localStorage.setItem('isRegistered', status)
      setStatus(isRegistered);
      console.log('Login success!');
  } catch (e) {
    console.log(e, "status is ===", status)
  }
  }
  
  const registerHandler = async (e) => {
    e.preventDefault();

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
  }
  try {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, authData)
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

const setLoggedItem = () => {
  setStatus(true)
  localStorage.setItem('isRegistered', true)
}

const checkStatus = localStorage.getItem('isRegistered')

const loginStatusHandler = (e) => {

  if(checkStatus) {
    console.log('true');
    setStatus(true)
  } else {
    console.log('false');
  }
}

const isEmpty = (e) => {
  e.preventDefault();
  
  if(email || password === '') {
    console.log('empty')
  }
}

useEffect(() => {
  loginStatusHandler()
}, [])

  const responseGoogle = (response) => {
    console.log(response);
  }
  
  const responseFacebook = (response) => {
    console.log(response);
  }


  const btnStyle = classNames(cls.button, cls.sign__button)
  
    return (
        <form className={cls.form} onSubmit={loginHandler}>
          <input className={cls.input} {...bindEmail}  type="email" name="email" placeholder="E-mail" />
          <input className={cls.input} {...bindPassword} type="password" name="password" placeholder="Password" />
          <div className={cls.buttons__wrapper}>
              <button className={cls.button}>Log In</button>
              <button className={btnStyle} onClick={registerHandler}>Sign In</button>
          </div>
          <div className={cls.social__sign}>
            <GoogleLogin
              className={cls.google__login}
              clientId="449993429352-7on6s5du4of30gucuis3lvs9mp8pct2b.apps.googleusercontent.com"
              buttonText="Login"
              onClick={responseGoogle}
              onSuccess={() => {setLoggedItem()}}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
            <FacebookLogin
              cssClass={cls.facebook__login}
              appId="3500138520005395"
              autoLoad={false}
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={responseFacebook}
              icon="fa-facebook" />
            </div>
            {status || checkStatus ? <Redirect to="/account" /> : null}
      </form>
    )
}

export default withRouter(FormAuth)