import { Container, Text, Image } from "@nextui-org/react";

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
  return (
    <Container
      fluid
      css={{
        display: "flex",
        flexFlow: "column",
        width: "100%",
        height: "100%",
        margin: 0,
      }}
    >
      <Text
        size="$5xl"
        css={{
          lineHeight: "1",
          alignSelf: "flex-end",
        }}
        h1
      >
        Payments
      </Text>
      <Container css={{ padding: 0, display: "flex" }}>
        <Container
          css={{
            width: "70%",
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text
            size="$xl"
            h2
            css={{
              marginTop: "2rem",
              color: "$gray800",
              maxWidth: "70%",
            }}
          >
            Efficient and reliable transactions are at the heart of every
            startup. At Senec, we integrate top-tier platforms like Stripe to
            enable global payments and ensure seamless transactions.
            <br />
            <br />
            We also help establish subscription models, fostering a steady
            revenue stream for your business. Our robust, secure, and
            user-friendly payment systems allow you to focus on growth while we
            manage the details.
          </Text>
          <Container css={{ padding: 0, display: "flex", maxWidth: "70%" }}>
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
          </Container>
        </Container>
        <Image
          src="/card.png"
          alt="card"
          width={"30%"}
          height={500}
          css={{
            margin: 0,
          }}
        />
      </Container>
    </Container>
  );
}

function Development() {
  return (
    <Container
      fluid
      css={{
        display: "flex",
        flexFlow: "column",
        width: "100%",
        height: "100%",
        margin: 0,
      }}
    >
      <Text
        size="$5xl"
        css={{
          lineHeight: "1",
        }}
        h1
      >
        Development
      </Text>
      <Container css={{ padding: 0, display: "flex" }}>
        <Image
          src="/development.svg"
          alt="card"
          width={"30%"}
          height={500}
          css={{
            filter: "brightness(0) invert(1)",
            margin: 0,
          }}
        />

        <Container
          css={{
            width: "70%",
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text
            size="$xl"
            h2
            css={{
              marginTop: "2rem",
              color: "$gray800",
              maxWidth: "70%",
            }}
          >
            Building robust, scalable solutions is our forte at Senec.
            Specializing in Software as a Service (SaaS) and hybrid
            applications, our development services cater to startups looking for
            efficiency, flexibility, and reach.
            <br />
            <br />
            We craft tailor-made solutions that support your unique business
            needs and growth trajectory. Our experienced developers utilize
            cutting-edge technologies and methodologies to deliver high-quality
            products that stand the test of time and scale.
          </Text>
          <Container css={{ padding: 0, display: "flex", maxWidth: "70%" }}>
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
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

function Design() {
  return (
    <Container
      fluid
      css={{
        display: "flex",
        flexFlow: "column",
        width: "100%",
        height: "100%",
        margin: 0,
      }}
    >
      <Text
        size="$5xl"
        css={{
          lineHeight: "1",
          alignSelf: "flex-end",
        }}
        h1
      >
        Design
      </Text>
      <Container css={{ padding: 0, display: "flex" }}>
        <Container
          css={{
            width: "70%",
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text
            size="$xl"
            h2
            css={{
              marginTop: "2rem",
              color: "$gray800",
              maxWidth: "70%",
            }}
          >
            Great design is at the core of user experience and brand perception.
            At Senec, we offer flexible design services to meet your startup
            &nbsp;s needs.
            <br />
            <br />
            Whether it&nbsp;s collaborating with your existing design team to
            bring their vision to life, or creating an entirely new design from
            scratch, we&nbsp;re equipped for the task. Our design experts focus
            on creating intuitive, engaging, and visually stunning interfaces
            that resonate with your target audience and align with your brand
            identity.
          </Text>
          <Container css={{ padding: 0, display: "flex", maxWidth: "70%" }}>
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
          </Container>
        </Container>
        <Image
          src="/design.svg"
          alt="design"
          width={"30%"}
          height={500}
          css={{
            margin: 0,
            filter: "brightness(0) invert(1)",
          }}
        />
      </Container>
    </Container>
  );
}

export default OurServices;
