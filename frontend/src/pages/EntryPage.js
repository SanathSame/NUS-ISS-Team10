import Hero from '../components/hero/TwoColumnWithInput.js'
import React from 'react'
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import Footer from 'components/footers/MiniCenteredFooter.js'

export default () => {
  return (
      <AnimationRevealPage>
       <Hero/>
       <Footer />
      </AnimationRevealPage>
  )
}
