import React, { useState } from 'react'
import "./App.scss"
import { data } from "./helpers/data-helpers"
import Table from "./components/Table"



function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Sensors',
        columns: [
          {
            Header: 'Name',
            accessor: "name"
          },
          {
            Header: 'Time',
            accessor: 'time',
          },
          {
            Header: 'Value',
            accessor: 'value',
          },
        ],
      },
    ],
    []
  )


  return (
      <Table columns={columns} data={data} />
  )
}

export default App

