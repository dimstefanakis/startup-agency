import { Container, Text, Image } from "@nextui-org/react";
import FeatureSection from "../FeatureSection";
import useMediaQuery from "@/hooks/useMediaQuery";

function OurServices() {
  return (
    <>
      <Design />
      <Development />
      <Payments />
    </>
  );
}

function Payments() {
  const isTablet = useMediaQuery("(max-width: 960px)");
  const text = (
    <>
      Efficient and reliable transactions are at the heart of every startup. At
      Senec, we integrate top-tier platforms like Stripe to enable global
      payments and ensure seamless transactions.
      <br />
      <br />
      We also help establish subscription models, fostering a steady revenue
      stream for your business. Our robust, secure, and user-friendly payment
      systems allow you to focus on growth while we manage the details.
    </>
  );

  const ImageComponent = (
    <>
      <Image
        src="/card.png"
        alt="card"
        css={{
          height: '300px !important',
          width: "100%",
          margin: 0,
          "@sm": {
            height: '500px !important',
            width: "100%",
          },
        }}
      />
    </>
  );

  const icons = (
    <>
      <img
        src="/logos/stripe.png"
        alt="card"
        style={{
          width: 50,
          height: 50,
          margin: 0,
          marginRight: 10,
        }}
      />
      <img
        src="/logos/paypal.png"
        alt="card"
        style={{
          width: 50,
          height: 50,
          margin: 0,
          marginRight: 10,
        }}
      />
      <img
        src="/logos/shopify.png"
        alt="card"
        style={{
          width: 50,
          height: 50,
          margin: 0,
          marginRight: 10,
        }}
      />
    </>
  );

  return (
    <>
      <FeatureSection
        title="Payments"
        text={text}
        ImageComponent={ImageComponent}
        icons={icons}
        textSide="left"
      />
    </>
  );
}

function Development() {
  const isTablet = useMediaQuery("(max-width: 960px)");

  const text = (
    <>
      Building robust, scalable solutions is our forte at Senec. Specializing in
      multi-vendor B2B / B2C marketplaces, our development
      services cater to startups looking for efficiency, flexibility, and reach.
      <br />
      <br />
      We build tailor-made solutions that support your unique business needs and
      growth trajectory. Our experienced developers utilize cutting-edge
      technologies and methodologies to deliver high-quality products that stand
      the test of time and scale.
      <br />
      <br />
      We know the ins and outs of building a marketplace including customer payments,
      vendor onboarding, vendor payouts and invoicing.
    </>
  );

  const ImageComponent = (
    <>
      <Image
        src="/development.svg"
        alt="card"
        css={{
          height: 300,
          width: "100%",
          filter: "brightness(0) invert(1)",
          margin: 0,
          "@sm": {
            height: 500,
            width: "100%",
          },
        }}
      />
    </>
  );

  const icons = (
    <>
      <img
        src="/logos/python.png"
        alt="python"
        style={{
          width: 50,
          height: 50,
          margin: 0,
          marginRight: 10,
        }}
      />
      <img
        src="/logos/react.png"
        alt="react"
        style={{
          width: 50,
          height: 50,
          margin: 0,
          marginRight: 10,
        }}
      />
      <img
        src="/logos/docker.png"
        alt="docker"
        style={{
          width: 50,
          height: 50,
          margin: 0,
          marginRight: 10,
        }}
      />
      <img
        src="/logos/supabase.png"
        alt="supabase"
        style={{
          width: 50,
          height: 50,
          margin: 0,
          marginRight: 10,
        }}
      />
      <img
        src="/logos/amazon.png"
        alt="amazon"
        style={{
          width: 50,
          height: 50,
          margin: 0,
          marginRight: 10,
        }}
      />
      <img
        src="/logos/mailchimp.png"
        alt="mailchimp"
        style={{
          width: 50,
          height: 50,
          margin: 0,
          marginRight: 10,
        }}
      />
    </>
  );

  return (
    <FeatureSection
      title="Development"
      text={text}
      ImageComponent={ImageComponent}
      icons={icons}
      textSide="right"
    />
  );
}

function Design() {
  const isTablet = useMediaQuery("(max-width: 960px)");

  const text = (
    <>
      Great design is at the core of user experience and brand perception. At
      Senec, we offer flexible design services to meet your startup &apos;s
      needs.
      <br />
      <br />
      Whether it&apos;s collaborating with your existing design team to bring
      their vision to life, or creating an entirely new design from scratch,
      we&apos;re equipped for the task. Our design experts focus on creating
      intuitive, engaging, and visually stunning interfaces that resonate with
      your target audience and align with your brand identity.
    </>
  );

  const ImageComponent = (
    <>
      <Image
        src="/design.svg"
        alt="design"
        // height={isTablet ? 200 : 500}
        // width={isTablet ? "80%" : "30%"}
        css={{
          height: 300,
          width: "100%",
          filter: "brightness(0) invert(1)",
          "@sm": {
            height: 500,
            width: "100%",
          },
        }}
      />
    </>
  );

  const icons = (
    <>
      <img
        src="/logos/figma.png"
        alt="figma"
        style={{
          height: 50,
          width: 50,
          margin: 0,
          marginRight: 10,
        }}
      />
    </>
  );

  return (
    <FeatureSection
      title="Design"
      text={text}
      ImageComponent={ImageComponent}
      icons={icons}
      textSide="left"
    />
  );
}

export default OurServices;
