import React from 'react'
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import Hero from 'components/hero/FullWidthWithImage_Flight.js'
import Slider from 'components/cards/Flight_Slider.js'
import Footer from 'components/footers/MiniCenteredFooter.js'

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <Slider />
      <Footer />
    </AnimationRevealPage>
  )
}
