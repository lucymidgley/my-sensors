import React, { useState, Fragment } from 'react'
import "./App.scss"
import { data } from "./helpers/data-helpers"
import Nav from "./components/Nav"
import AllSensors from "./components/AllSensors"



function App() {
  const [view, setView] = useState(1)
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
    <Fragment>
      <Nav selected={view} setView={setView} />
      <main className="layout">
        {view === 1 && <AllSensors columns={columns} data={data} />}  
        {view === 2 && <AllSensors columns={columns} data={data} />}  
        {view === 3 && <AllSensors columns={columns} data={data} />}  
        {view === 4 && <AllSensors columns={columns} data={data} />}  
    </main>
    </Fragment>
  )
}

export default App

