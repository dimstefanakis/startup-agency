"use client";
import { Container, Text } from "@nextui-org/react";
import NavigationBar from "@/flat/NavigationBar";

export default function Company() {
  return (
    <Container css={{ padding: 0, display: "flex", flexFlow: "column" }}>
      <NavigationBar />
      <Container
        css={{
          padding: 0,
          display: "flex",
          flexFlow: "column",
          maxW: "800px",
        }}
      >
        <Text
          h1
          css={{
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          Pioneering Startup Development
        </Text>
        <Text
          css={{
            marginTop: "2rem",
          }}
        >
          Named after the Stoic philosopher Seneca, we at Senec embody the
          essence of resilience, wisdom, and transformative thought. Just as
          Seneca&apos;s teachings have stood the test of time, our solutions are
          built to endure and adapt to the dynamic landscapes of technology and
          business.
        </Text>
        <Text
          css={{
            marginTop: "1rem",
          }}
        >
          Senec is a startup development studio, specializing in marketplace
          development, post-marketplace development, and scaling for early-stage
          startups. We&apos;re passionate about turning funded concepts into
          profitable ventures, and our team of seasoned developers and designers
          are experts at bringing your vision to life.
        </Text>
        <Text
          css={{
            marginTop: "1rem",
          }}
        >
          We&apos;ve been in the trenches, we&apos;ve built startups from the
          ground up, and we&apos;ve seen what works and what doesn&apos;t. We
          bring this wealth of experience to every project we undertake.
        </Text>
        <Text
          css={{
            marginTop: "1rem",
          }}
        >
          At Senec, we&apos;re not just your service provider—we&apos;re your
          partner. We&apos;re committed to your growth, and we&apos;re here to
          provide the technical expertise and strategic guidance you need to
          succeed.
        </Text>
        <Text
          css={{
            marginTop: "1rem",
          }}
        >
          Join us and experience the Senec difference.
        </Text>
        <Text
          css={{
            marginTop: "2rem",
          }}
        >
          - Jim
          <br />
          Founder & CEO of Senec
        </Text>
      </Container>
    </Container>
  );
}
