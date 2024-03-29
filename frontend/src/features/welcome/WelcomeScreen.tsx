import React, { useState } from 'react'
import { LoginScreen } from '../login/LoginScreen'
import { SignupScreen } from '../signup/SignupScreen'

export function WelcomeScreen (): JSX.Element {
  const [isFormLogin, setFormLoginStatus] = useState(true)

  return (
        <div className='container-fluid'>

          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Welcome to TravelAid</h1>
              <p className="col-lg-10 fs-4">An avenue for you to make your travel aspirations a reality.</p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
                <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                    {isFormLogin && <LoginScreen setFormLoginStatus={setFormLoginStatus}/>}
                    {!isFormLogin && <SignupScreen setFormLoginStatus={setFormLoginStatus}/>}
                </div>
            </div>
          </div>
        </div>
  )
}
