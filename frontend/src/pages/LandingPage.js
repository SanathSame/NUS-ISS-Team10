import React from 'react'
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import styled from 'styled-components' //eslint-disable-line
import { css } from 'styled-components/macro' //eslint-disable-line
import Header, { NavLinks, NavLink as NavLinkBase } from 'components/headers/light.js'
import Footer from 'components/footers/MiniCenteredFooter.js'
import MainFeature1 from 'components/features/TwoColWithButton.js'
// import TeamCardGrid from 'components/cards/ProfileThreeColGrid.js'
import tw from 'twin.macro'

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`

export default (navLinks = [
  <NavLinks key={1}>
    <NavLink href="#">Itenerary</NavLink>
    <NavLink href="/components/innerPages/FlightPage">Flights</NavLink>
    <NavLink href="/components/innerPages/HotelPage">Hotels</NavLink>
    <NavLink href="/components/innerPages/AttractionPage">Attractions</NavLink>
    <NavLink href="/components/innerPages/LogoutPage">Logout</NavLink>
  </NavLinks>
]) => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        heading='Itenerary Builder'
        description='Make your best itenerary by trying out every combination, easily!'
        buttonRounded={false}
        primaryButtonText='Plan itenerary'
        primaryButtonUrl='/components/innerPages/BlogIndexPage'
        imageSrc='https://images.unsplash.com/photo-1522199710521-72d69614c702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbCUyMGl0ZW5lcmFyeXxlbnwwfHwwfHx8MA%3D%3D'
        textOnLeft={false}
      />
      <MainFeature1
        heading='Book flights'
        description='Travel-Aid helps users find the best flights to their destinations and back.'
        buttonRounded={false}
        primaryButtonText='Book flights'
        primaryButtonUrl='/components/innerPages/FlightPage'
        imageSrc='https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <MainFeature1
        heading='Book hotels'
        description='Travel-Aid helps users find the perfect hotels to help amplify their holiday experience.'
        buttonRounded={false}
        primaryButtonText='Book hotels'
        primaryButtonUrl='/components/innerPages/HotelPage'
        imageSrc='https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        textOnLeft={false}
      />
        <MainFeature1
        heading='Book attractions'
        description='What is a trip without attractions? Travel-Aid helps book attraction too so you are totally covered beforehand for your trip.'
        buttonRounded={false}
        primaryButtonText='Book attractions'
        primaryButtonUrl='/components/innerPages/AttractionPage'
        imageSrc='https://images.unsplash.com/photo-1689982922260-46cce9b95627?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <Footer />
    </AnimationRevealPage>
  )
}
