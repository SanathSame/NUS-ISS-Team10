import React from 'react'
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import styled from 'styled-components' //eslint-disable-line
import { css } from 'styled-components/macro' //eslint-disable-line
import Header from 'components/headers/light.js'
import Footer from 'components/footers/MiniCenteredFooter.js'
import MainFeature1 from 'components/features/TwoColWithButton.js'
// import TeamCardGrid from 'components/cards/ProfileThreeColGrid.js'

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        heading='Book flights'
        description='Travel-Aid helps users find the best flights to their destinations and back.'
        buttonRounded={false}
        primaryButtonText='Book flights'
        imageSrc='https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <MainFeature1
        heading='Book hotels'
        description='Travel-Aid helps users find the perfect hotels to help amplify their holiday experience.'
        buttonRounded={false}
        primaryButtonText='Book hotels'
        imageSrc='https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fHww'
        textOnLeft={false}
      />
        <MainFeature1
        heading='Book attractions'
        description='What is a trip without attractions? Travel-Aid helps book attraction too so you are totally covered beforehand for your trip.'
        buttonRounded={false}
        primaryButtonText='Book attractions'
        imageSrc='https://images.unsplash.com/photo-1534016493773-9cdaf3eb86c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG91cmlzdHN8ZW58MHx8MHx8fDA%3D'
      />
      {/* <TeamCardGrid
        subheading={<Subheading>Our Team</Subheading>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  )
}
