import React from 'react'
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import Hero from 'components/hero/FullWidthWithImage_Flight.js'
import Itineraries from 'pages/BlogIndex.js'
import Footer from 'components/footers/MiniCenteredFooter.js'
import styled from 'styled-components'
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
`

const ContentContainer = styled.div`
  flex: 1; /* Take remaining vertical space */
`
export default () => {
  return (
    <AnimationRevealPage>
      <PageContainer>
        <Hero headingText="Plan your perfect itinerary" />
        <ContentContainer>
          <Itineraries />
        </ContentContainer>
        <Footer />
      </PageContainer>
    </AnimationRevealPage>
  )
}
