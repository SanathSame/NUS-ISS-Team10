import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' // Import the useNavigate hook
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import { Container as ContainerBase } from 'components/misc/Layouts'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from 'images/login-illustration.svg'
import logo from 'images/logo.svg'
import { ReactComponent as LoginIcon } from 'feather-icons/dist/icons/log-in.svg'
import { AuthApi } from 'api/auth/AuthApi'

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`
const LogoLink = tw.a``
const LogoImage = tw.img`h-12 mx-auto`
const MainContent = tw.div`mt-12 flex flex-col items-center`
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`
const FormContainer = tw.div`w-full flex-1 mt-8`
const Form = tw.form`mx-auto max-w-xs`
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`

export default ({
  logoLinkUrl = '#',
  illustrationImageSrc = illustration,
  headingText = 'Sign In To Travel-Aid',
  submitButtonText = 'Sign In',
  SubmitButtonIcon = LoginIcon,
  signupUrl = '/components/innerPages/SignupPage'
}) => {
  const navigate = useNavigate()
  const [redirectTo, setRedirectTo] = useState(null) // State to manage redirection

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo)
    }
  }, [redirectTo, navigate])

  const handleLogin = async (event) => {
    event.preventDefault()
    const username = document.querySelector('#username')
    const password = document.querySelector('#password')

    try {
      const formData = new FormData()
      formData.append('username', username.value)
      formData.append('password', password.value)

      const formObjectRequest = Object.fromEntries(formData)
      const response = await AuthApi.authenticateUser(formObjectRequest)
      console.log(response)

      localStorage.setItem('refreshToken', response.data.data.refreshToken)
      localStorage.setItem('accessToken', response.data.data.accessToken)
      localStorage.setItem('username', username.value)
      console.log('Login successful!')
      setRedirectTo('/components/landingPages/LandingPage')
      location.reload()
    } catch (error) {
      // Use a more clear way to check if there is an error message
      const errorMessage = error.message !== undefined ? error.message : 'Login failed'
      console.error(errorMessage)
    }
  }

  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>
                <Form>
                  <Input id="username" type="text" placeholder="Username" />
                  <Input id="password" type="password" placeholder="Password" />
                  <SubmitButton type="button" onClick={handleLogin}> {/* Changed to type button and added onClick event */}
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                </Form>
                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Don't have an account?{' '}
                  <a href={signupUrl} tw="border-b border-gray-500 border-dotted">
                    Sign Up
                  </a>
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  )
}
