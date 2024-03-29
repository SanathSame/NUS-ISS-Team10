import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";


import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <FeatureStats />
      <Features
        heading={<>Amazing <HighlightedText>Features</HighlightedText></>}
      />
      <MainFeature
        heading={<>Cloud built by and for <HighlightedText>Professionals</HighlightedText></>}
      />
      <Pricing
        heading={<>Flexible <HighlightedText>Plans</HighlightedText></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
