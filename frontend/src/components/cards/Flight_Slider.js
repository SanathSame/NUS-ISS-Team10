import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import tw from 'twin.macro'
import styled from 'styled-components'
import { SectionHeading } from 'components/misc/Headings'
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons'
import { ReactComponent as PriceIcon } from 'feather-icons/dist/icons/dollar-sign.svg'
import { ReactComponent as LocationIcon } from 'feather-icons/dist/icons/map-pin.svg'
import { ReactComponent as ClockIcon } from 'feather-icons/dist/icons/clock.svg'
import { ReactComponent as ChevronLeftIcon } from 'feather-icons/dist/icons/chevron-left.svg'
import { ReactComponent as ChevronRightIcon } from 'feather-icons/dist/icons/chevron-right.svg'
import { FlightApi } from 'api/flight/FlightApi'
import FlightFilter from './Flight_Filter'
import { parse } from 'date-fns'

const Container = tw.div`relative`
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`
const Heading = tw(SectionHeading)``
const Controls = tw.div`flex items-center`
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`
const PrevButton = tw(ControlButton)``
const NextButton = tw(ControlButton)``

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
])

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`
const Title = tw.h5`text-2xl font-bold`

const DurationInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6`}
  }
`
const Duration = tw.span`ml-2 font-bold`

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`

export default () => {
  const [sliderRef, setSliderRef] = useState(null)
  const [flightData, setFlightData] = useState([])
  const [filteredFlights, setFilteredFlights] = useState([])

  useEffect(() => {
    fetchFlightData()
  }, [])

  const fetchFlightData = async () => {
    try {
      const response = await FlightApi.getFlights()
      const fetchedRawData = (response.data.data)
      const currentDate = new Date()
      currentDate.setHours(0, 0, 0, 0)
      const flightsAfterToday = fetchedRawData.filter(flight => {
        const departureDate = parse(flight.departure_date, 'dd-MM-yyyy', new Date())
        return (
          departureDate >= currentDate
        )
      })
      setFlightData(flightsAfterToday)
      setFilteredFlights(flightsAfterToday)
    } catch (error) {
      console.error('Error fetching flight data:', error)
    }
  }

  const handlePrimaryBtn = (flight) => {
    console.log('Selected flight:', flight)
  }

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    return date.toLocaleDateString('en-GB', options)
  }

  const sliderSettings = {
    arrows: false,
    slidesToShow: Math.min(3, filteredFlights.length),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(2, filteredFlights.length)
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: Math.min(1, filteredFlights.length)
        }
      }
    ]
  }

  const cardImageStore = [
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
    'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
    'https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
    'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
    'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
    'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80'
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Search Flights</Heading>
          <FlightFilter
            setFilteredFlights = {setFilteredFlights}
            filteredFlights = {filteredFlights}
            flightData = {flightData}
          />
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {filteredFlights.map((flight, index) => (
            <Card key={index}>
              <CardImage imageSrc={cardImageStore[index % (cardImageStore.length)]} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{flight.arrival_city}</Title>
                  <DurationInfo>
                    <ClockIcon />
                    <Duration>{flight.flight_duration}hr</Duration>
                  </DurationInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{flight.arrival_country}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>${flight.ticket_price}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>Depart from {flight.departure_city}, {flight.departure_country} on {formatDate(flight.departure_date)}, {flight.departure_time}.</Description>
              </TextInfo>
              <PrimaryButton onClick={() => handlePrimaryBtn(flight)}>Add to Itenerary</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  )
}
