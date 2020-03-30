const moment = require('moment');

export default function getData(sensors, readings, sensorType = "", tempType = "") {
  console.log(readings)
  let outputData = [];
  let dataFiltered
  for (const item of readings) {
    let readingsObj = {};
    readingsObj["name"] = sensors[item.sensorId - 1]["name"]
    const t = item["time"]
    readingsObj["time"] = moment(t).format("LLLL")
    readingsObj["type"] = sensors[item.sensorId - 1]["type"]
    if (tempType === "F" && readingsObj["type"] === "Temperature Sensor" ) {
      readingsObj["value"] = ((parseFloat(item["value"]) * 9 / 5) + 32).toFixed(1)
    } else {
      readingsObj["value"] = parseFloat(item["value"]).toFixed(1)
    }


    if (sensorType === "All") {
      
      if (readingsObj["type"] === "Temperature Sensor" && tempType === "F") {
        readingsObj["value"] += '\u00b0F'
      } else if (readingsObj["type"] === "Temperature Sensor" && tempType === "C") {
        readingsObj["value"] += '\u00b0C'
      } else {
        readingsObj["value"] += '%'
      }
    }
   
    console.log(item["value"])
    outputData.push(readingsObj)
    if (sensorType === "Temperature Sensor" || sensorType === "Humidity Sensor") {
      dataFiltered = outputData.filter((item) => item["type"] === sensorType)
    } else {
      dataFiltered = outputData
    }
  }
  return dataFiltered
}
export const getSensors = function (sensors) {
  let outputData = [];
  for (const item of sensors) {
    const t = item["createdAt"]
    item["createdAt"] = moment(t).format("LLLL")
    outputData.push(item)
  }
  return outputData
}
