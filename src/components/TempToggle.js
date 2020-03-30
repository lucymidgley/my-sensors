import React from "react"
import "./TempToggle.scss"

export default function TempToggle(props){
  return (
    <div className="tempToggle">
      Temperature: 
  <label className="toggleOption"> {'\u00b0'}C
     <input type="radio"  
       defaultChecked
       value={props.tempType === "C"}
       onChange={()=> props.setTempType("C")} name="tempRadio"/>
   </label>
   <label className="toggleOption"> {'\u00b0'}F
     <input type="radio" 
        value={props.tempType === "F"}
       onChange={()=> props.setTempType("F")} name="tempRadio"/>
   </label>
  </div>
  )
}