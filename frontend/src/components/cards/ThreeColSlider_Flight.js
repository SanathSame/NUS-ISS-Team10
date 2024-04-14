import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import tw from 'twin.macro'
import styled from 'styled-components'
import { SectionHeading } from 'components/misc/Headings'
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons'
import { ReactComponent as PriceIcon } from 'feather-icons/dist/icons/dollar-sign.svg'
import { ReactComponent as LocationIcon } from 'feather-icons/dist/icons/map-pin.svg'
import { ReactComponent as StarIcon } from 'feather-icons/dist/icons/star.svg'
import { ReactComponent as ChevronLeftIcon } from 'feather-icons/dist/icons/chevron-left.svg'
import { ReactComponent as ChevronRightIcon } from 'feather-icons/dist/icons/chevron-right.svg'
import { FlightApi } from 'api/flight/FlightApi'

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

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`
const Rating = tw.span`ml-2 font-bold`

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

const SearchContainer = styled.div`
  ${tw`flex justify-center mt-8`}
`

const SearchInput = tw.input`border rounded p-2 mr-2`

const SearchButton = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg`}
`

export default () => {
  const [sliderRef, setSliderRef] = useState(null)
  const [flightData, setFlightData] = useState([])
  useEffect(() => {
    fetchFlightData()
  }, [])

  const fetchFlightData = async () => {
    try {
      const response = await FlightApi.getFlights()
      console.log(response.data)
      setFlightData(response.data.data)
    } catch (error) {
      console.error('Error fetching flight data:', error)
    }
  }

  const handleSearch = () => {
    const searchInput = document.getElementById('searchInput')
    let searchQuery = ''
    if (searchInput) {
      searchQuery = searchInput.value.toLowerCase()
    }
    console.log('Search Query:', searchQuery)
  }

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Search Flights</Heading>
          <SearchContainer>
            <SearchInput id='searchInput' type="text" placeholder="Search..." />
            <SearchButton onClick={handleSearch}>Search</SearchButton>
          </SearchContainer>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {flightData.map((flight, index) => (
            <Card key={index}>
              <CardImage imageSrc={'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80'} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{flight.arrival_city}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{flight.flight_duration}</Rating>
                  </RatingsInfo>
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
                    <Text>{flight.ticket_price}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{flight.departure_country}</Description>
              </TextInfo>
              <PrimaryButton>Add to Itenerary</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  )
}