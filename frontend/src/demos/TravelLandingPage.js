import React from 'react'
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import Hero from 'components/hero/FullWidthWithImage.js'
import MainFeature from 'components/features/TwoColWithButton.js'
// import SliderCard from 'components/cards/ThreeColSlider.js'
// import TrendingCard from 'components/cards/TwoTrendingPreviewCardsWithImage.js'
// import Blog from 'components/blogs/PopularAndRecentBlogPosts.js'
import Footer from 'components/footers/MiniCenteredFooter.js'
// import MainFeature1 from 'components/features/TwoColWithButton.js'
import tw from 'twin.macro'

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`
const Description = tw.span`inline-block mt-8 italic`
const imageCss = tw`rounded-4xl`

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature
        heading={
          <>
            Itenerary
            <wbr /> <HighlightedText>Builder</HighlightedText>
          </>
        }
        description={
          <Description>
            Explore our comprehensive itinerary builder tool to plan your next adventure seamlessly. Craft personalized travel plans tailored to your preferences with ease.
            <br />
            <br />
            Start planning today and turn your dreams into unforgettable memories.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText='Plan itenerary'
        primaryButtonUrl='/components/innerPages/BlogIndexPage'
        imageSrc={
          'https://images.unsplash.com/photo-1522199710521-72d69614c702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbCUyMGl0ZW5lcmFyeXxlbnwwfHwwfHx8MA%3D%3D'
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature
        heading={
          <>
            Book
            <wbr /> <HighlightedText>flights</HighlightedText>
          </>
        }
        description={
          <Description>
            Simplify your travel experience by booking flights hassle-free. Discover a vast array of destinations and airlines at your fingertips. From budget-friendly options to premium services, find the perfect flight to suit your needs.
            <br />
            <br />
            Fly with confidence and embark on your next adventure stress-free.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={true}
        primaryButtonText='Book flights'
        primaryButtonUrl='/components/innerPages/FlightPage'
        imageSrc={
          'https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature
        heading={
          <>
            Find
            <wbr /> <HighlightedText>hotels</HighlightedText>
          </>
        }
        description={
          <Description>
            Unlock a world of accommodation possibilities with our hotel search feature. Browse through a curated selection of hotels worldwide, ranging from cozy retreats to luxurious resorts. Whether you're seeking a city escape or a beachfront paradise, we have the perfect stay for every occasion.
            <br />
            <br />
            Book with confidence and indulge in unparalleled comfort during your travels.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText='Book hotels'
        primaryButtonUrl='/components/innerPages/HotelPage'
        imageSrc={
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature
        heading={
          <>
            View
            <wbr /> <HighlightedText>attractions</HighlightedText>
          </>
        }
        description={
          <Description>
            Immerse yourself in the wonders of the world with our curated collection of attractions. Explore iconic landmarks, hidden gems, and cultural treasures waiting to be discovered.
            <br />
            <br />
            From breathtaking natural wonders to captivating historical sites, there's something for every traveler to enjoy.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={true}
        primaryButtonText='Book attractions'
        primaryButtonUrl='/components/innerPages/AttractionPage'
        imageSrc={
          'https://images.unsplash.com/photo-1689982922260-46cce9b95627?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
    <Footer />
  </AnimationRevealPage>
)
