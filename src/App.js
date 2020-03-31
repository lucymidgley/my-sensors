import React, { useState, Fragment } from 'react'
import "./App.scss"
import getData from "./helpers/data-helpers"
import Nav from "./components/Nav"
import Table from "./components/Table"
import Columns from "./Columns"
import TempToggle from "./components/TempToggle"
import Info from "./components/Info"
const readings = require("./data/readings.json")
const sensors = require("./data/sensors.json")


function App() {
  const [view, setView] = useState(1)
  const [tempType, setTempType] = useState("C")
  const {columns_all, columns_temp, columns_humidity, columns_info} = Columns({tempType, readings})

  return (
    <Fragment>
      <Nav selected={view} setView={setView} />
      <main className="layout">
        <Info />
        {view === 1 && <TempToggle tempType={tempType} setTempType={setTempType}/>}
        {view === 2 && <TempToggle tempType={tempType} setTempType={setTempType}/>}
        
        {view === 1 && <Table columns={columns_all} data={getData(sensors, readings, "All", tempType)}/>}  
        {view === 2 && <Table columns={columns_temp} data={getData(sensors, readings, "Temperature Sensor", tempType)}/>}  
        {view === 3 && <Table columns={columns_humidity} data={getData(sensors, readings, "Humidity Sensor", tempType)}/>}  
        {view === 4 && <Table columns={columns_info} data={sensors}/>}  
    </main>
    </Fragment>
  )
}

export default App

