"use client";
// import Image from "next/image";
import {
  Container,
  Grid,
  Card,
  Row,
  Col,
  Text,
  Image,
} from "@nextui-org/react";
import NavigationBar from "@/flat/NavigationBar";
import WhatWeDo from "@/flat/WhatWeDo";
import OurServices from "@/flat/OurServices";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container
      css={{
        padding: 0,
        display: "flex",
        flexFlow: "column",
        maxWidth: '1400px'
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
            justifyContent: "center",
            marginTop: "4rem",
            padding: 0,
          }}
        >
          <Container
            fluid
            css={{
              display: "flex",
              flexFlow: "column",
              width: "40%",
              height: "100%",
              margin: 0,
            }}
          >
            <Text
              size="$7xl"
              css={{
                lineHeight: "1",
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
              width: "60%",
              height: "100%",
              margin: 0,
              position: "relative",
            }}
          >
            <img
              alt=""
              src="/agency-image.png"
              style={{
                width: "100%",
                maxHeight: 600,
                position: "absolute",
                objectFit: "contain",
                backgroundColor: "transparent",
                marginTop: -50,
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
