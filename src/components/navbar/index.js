import React from "react";

import {Button, Pulse, Navbar, NavbarBrand} from "./style"

export default function Navigation() {
    return (
      <Navbar>
          <NavbarBrand>Aid Ukraine</NavbarBrand>
        <Pulse>
          <Button>Donate</Button>
        </Pulse>
      </Navbar>
    );
}
