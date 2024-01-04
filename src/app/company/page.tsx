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
        <Text h1 css={{
          textAlign: 'center',
          marginTop: '2rem'
        }}>Pioneering Startup Development</Text>
        <Text css={{
          marginTop: '2rem'
        }}>
          Named after the Stoic philosopher Seneca, we at Senec embody the
          essence of resilience, wisdom, and transformative thought. Just as
          Seneca&nbsp;s teachings have stood the test of time, our solutions are
          built to endure and adapt to the dynamic landscapes of technology and
          business.
        </Text>
        <Text css={{
          marginTop: '1rem'
        }}>
          Senec is a startup development studio, specializing in MVP
          development, post-MVP development, and scaling for early-stage
          startups. We&nbsp;re passionate about turning funded concepts into
          profitable ventures, and our team of seasoned developers and designers
          are experts at bringing your vision to life.
        </Text>
        <Text css={{
          marginTop: '1rem'
        }}>
          Our approach is unique. We leverage cutting-edge tools like ThriftMVP
          and Senec.ai, which give us an edge in delivering superior services.
          But our true differentiator lies in our startup experience. We&nbsp;ve
          been in the trenches, we&nbsp;ve built startups from the ground up,
          and we&nbsp;ve seen what works and what doesn&nbsp;t. We bring this
          wealth of experience to every project we undertake.
        </Text>
        <Text css={{
          marginTop: '1rem'
        }}>
          At Senec, we&nbsp;re not just your service provider—we&nbsp;re your
          partner. We&nbsp;re committed to your growth, and we&nbsp;re here to
          provide the technical expertise and strategic guidance you need to
          succeed.
        </Text>
        <Text css={{
          marginTop: '1rem'
        }}>Join us and experience the Senec difference.</Text>
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
