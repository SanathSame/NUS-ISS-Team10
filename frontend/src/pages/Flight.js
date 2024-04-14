import React from 'react'
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import Hero from 'components/hero/FullWidthWithImage_Flight.js'
import Slider from 'components/cards/ThreeColSlider_Flight.js'
import Footer from 'components/footers/MiniCenteredFooter.js'
// import { FlightApi } from 'api/flight/FlightApi'

export default () => {
  // const [flightData, setFlightData] = useState([])
  // const fetchFlightData = async () => {
  //   try {
  //     const response = await FlightApi.getFlights()
  //     console.log(response.data)
  //     setFlightData(response.data.data)
  //   } catch (error) {
  //     console.error('Error fetching flight data:', error)
  //   }
  // }

  // useEffect(() => {
  //   fetchFlightData()
  // }, [])

  return (
    <AnimationRevealPage disabled>
      <Hero />
      <Slider />
      <Footer />
    {/* <Container>
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
    </Container> */}
    </AnimationRevealPage>
  )
}
