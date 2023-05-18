import { Container, Text, Image } from "@nextui-org/react";

function OurServices() {
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

export default OurServices;
