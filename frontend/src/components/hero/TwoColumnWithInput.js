import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
// eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from '../headers/light.js'

import { ReactComponent as SvgDecoratorBlob1 } from '../../images/svg-decorator-blob-1.svg'
import DesignIllustration from '../../images/design-illustration-2.svg'

const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`
const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`
const Paragraph = styled.p`
  ${tw`my-5 lg:my-8 text-base xl:text-lg italic`}
`
const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`
export default ({ roundedHeaderButton }) => {
  // Define button text and URLs
  const primaryButtonText = 'Sign Up'
  const primaryButtonUrl = '/components/innerPages/SignupPage'
  const secondaryButtonText = 'Login'
  const secondaryButtonUrl = '/components/innerPages/LoginPage'

  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Travel<span tw="text-primary-500"> Aid</span>
            </Heading>
            <Paragraph>
              We help people who love to travel, travel.
            </Paragraph>
            <Actions>
              {/* Button components using defined values */}
              <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
              <PrimaryButton as="a" href={secondaryButtonUrl} tw="ml-4">{secondaryButtonText}</PrimaryButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  )
}
