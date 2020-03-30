import React from "react"
import "./Nav.scss"

export default function Nav(props){
  const views = [
    {id: 1, name: "All sensors"},
    {id: 2, name: "Temperature Sensors"},
    {id: 3, name: "Humidity Sensors"},
    {id: 4, name: "Sensor Information"},
  ]
  
  const viewsList = views.map((view) => {
    return(
    <li key={view.id} className={props.selected === view.id ? "nav-views__item-selected": "nav-views__item"} onClick={() => props.setView(view.id)}>{view.name}</li>
    )
  })

  return (
    <ul className="nav-views">
     {viewsList}
    </ul>
  )
}