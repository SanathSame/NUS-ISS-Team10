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
import { HotelApi } from 'api/hotel/HotelApi'

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

// Added SearchContainer, SearchInput, and SearchButton components
const SearchContainer = styled.div`
  ${tw`flex justify-center mt-8`}
`

const SearchInput = tw.input`border rounded p-2 mr-2`

const SearchButton = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg`}
`

export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null)
  const [hotels, setHotels] = useState([])
  const [originalHotels, setOriginalHotels] = useState([])
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

  useEffect(() => {
    fetchHotels()
  }, [])

  const fetchHotels = async () => {
    try {
      const fetchedHotels = await HotelApi.getHotels()
      console.log('data.data: ', fetchedHotels.data.data)
      setHotels(fetchedHotels.data.data)
      setOriginalHotels(fetchedHotels.data.data)
    } catch (error) {
      console.error('Error fetching hotels:', error)
    }
  }

  const handleSearch = () => {
    const searchInput = document.getElementById('searchInput')
    let searchQuery = ''
    if (searchInput) {
      searchQuery = searchInput.value.toLowerCase()
    }
    console.log('Search Query:', searchQuery)
    console.log('Hotels Before Filtering:', hotels)
    if (!searchQuery) {
      // If search query is empty, fetch hotels again
      fetchHotels()
    } else {
      const filteredHotels = originalHotels.filter(hotel => {
        const hotelName = hotel.name.toLowerCase()
        const hotelCity = hotel.city.toLowerCase()
        const hotelCountry = hotel.country.toLowerCase()
        return (
          hotelName.includes(searchQuery) ||
          hotelCity.includes(searchQuery) ||
          hotelCountry.includes(searchQuery)
        )
      })
      console.log('Filtered Hotels:', filteredHotels)
      setHotels(filteredHotels)
    }
  }

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Popular Hotels</Heading>
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
          {hotels.map((hotel, index) => (
            <Card key={index}>
               <CardImage imageSrc={hotel.hotel_image}/>
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{hotel.name}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{hotel.ratings}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{hotel.city}, {hotel.country}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{hotel.price}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{hotel.description}</Description>
              </TextInfo>
              <PrimaryButton>Book Now</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  )
}