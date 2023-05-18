// import Image from "next/image";
import { Container, Text, Image } from "@nextui-org/react";
import vector from "../../../public/vector.svg";

function WhatWeDo() {
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
        What We Do
      </Text>
      <Container css={{ padding: 0, display: "flex" }}>
        <Image
          src="/vector.svg"
          alt="vector"
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
            Welcome to Senec, where we build the future one startup
            at a time. As a premium development agency, we specialize in turning
            funded ideas into thriving businesses. 
            <br/><br/>
            Our unique blend of extensive
            startup experience and innovative tools sets us apart, empowering us
            to deliver superior results for our clients. Lets make your startup
            more profitable together.
          </Text>
        </Container>
      </Container>
    </Container>
  );
}

export default WhatWeDo;
