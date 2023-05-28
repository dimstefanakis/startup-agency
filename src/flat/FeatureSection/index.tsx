import { Container, Text, Image } from "@nextui-org/react";

interface Props {
  title: string;
  text: JSX.Element;
  ImageComponent: JSX.Element;
  textSide: "left" | "right";
  icons?: JSX.Element;
}

function FeatureSection({
  title,
  text,
  icons,
  ImageComponent,
  textSide,
}: Props) {
  return (
    <Container
      fluid
      css={{
        display: "flex",
        flexFlow: "column",
        width: "100%",
        height: "100%",
        margin: 0,
        marginTop: "6rem",
        "@sm": {
          marginTop: 0,
        },
      }}
    >
      <Text
        size="$5xl"
        css={{
          lineHeight: "1",
          textAlign: "center",
          "@sm": {
            alignSelf: textSide === "right" ? "flex-start" : "flex-end",
          },
        }}
        h1
      >
        {title}
      </Text>
      <Container
        css={{
          padding: 0,
          display: "flex",
          flexFlow: "column",
          "@sm": {
            flexFlow: "row",
          },
        }}
      >
        {textSide === "left" ? (
          <>
            <Container
              css={{
                padding: 0,
                display: "flex",
                maxWidth: "100%",
                "@sm": {
                  maxWidth: "70%",
                },
              }}
            >
              <TextWrapper text={text} />
              {icons && (
                <Container
                  css={{ padding: 0, display: "flex", maxWidth: "100%", '@sm': {
                    maxWidth: '70%'
                  } }}
                >
                  {icons}
                </Container>
              )}
            </Container>
          </>
        ) : (
          <>{ImageComponent}</>
        )}
        {textSide === "right" ? (
          <>
            <Container
              css={{
                padding: 0,
                display: "flex",
                maxWidth: "100%",
                "@sm": {
                  maxWidth: "70%",
                },
              }}
            >
              <TextWrapper text={text} />
              {icons && (
                <Container
                  css={{ padding: 0, display: "flex", maxWidth: "100%", '@sm': {
                    maxWidth: '70%'
                    }
                   }}
                >
                  {icons}
                </Container>
              )}
            </Container>
          </>
        ) : (
          <>{ImageComponent}</>
        )}
      </Container>
    </Container>
  );
}

function TextWrapper({ text }: { text: JSX.Element }) {
  return (
    <Container
      css={{
        width: "100%",
        padding: 0,
        display: "flex",
        justifyContent: "center",
        "@sm": {
          width: "70%",
        },
      }}
    >
      <Text
        size="$xl"
        h2
        css={{
          marginTop: "2rem",
          color: "$gray800",
          maxWidth: "100%",
        }}
      >
        {text}
      </Text>
    </Container>
  );
}

export default FeatureSection;
