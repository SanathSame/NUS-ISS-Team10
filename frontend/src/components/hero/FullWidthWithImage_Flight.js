import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from '../headers/light.js'

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`

const Container = tw.div`relative -mx-8 -mt-8`
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`
const RightColumn = styled.div`
  background-image: url("https://images.unsplash.com/photo-1572852006077-e12f751bed25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&width=1440&height=1024&q=75");
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">Itenerary</NavLink>
      <NavLink href="/components/innerPages/FlightPage">Flights</NavLink>
      <NavLink href="/components/innerPages/HotelPage">Hotels</NavLink>
      <NavLink href="/components/innerPages/AttractionPage">Attractions</NavLink>
    </NavLinks>
  ],
  heading = (
    <>
      Find the perfect Flight
      <wbr />
      <br />
      <span tw="text-primary-500">for your Destination</span>
    </>
  )
}) => {
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </Container>
  )
}
