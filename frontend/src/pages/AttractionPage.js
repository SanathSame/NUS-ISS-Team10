import React from 'react'
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import Hero from 'components/hero/FullWidthWithImage_Flight.js'
import Slider from 'components/cards/ThreeColSliderModified.js'
import Footer from 'components/footers/MiniCenteredFooter.js'

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Hero headingText='Find the Best Attractions'/>
      <Slider />
      <Footer />
    </AnimationRevealPage>
  )
}
