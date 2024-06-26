import React from 'react'
import { useParams } from 'react-router-dom'
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'

import HotelTravelLandingPage from 'demos/TravelLandingPage.js'
import HotelTravelLandingPageImageSrc from 'images/demo/HotelTravelLandingPage.jpeg'

import LogoutPage from 'pages/Logout.js'
import LoginPage from 'pages/Login.js'
import SignupPage from 'pages/Signup.js'
import FlightPage from 'pages/Flight.js'
import AttractionPage from 'pages/AttractionPage'
import HotelPage from 'pages/HotelPage'
import BlogIndexPage from 'pages/BlogIndex.js'
import LandingPage from 'pages/LandingPage.js'
import Itinerary from 'pages/ItineraryPage.js'

import LoginPageImageSrc from 'images/demo/LoginPage.jpeg'
import SignupPageImageSrc from 'images/demo/SignupPage.jpeg'
import BlogIndexPageImageSrc from 'images/demo/BlogIndexPage.jpeg'
import BackgroundAsImageHero from 'components/hero/BackgroundAsImage.js'
import IllustrationAndVideoHero from 'components/hero/TwoColumnWithVideo.js'
import IllustrationAndInputHero from 'components/hero/TwoColumnWithInput.js'
import FullWidthWithImageHero from 'components/hero/FullWidthWithImage.js'
import FullWidthWithImageModified from 'components/hero/FullWidthWithImageModified.js'
import BackgroundAsImageWithCenteredContentHero from 'components/hero/BackgroundAsImageWithCenteredContent.js'
import IllustrationAndPrimaryBackgroundHero from 'components/hero/TwoColumnWithPrimaryBackground.js'
import AboutUsPageImageSrc from 'images/demo/AboutUsPage.jpeg'

import TwoPlansWithDurationSwitcherPricing from 'components/pricing/TwoPlansWithDurationSwitcher.js'
import ThreePlansWithHalfPrimaryBackgroundPricing from 'components/pricing/ThreePlansWithHalfPrimaryBackground.js'
import IteneraryBuilder from 'components/pricing/IteneraryBuilder.js'

import ThreeColWithSideImageFeatures from 'components/features/ThreeColWithSideImage.js'
import TwoColWithButtonFeatures from 'components/features/TwoColWithButton.js'
import ThreeColSimpleFeatures from 'components/features/ThreeColSimple.js'
import ThreeColWithSideImageWithPrimaryBackgroundFeatures from 'components/features/ThreeColWithSideImageWithPrimaryBackground.js'
import TwoColVerticalWithButtonFeatures from 'components/features/TwoColWithTwoFeaturesAndButtons.js'
import TwoColHorizontalWithButtonFeatures from 'components/features/TwoColWithTwoHorizontalFeaturesAndButton.js'
import WithStepsAndImageFeatures from 'components/features/TwoColWithSteps.js'
import ThreeColumnDashedBorderFeatures from 'components/features/DashedBorderSixFeatures'
import ThreeColCenteredStatsWithPrimaryBackgroundFeatures from 'components/features/ThreeColCenteredStatsPrimaryBackground.js'
import WithStatsAndImageFeatures from 'components/features/TwoColSingleFeatureWithStats.js'
import WithStatsAndImage2Features from 'components/features/TwoColSingleFeatureWithStats2.js'
import VerticalWithAlternateImageAndTextFeatures from 'components/features/VerticalWithAlternateImageAndText.js'

import SliderCards from 'components/cards/ThreeColSlider.js'
import SliderCardsModified from 'components/cards/ThreeColSliderModified.js'
import TrendingCards from 'components/cards/TwoTrendingPreviewCardsWithImage.js'
import PortfolioCards from 'components/cards/PortfolioTwoCardsWithImage.js'
import TabGridCards from 'components/cards/TabCardGrid.js'
import TabGridCardsModified from 'components/cards/TabCardGridModified.js'
import ProfileThreeColGridCards from 'components/cards/ProfileThreeColGrid.js'
import ThreeColContactDetailsCards from 'components/cards/ThreeColContactDetails.js'

import SimpleContactUsForm from 'components/forms/SimpleContactUs.js'
import SimpleSubscribeNewsletterForm from 'components/forms/SimpleSubscribeNewsletter.js'
import TwoColContactUsForm from 'components/forms/TwoColContactUsWithIllustration.js'
import TwoColContactUsFullForm from 'components/forms/TwoColContactUsWithIllustrationFullForm.js'

import SimpleFiveColumnFooter from 'components/footers/SimpleFiveColumn.js'
import FiveColumnWithInputFormFooter from 'components/footers/FiveColumnWithInputForm.js'
import FiveColumnWithBackgroundFooter from 'components/footers/FiveColumnWithBackground.js'
import FiveColumnDarkFooter from 'components/footers/FiveColumnDark.js'
import MiniCenteredFooter from 'components/footers/MiniCenteredFooter.js'
import ItineraryDetailPage from 'pages/ItineraryDetailPage'

