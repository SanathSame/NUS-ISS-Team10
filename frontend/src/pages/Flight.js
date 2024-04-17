import React from 'react'
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import Hero from 'components/hero/FullWidthWithImage_Flight.js'
import Slider from 'components/cards/Flight_Slider.js'
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
    </AnimationRevealPage>
  )
}
