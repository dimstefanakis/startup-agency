import { Container, Text, Image } from "@nextui-org/react";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Partners() {
  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
        "@sm": {
          marginTop: 0,
        },
      }}
    >
      <Text h2 size="$6xl">
        We&apos;ve helped
      </Text>

      <Container
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
          color: "black",
          marginBottom: 0,
          "@sm": {
            marginBottom: 150,
          },
        }}
      >
        <Image
          src="/logos/ycomb.webp"
          width={isMobile ? 100 : 200}
          height={isMobile ? 50 : 200}
          alt="partners"
        />
        <Image
          src="/logos/d56e02b1-1a9f-4c8d-a4c8-c0486e3d3bdd-1688413661373.png"
          width={isMobile ? 100 : 200}
          height={isMobile ? 50 : 200}
          alt="partners"
        />
      </Container>
    </Container>
  );
}
