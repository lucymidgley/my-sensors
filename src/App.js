import React, { useState, Fragment } from 'react'
import "./App.scss"
import getData, { getSensors } from "./helpers/data-helpers"
import Nav from "./components/Nav"
import Table, {DefaultColumnFilter, IndeterminateCheckbox} from "./components/Table"
import Columns from "./columns"
import TempToggle from "./components/TempToggle"
const readings = require("./data/readings.json")
const sensors = require("./data/sensors.json")




function App() {
  const [view, setView] = useState(1)
  const [tempType, setTempType] = useState("C")
  const {columns_all, columns_temp, columns_humidity, columns_info} = Columns({tempType})

  return (
    <Fragment>
      <Nav selected={view} setView={setView} />
      <main className="layout">
      <TempToggle tempType={tempType} setTempType={setTempType} />
        {view === 1 && <Table columns={columns_all} data={getData(sensors, readings, "All", tempType)} />}  
        {view === 2 && <Table columns={columns_temp} data={getData(sensors, readings, "Temperature Sensor", tempType)} />}  
        {view === 3 && <Table columns={columns_humidity} data={getData(sensors, readings, "Humidity Sensor", tempType)} />}  
        {view === 4 && <Table columns={columns_info} data={getSensors(sensors)} />}  
    </main>
    </Fragment>
  )
}

export default App

