import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
// import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from '../headers/light.js'
// import Hero from 'components/hero/FullWidthWithImage.js'
import Footer from 'components/footers/MiniCenteredFooter.js'
// import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from '../headers/light.js'
// import { useNavigate } from 'react-router-dom' // Import the useNavigate hook
// import { Container as ContainerBase } from 'components/misc/Layouts'
// import tw from 'twin.macro'
// import styled from 'styled-components'
import { css } from "styled-components/macro"; //eslint-disable-line
import { FlightApi } from 'api/flight/FlightApi'

// const StyledHeader = styled(Header)`
//   ${tw`justify-between`}
//   ${LogoLink} {
//     ${tw`mr-8 pb-0`}
//   }
// `

// const NavLink = tw(NavLinkBase)`
//   sm:text-sm sm:mx-6
// `

const Container = tw.div`relative -mx-8 -mt-8`
// const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`
// const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`
// const RightColumn = styled.div`
//   background-image: url("https://images.pexels.com/photos/1068795/pexels-photo-1068795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
//   ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
// `
// const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`
// const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`

const FlightPage = () => {
  const [flightData, setFlightData] = useState([])
  const fetchFlightData = async () => {
    try {
      const response = await FlightApi.getFlights()
      console.log(response.data)
      setFlightData(response.data.data)
    } catch (error) {
      console.error('Error fetching flight data:', error)
    }
  }

  useEffect(() => {
    fetchFlightData()
  }, [])

  return (
    <AnimationRevealPage disabled>
    <Container>
      <h2>Flight Data</h2>
      <table>
        <thead>
          <tr>
            <th>Flight ID</th>
            <th>Departure City</th>
            <th>Departure Country</th>
            <th>Arrival City</th>
            <th>Arrival Country</th>
            <th>Departure Date</th>
            <th>Departure Time</th>
            <th>Flight Duration</th>
            <th>Ticket Price</th>
          </tr>
        </thead>
        <tbody>
          {flightData.map((flight) => (
            <tr key={flight._id}>
              <td>{flight._id}</td>
              <td>{flight.departure_city}</td>
              <td>{flight.departure_country}</td>
              <td>{flight.arrival_city}</td>
              <td>{flight.arrival_country}</td>
              <td>{flight.departure_date}</td>
              <td>{flight.departure_time}</td>
              <td>{flight.flight_duration}</td>
              <td>{flight.ticket_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
    <Footer />
    </AnimationRevealPage>
  )
}

export default FlightPage
