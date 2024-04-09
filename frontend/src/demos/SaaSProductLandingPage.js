import React from 'react'
import tw from 'twin.macro'
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import Hero from 'components/hero/TwoColumnWithInput.js'
import Features from 'components/features/ThreeColWithSideImage.js'
import MainFeature from 'components/features/TwoColWithButton.js'
import MainFeature2 from 'components/features/TwoColWithTwoHorizontalFeaturesAndButton.js'
import FeatureWithSteps from 'components/features/TwoColWithSteps.js'
import Pricing from 'components/pricing/ThreePlans.js'
import Footer from 'components/footers/FiveColumnWithBackground.js'
import heroScreenshotImageSrc from 'images/hero-screenshot-1.png'
import macHeroScreenshotImageSrc from 'images/hero-screenshot-2.png'
import prototypeIllustrationImageSrc from 'images/prototype-illustration.svg'
import { ReactComponent as BriefcaseIcon } from 'feather-icons/dist/icons/briefcase.svg'
import { ReactComponent as MoneyIcon } from 'feather-icons/dist/icons/dollar-sign.svg'

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`
  const HighlightedText = tw.span`text-primary-500`

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: 'Affordable',
            description: 'We promise to offer you the best rate we can - at par with the industry standard.',
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: 'Professionalism',
            description: 'We assure you that our templates are designed and created by professional designers.',
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
      <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: 'Personal',
            price: '$17.99',
            duration: 'Monthly',
            mainFeature: 'For Individuals',
            features: ['30 Templates', '7 Landing Pages', '12 Internal Pages', 'Basic Assistance']
          },
          {
            name: 'Business',
            price: '$37.99',
            duration: 'Monthly',
            mainFeature: 'For Small Businesses',
            features: ['60 Templates', '15 Landing Pages', '22 Internal Pages', 'Priority Assistance'],
            featured: true
          },
          {
            name: 'Enterprise',
            price: '$57.99',
            duration: 'Monthly',
            mainFeature: 'For Large Companies',
            features: ['90 Templates', '27 Landing Pages', '37 Internal Pages', 'Personal Assistance']
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  )
}
