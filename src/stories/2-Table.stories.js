import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "../components/Table";
import "../components/Table.scss";
import "../index.scss";
const moment = require("moment");

const columns = [
  {
    Header: "Words Column",
    accessor: "col1"
  },
  {
    Header: "Dates Column",
    accessor: "col2",
    Cell: ({ cell: { value } }) =>
      moment(value, "YYYY-MM-DD'T'hh:mm'Z'").format("YYYY MMM DD HH:mm")
  },
  {
    Header: "Numbers Column",
    accessor: "col3"
  }
];

const data = [
  {
    col1: "Here is",
    col2: "2020-01-01T00:00Z",
    col3: "5"
  },
  {
    col1: "a text",
    col2: "1901-11-12T12:30Z",
    col3: "6"
  },
  {
    col1: "Column!",
    col2: "2005-06-02T07:22Z",
    col3: "100"
  },
  {
    col1: "!",
    col2: "2019-02-01T00:01Z",
    col3: "110"
  }
];

storiesOf("Table", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("TempToggle", () => <Table columns={columns} data={data} />);
