import { Container, Text, Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer>
      <Container
        css={{
          padding: "3rem 0",
          borderTop: "1px solid var(--accents-2)",
          backgroundColor: "var(--accents-1)",
        }}
      >
        <Container
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Text
            color="secondary"
            css={{
              color: "var(--accents-6)",
              flex: 1,
            }}
          >
            © Senec. All rights reserved.
          </Text>
          {/* Blog */}
          <Link
            target="_blank"
            href="https://medium.com/@dimitrisstefanakis"
            css={{
              color: "var(--accents-6)",
            }}
          >
            Blog
          </Link>
          {/* Email contact */}
          <Link
            target="_blank"
            href="mailto:jim@senec.ai"
            css={{
              color: "var(--accents-6)",
            }}
          >
            Contact
          </Link>
        </Container>
      </Container>
    </footer>
  );
}
