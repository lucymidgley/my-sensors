import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import TempToggle from "../components/TempToggle";
import "../index.scss";

storiesOf("TempToggle", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("TempToggle", () => (
    <TempToggle tempType={"C"} setTempType={action("setTempType")} />
  ));
