import React from "react";

import {Button, Pulse, Navbar, NavbarBrand} from "./style"

export default function Navigation() {
    return (
      <Navbar>
        <NavbarBrand>Aid Ukraine</NavbarBrand>
        <Pulse>
          <a href="https://www.paypal.com">
            <Button>Donate</Button>
          </a>
        </Pulse>
      </Navbar>
    );
}
