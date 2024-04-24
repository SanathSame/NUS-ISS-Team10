import React, { useState, useEffect } from 'react'
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import { useNavigate } from 'react-router-dom' // Import the useNavigate hook
import { Container as ContainerBase } from 'components/misc/Layouts'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from 'images/Mobile login-amico.svg'
import logo from 'images/logo.svg'
import googleIconImageSrc from 'images/google-icon.png'
import twitterIconImageSrc from 'images/twitter-icon.png'
import { ReactComponent as SignUpIcon } from 'feather-icons/dist/icons/user-plus.svg'
import { UserApi } from 'api/user/UserApi'

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
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`
export default ({
  logoLinkUrl = '/components/innerPages/LoginPage',
  illustrationImageSrc = illustration,
  headingText = 'Sign Up For Travel-Aid',
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: 'Sign Up With Google',
      url: 'https://google.com'
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: 'Sign Up With Twitter',
      url: 'https://twitter.com'
    }
  ],
  submitButtonText = 'Sign Up',
  SubmitButtonIcon = SignUpIcon,
  signInUrl = '/components/innerPages/LoginPage'
}) => {
  const navigate = useNavigate()
  const [redirectTo, setRedirectTo] = useState(null) // State to manage redirection
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo)
    }
  }, [redirectTo, navigate])

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleSignup = async (event) => {
    event.preventDefault()
    const username = document.querySelector('#username').value
    const email = document.querySelector('#email').value
    console.log('Password is', password)
    console.log('Confirm password is', confirmPassword)
    if (password !== confirmPassword) {
      setPasswordsMatch(false)
      return
    }
    try {
      const formData = new FormData()
      formData.append('username', username)
      formData.append('password', password)
      formData.append('email', email)
      const formObjectRequest = Object.fromEntries(formData)
      console.log(formObjectRequest)
      const response = await UserApi.createNewUser(formObjectRequest)
      console.log('Signup successful!')
      console.log(response)
      setRedirectTo('/components/innerPages/LoginPage')
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
                  <Input id="email" type="email" placeholder="Email" />
                  <Input id="password" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                  <Input id="confirmPassword" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                  {!passwordsMatch && <p tw="mt-2 text-red-500 text-xs">Passwords do not match</p>}
                  <SubmitButton type="button" onClick={handleSignup}>
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                  <p tw="mt-8 text-sm text-gray-600 text-center">
                    Already have an account?{' '}
                    <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
                      Sign In
                    </a>
                  </p>
                </Form>
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
