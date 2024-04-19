import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' // Import the useNavigate hook
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'

export default () => {
  const navigate = useNavigate()
  const [redirectTo, setRedirectTo] = useState(null) // State to manage redirection

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo)
    }
  }, [redirectTo, navigate])

  try {
    localStorage.clear('refreshToken')
    localStorage.clear('accessToken')
    console.log('Logout successful!')
    setRedirectTo('/')
    location.reload()
  } catch (error) {
    // Use a more clear way to check if there is an error message
    const errorMessage = error.message !== undefined ? error.message : 'Logout failed'
    console.error(errorMessage)
  }

  return (
    <AnimationRevealPage>
    </AnimationRevealPage>
  )
}