export const components = {
  landingPages: {
    HotelTravelLandingPage: {
      component: HotelTravelLandingPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: '/components/landingPages/HotelTravelLandingPage'
    }
  },

  innerPages: {
    LoginPage: {
      component: LoginPage,
      imageSrc: LoginPageImageSrc,
      scrollAnimationDisabled: true,
      url: '/components/innerPages/LoginPage'
    },
    BlogIndexPage: {
      component: BlogIndexPage,
      url: '/components/innerPages/BlogIndexPage',
      imageSrc: BlogIndexPageImageSrc,
      scrollAnimationDisabled: true
    },
    SignupPage: {
      component: SignupPage,
      url: '/components/innerPages/SignupPage',
      imageSrc: SignupPageImageSrc,
      scrollAnimationDisabled: true
    },
    FlightPage: {
      component: FlightPage,
      url: '/components/innerPages/FlightPage'
    },
    AttractionPage: {
      component: AttractionPage,
      url: '/components/innerPages/AttractionPage'
    },
    HotelPage: {
      component: HotelPage,
      url: '/components/innerPages/HotelPage'
    },
    LandingPage: {
      component: LandingPage,
      url: '/components/innerPages/LandingPage',
      imageSrc: AboutUsPageImageSrc
    },
    ItineraryPage: {
      component: Itinerary,
      url: '/components/innerPages/ItineraryPage'
    },
    ItineraryDetailPage: {
      component: ItineraryDetailPage,
      url: '/components/innerPages/ItineraryDetailPage'
    },
    LogoutPage: {
      component: LogoutPage,
      url: '/components/innerPages/Logout'
    }

  },

  blocks: {
    Hero: {
      type: 'Hero Section',
      elements: {
        BackgroundAsImage: {
          name: 'With Background Image',
          component: BackgroundAsImageHero,
          url: '/components/blocks/Hero/BackgroundAsImage'
        },
        IllustrationAndInput: {
          name: 'With Image Illustration and Input',
          component: IllustrationAndInputHero,
          url: '/components/blocks/Hero/IllustrationAndInput'
        },
        IllustrationAndVideo: {
          name: 'With Image Illustration and Video',
          component: IllustrationAndVideoHero,
          url: '/components/blocks/Hero/IllustrationAndVideo'
        },
        FullWidthWithImage: {
          name: 'Full Width With Image',
          component: FullWidthWithImageHero,
          url: '/components/blocks/Hero/FullWidthWithImage'
        },
        FullWidthWithImageModified: {
          name: 'Full Width With Image Modified',
          component: FullWidthWithImageModified,
          url: '/components/blocks/Hero/FullWidthWithImageModified'
        },
        BackgroundAsImageWithCenteredContent: {
          name: 'Full Width Background Image with centered content',
          component: BackgroundAsImageWithCenteredContentHero,
          url: '/components/blocks/Hero/BackgroundAsImageWithCenteredContent'
        },
        IllustrationAndPrimaryBackground: {
          name: 'Primary Background With Illustration',
          component: IllustrationAndPrimaryBackgroundHero,
          url: '/components/blocks/Hero/IllustrationAndPrimaryBackground'
        }
      }
    },
    Pricing: {
      type: 'Pricing Section',
      elements: {
        TwoPlansWithDurationSwitcher: {
          name: 'Two Plans With Duration Switcher',
          component: TwoPlansWithDurationSwitcherPricing,
          url: '/components/blocks/Pricing/TwoPlansWithDurationSwitcher'
        },
        ThreePlansWithHalfPrimaryBackground: {
          name: 'Three Plans With Primary Background at Top',
          component: ThreePlansWithHalfPrimaryBackgroundPricing,
          url: '/components/blocks/Pricing/ThreePlansWithHalfPrimaryBackground'
        },
        IteneraryBuilder: {
          name: 'Simple Three Plans',
          component: IteneraryBuilder,
          url: '/components/blocks/Pricing/IteneraryBuilder'
        }
      }
    },
    Features: {
      type: 'Features Section',
      elements: {
        ThreeColWithSideImage: {
          name: 'Three Column With Side Image',
          component: ThreeColWithSideImageFeatures,
          url: '/components/blocks/Features/ThreeColWithSideImage'
        },
        TwoColWithButton: {
          name: 'Two Column With Image and Action Button',
          component: TwoColWithButtonFeatures,
          url: '/components/blocks/Features/TwoColWithButton'
        },
        ThreeColSimple: {
          name: 'Three Column Simple',
          component: ThreeColSimpleFeatures,
          url: '/components/blocks/Features/ThreeColSimple'
        },
        ThreeColWithSideImageWithPrimaryBackground: {
          name: 'Three Column With Side Image With Primary Background',
          component: ThreeColWithSideImageWithPrimaryBackgroundFeatures,
          url: '/components/blocks/Features/ThreeColWithSideImageWithPrimaryBackground'
        },
        TwoColHorizontalWithButton: {
          name: 'Two Column With Button and Horizonatal Features with Icon',
          component: TwoColHorizontalWithButtonFeatures,
          url: '/components/blocks/Features/TwoColHorizontalWithButton'
        },
        TwoColVerticalWithButton: {
          name: 'Two Column With Vertical Features and Button',
          component: TwoColVerticalWithButtonFeatures,
          url: '/components/blocks/Features/TwoColVerticalWithButton'
        },
        WithStepsAndImage: {
          name: 'Steps with Image',
          component: WithStepsAndImageFeatures,
          url: '/components/blocks/Features/WithStepsAndImage'
        },
        ThreeColumnDashedBorder: {
          name: 'Three Column With Dashed Primary Border',
          component: ThreeColumnDashedBorderFeatures,
          url: '/components/blocks/Features/ThreeColumnDashedBorder'
        },
        ThreeColCenteredStatsPrimaryBackground: {
          name: 'Three Column With Centered Stats on Primary Background',
          component: ThreeColCenteredStatsWithPrimaryBackgroundFeatures,
          url: '/components/blocks/Features/ThreeColCenteredStatsPrimaryBackground'
        },
        WithStatsAndImage: {
          name: 'Stats With Image',
          component: WithStatsAndImageFeatures,
          url: '/components/blocks/Features/WithStatsAndImage'
        },
        WithStatsAndImage2: {
          name: 'Stats With Image 2',
          component: WithStatsAndImage2Features,
          url: '/components/blocks/Features/WithStatsAndImage2'
        },
        VerticalWithAlternateImageAndText: {
          name: 'Vertical Feature Cards With Alternate Image and Text',
          component: VerticalWithAlternateImageAndTextFeatures,
          url: '/components/blocks/Features/VerticalWithAlternateImageAndText'
        }
      }
    },

    Cards: {
      type: 'Cards',
      elements: {
        Slider: {
          name: 'Three Column Slider',
          component: SliderCards,
          url: '/components/blocks/Cards/Slider'
        },
        SliderModified: {
          name: 'Three Column Slider Modified',
          component: SliderCardsModified,
          url: '/components/blocks/Cards/SliderModified'
        },
        Portfolio: {
          name: 'Two Column Portfolio Cards With Images ',
          component: PortfolioCards,
          url: '/components/blocks/Cards/Portfolio'
        },
        TabGrid: {
          name: 'Tab Card Grid With Tab Switcher',
          component: TabGridCards,
          url: '/components/blocks/Cards/TabGrid'
        },
        TabGridModified: {
          name: 'Tab Card Grid With Tab Switcher Modified',
          component: TabGridCardsModified,
          url: '/components/blocks/Cards/TabGridModified'
        },
        ProfileThreeColGrid: {
          name: 'Three Column Grid Cards For Profile',
          component: ProfileThreeColGridCards,
          url: '/components/blocks/Cards/ProfileThreeColGrid'
        },
        ThreeColContactDetails: {
          name: 'Three Column Contact Details Cards',
          component: ThreeColContactDetailsCards,
          url: '/components/blocks/Cards/ThreeColContactDetails'
        },
        Trending: {
          name: 'Two Trending Preview Cards With Images',
          component: TrendingCards,
          url: '/components/blocks/Cards/Trending'
        }
      }
    },
    Form: {
      type: 'Forms Section',
      elements: {
        SimpleContactUs: {
          name: 'Simple Contact Us',
          component: SimpleContactUsForm,
          url: '/components/blocks/Form/SimpleContactUs'
        },
        SimpleSubscribeNewsletter: {
          name: 'Simple Subscribe newsletter',
          component: SimpleSubscribeNewsletterForm,
          url: '/components/blocks/Form/SimpleSubscribeNewsletter'
        },
        TwoColContactUs: {
          name: 'Two Column Contact Us',
          component: TwoColContactUsForm,
          url: '/components/blocks/Form/TwoColContactUs'
        },
        TwoColContactUsFull: {
          name: 'Two Column Contact Us - Full Form',
          component: TwoColContactUsFullForm,
          url: '/components/blocks/Form/TwoColContactUsFull'
        }
      }
    },

    Footer: {
      type: 'Footers Section',
      elements: {
        SimpleFiveColumn: {
          name: 'Simple Five Column',
          component: SimpleFiveColumnFooter,
          url: '/components/blocks/Footer/SimpleFiveColumn'
        },
        FiveColumnWithInputForm: {
          name: 'Five Column With Input Form',
          component: FiveColumnWithInputFormFooter,
          url: '/components/blocks/Footer/FiveColumnWithInputForm'
        },
        FiveColumnWithBackground: {
          name: 'Five Column With background',
          component: FiveColumnWithBackgroundFooter,
          url: '/components/blocks/Footer/FiveColumnWithBackground'
        },
        FiveColumnDark: {
          name: 'Five Column Dark',
          component: FiveColumnDarkFooter,
          url: '/components/blocks/Footer/FiveColumnDark'
        },
        MiniCentered: {
          name: 'Mini Centered Dark',
          component: MiniCenteredFooter,
          url: '/components/blocks/Footer/MiniCentered'
        }
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null
    if (type === 'blocks' && subtype) {
      Component = components[type][subtype].elements[name].component
      return <AnimationRevealPage disabled>
        <Component />
      </AnimationRevealPage>
    } else { Component = components[type][name].component }

    if (Component) { return <Component /> }

    throw new Error('Component Not Found')
  } catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
