import React, { useState, useEffect } from 'react'
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro'
import { SectionHeading } from 'components/misc/Headings'
import { PrimaryButton } from 'components/misc/Buttons'
import { ItineraryApi } from 'api/itinerary/ItineraryApi'
import { useNavigate } from 'react-router-dom'

const HeadingRow = tw.div`flex`
const Heading = tw(SectionHeading)`text-gray-900`
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`
const Image = styled.div`
  ${props => css`background-image: url("https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`
const Description = tw.div``

const ButtonContainer = tw.div`flex justify-center`
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`

export default ({
  headingText = 'Itinerary Builder'
}) => {
  const [itineraries, setItineraries] = useState([])
  const [visible, setVisible] = useState(7)

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        // const username = localStorage.getItem('username')
        const itinerariesData = await ItineraryApi.getItinerariesByFilter({ username: 'sanath' })
        // Fetch additional details for each itinerary
        const itinerariesWithDetails = await Promise.all(itinerariesData.map(async (itinerary) => {
          const { flightId, hotelId, attractionId } = itinerary
          const [flight, hotel, attraction] = await Promise.all([
            ItineraryApi.getFlightById(flightId),
            ItineraryApi.getHotelById(hotelId),
            ItineraryApi.getAttractionById(attractionId)
          ])
          return {
            ...itinerary,
            flightCountry: flight.arrival_country, // Assuming the flight object has an arrival_country property
            hotelName: hotel.name,
            flightDate: flight.departure_date,
            attractionName: attraction.name
          }
        }))
        setItineraries(itinerariesWithDetails)
      } catch (error) {
        console.error('Error fetching itineraries:', error)
      }
    }

    fetchItineraries()
  }, [])
  const handleClick = () => {
    const navigate = useNavigate()
    navigate('/components/innerPages/ItineraryDetailPage')
  }
  const onLoadMoreClick = () => {
    setVisible(v => v + 6)
  }
  let content = null
  if (itineraries.length === 0) {
    content = <NoItinerariesFound />
  } else {
    content = (
    <>
      <Posts>
        {itineraries.slice(0, visible).map((itinerary, index) => (
          <PostContainer key={index}>
            <Post className="group" as="a" onClick={handleClick}>
              <Image/>
              <Info>
                <Category>{itinerary.flightCountry}</Category>
                <CreationDate>{itinerary.flightDate}</CreationDate>
                <Title>Visit {itinerary.flightCountry}</Title>
              </Info>
            </Post>
          </PostContainer>
        ))}
      </Posts>
      {visible < itineraries.length && (
        <ButtonContainer>
          <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
        </ButtonContainer>
      )}
    </>
    )
  }

  return (
  <Container>
    <ContentWithPaddingXl>
      <HeadingRow>
        <Heading>{headingText}</Heading>
      </HeadingRow>
      {content}
    </ContentWithPaddingXl>
  </Container>
  )
}

const NoItinerariesFound = () => (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <p>No itineraries found currently. Happy exploring!</p>
  </div>
)

// const getPlaceholderPost = () => ({
//   imageSrc:
//     'https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80',
//   category: 'Bali',
//   date: 'April 9, 2024',
//   title: 'Visit Bali #1',
//   url: '/components/blocks/Pricing/ThreePlans'
// })
// import React, { useState, useEffect } from 'react'
// import { Container, ContentWithPaddingXl } from 'components/misc/Layouts'
// import tw from 'twin.macro'
// import styled from 'styled-components'
// import { css } from 'styled-components/macro'
// import { SectionHeading } from 'components/misc/Headings'
// // import { PrimaryButton } from 'components/misc/Buttons'
// import { ItineraryApi } from 'api/itinerary/ItineraryApi' // Import your itinerary API functions

// const HeadingRow = tw.div`flex`
// const Heading = tw(SectionHeading)`text-gray-900`
// const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`
// const PostContainer = styled.div`
//   ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
//   ${props =>
//     props.featured &&
//     css`
//       ${tw`w-full!`}
//       ${Post} {
//         ${tw`sm:flex-row! h-full sm:pr-4`}
//       }
//       ${Image} {
//         ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
//       }
//       ${Info} {
//         ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
//       }
//       ${Description} {
//         ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
//       }
//     `}
// `
// const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`
// const Image = styled.div`
//   ${props => css`background-image: url("${props.imageSrc}");`}
//   ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
// `
// const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`
// const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`
// const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`
// const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`
// const Description = tw.div``

// // const ButtonContainer = tw.div`flex justify-center`
// // const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`

// export default ({ headingText = 'Itinerary Builder' }) => {
//   const [itineraryData, setItineraryData] = useState([])

//   useEffect(() => {
//     // Fetch itinerary data for the current user
//     const fetchItineraryData = async () => {
//       try {
//         const response = await ItineraryApi.getItineraries()
//         const itineraryDataWithDetails = await Promise.all(
//           response.data.map(async itinerary => {
//             const flightResponse = await ItineraryApi.getFlightById(itinerary.flight_id)
//             const date = new Date(flightResponse.data.departure_date)
//             date.setDate(date.getDate() + 1) // Add 1 day to the departure date
//             const category = flightResponse.data.arrival_country
//             const title = `Visit ${category}`
//             return {
//               ...itinerary,
//               category,
//               date: date.toDateString(),
//               title
//             }
//           })
//         )
//         setItineraryData(itineraryDataWithDetails)
//         print(itineraryDataWithDetails)
//       } catch (error) {
//         console.error('Error fetching itinerary data:', error)
//       }
//     }
//     fetchItineraryData()
//   }, [])

//   return (
//     <Container>
//       <ContentWithPaddingXl>
//         <HeadingRow>
//           <Heading>{headingText}</Heading>
//         </HeadingRow>
//         <Posts>
//           {itineraryData.map((itinerary, index) => (
//             <PostContainer key={index} featured={itinerary.featured}>
//               <Post className="group" as="a" href={itinerary.url}>
//                 <Image imageSrc={itinerary.imageSrc} />
//                 <Info>
//                   <Category>{itinerary.category}</Category>
//                   <CreationDate>{itinerary.date}</CreationDate>
//                   <Title>{itinerary.title}</Title>
//                   {itinerary.featured}
//                 </Info>
//               </Post>
//             </PostContainer>
//           ))}
//         </Posts>
//       </ContentWithPaddingXl>
//     </Container>
//   )
// }
