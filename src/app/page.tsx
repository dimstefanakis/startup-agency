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
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container
      css={{ display: "flex", flexFlow: "column", minHeight: "100vh" }}
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
              height: 500,
              position: "absolute",
              right: "0",
              objectFit: "contain",
              backgroundColor: "transparent",
              // bottom: "0",
            }}
          />
        </Container>
      </Container>
    </Container>
  );
}
