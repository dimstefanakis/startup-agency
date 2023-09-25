import { Container, Text, Image } from "@nextui-org/react";
import FeatureSection from "../FeatureSection";
import useMediaQuery from "@/hooks/useMediaQuery";

function WhatWeDo() {
  const isTablet = useMediaQuery("(max-width: 960px)");

  const text = (
    <>
      Welcome to Senec, where we build the future one startup at a time. As a
      premium development studio, we specialize in turning funded ideas into
      thriving businesses.
      <br />
      <br />
      Our unique blend of extensive startup experience and innovative tools sets
      us apart, empowering us to deliver superior results for our clients. Lets
      make your startup more profitable together.
    </>
  );

  const ImageComponent = (
    <>
      <Image
        src="/vector.svg"
        alt="vector"
        css={{
          height: "300px !important",
          width: "100%",
          filter: "brightness(0) invert(1)",
          marginTop: 30,
          "@sm": {
            height: "500px !important",
            width: "100%",
            margin: 0,
          },
        }}
      />
    </>
  );

  return (
    <FeatureSection
      text={text}
      title="What We Do"
      ImageComponent={ImageComponent}
      textSide="right"
    ></FeatureSection>
  );
}

export default WhatWeDo;
