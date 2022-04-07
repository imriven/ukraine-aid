import React from "react";

import {Button, Pulse, Navbar, NavbarBrand} from "./style"

export default function Navigation() {
    return (
      <Navbar>
        <NavbarBrand>Aid Ukraine</NavbarBrand>
        <Pulse>
          <a href="http://paypal.me/NDanylchenko">
            <Button>Donate</Button>
          </a>
        </Pulse>
      </Navbar>
    );
}
