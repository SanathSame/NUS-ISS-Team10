import React from 'react'
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import Hero from 'components/hero/FullWidthWithImage_Flight.js'
import Footer from 'components/footers/MiniCenteredFooter.js'
import IteneraryBuilder from 'components/pricing/IteneraryBuilder'

export default () => {
  return (
    <AnimationRevealPage>
      <Hero headingText="Plan your perfect itinerary" />
      <IteneraryBuilder/>
      <Footer />
    </AnimationRevealPage>
  )
}
