"use client";
// import Image from "next/image";
import { Container, Text, Image } from "@nextui-org/react";
import NavigationBar from "@/flat/NavigationBar";
import WhatWeDo from "@/flat/WhatWeDo";
import OurServices from "@/flat/OurServices";
import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "./page.module.css";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 960px)");

  return (
    <Container
      css={{
        padding: 0,
        display: "flex",
        flexFlow: "column",
        maxWidth: "1400px",
      }}
    >
      <Container
        css={{
          display: "flex",
          flexFlow: "column",
          minHeight: "100vh",
          padding: 0,
        }}
      >
        <NavigationBar />
        <Container
          fluid
          css={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            marginTop: "4rem",
            padding: 0,
            "@sm": {
              flexFlow: "row",
            },
          }}
        >
          <Container
            fluid
            css={{
              display: "flex",
              flexFlow: "column",
              width: "100%",
              height: "100%",
              margin: 0,
              "@sm": {
                width: "40%",
              },
            }}
          >
            <Text
              size="$5xl"
              css={{
                lineHeight: "1",
                '@sm': {
                  size: '$7xl'
                }
              }}
              h1
            >
              Premium Startup Development Agency
            </Text>
            <Text
              size="$lg"
              h2
              css={{
                marginTop: "2rem",
                color: "$gray800",
              }}
            >
              Transforming Ideas into Successful Ventures
            </Text>
          </Container>
          <Container
            fluid
            css={{
              display: "flex",
              flexFlow: "column",
              width: "100%",
              height: "100%",
              margin: 0,
              position: "relative",
              "@sm": {
                width: "60%",
              },
            }}
          >
            <img
              alt=""
              src="/agency-image.png"
              style={{
                width: "100%",
                maxHeight: 600,
                position: isTablet ? "relative" : "absolute",
                objectFit: "contain",
                backgroundColor: "transparent",
                marginTop: isTablet ? 0 : -50,
                // bottom: "0",
              }}
            />
          </Container>
        </Container>
      </Container>
      <WhatWeDo />
      <Container
        css={{
          display: "flex",
          justifyContent: "center",
          my: "4rem",
        }}
      >
        <Text h2 size="$6xl">
          Our Services
        </Text>
      </Container>
      <OurServices />
    </Container>
  );
}
