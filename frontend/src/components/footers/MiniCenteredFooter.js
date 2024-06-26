import React from 'react'
import tw from 'twin.macro'
import { Container as ContainerBase } from 'components/misc/Layouts.js'
import logo from '../../images/logo.svg'

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`
const LogoImg = tw.img`w-8`
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`

export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>Travel-Aid</LogoText>
          </LogoContainer>
        </Row>
      </Content>
    </Container>
  )
}
