import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.js";

export default function NavigationBar() {
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        {/* <AcmeLogo /> */}
        <Text b color="inherit" hideIn="xs">
          SENEC
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Features</Navbar.Link>
        {/* <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link> */}
        {/* <Navbar.Link href="#">Pricing</Navbar.Link> */}
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        {/* <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link> */}
        <Navbar.Item>
          <Button
            auto
            flat
            as={Link}
            href="https://calendly.com/senecai/30min"
            target="_blank"
          >
            Book A Call
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
