import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from "@storybook/react";
import Nav from "../components/Nav"
import "../index.scss"


storiesOf("NavBar", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
    })
    .add("Nav", () => (
      <Nav selected={4} setView={action("setView")} />
    ));