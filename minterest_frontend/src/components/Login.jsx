import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import shareVideo from  '../assets/share.mp4'
import logo from '../assets/logowhite.png'

const Login = () => {

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          autoPlay
          loop
          muted
          controls={false}
          type='video/mp4'
          className='object-cover w-full h-full'
        />

        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} alt='logo' width="130px" />
          </div>

          <div className='shadow-2xl'>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <button
                type='button'
                className='bg-mainColor flex justify-center items-center text-black p-3 font-bold rounded-lg hover:bg-mainColorDark'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                >
                  <FcGoogle className='mr-4' /> Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy='single_host_origin'
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login