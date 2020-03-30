const moment = require('moment');

export default function getData(sensors, readings, sensorType = "", tempType = "") {
  let outputData = [];
  let dataFiltered
  for (const item of readings) {
    let readingsObj = {};
    readingsObj["name"] = sensors[item.sensorId - 1]["name"]
    const t = item["time"]
    readingsObj["time"] = moment(t, "YYYY-MM-DD'T'hh:mm'Z'").format("LLLL")
    readingsObj["type"] = sensors[item.sensorId - 1]["type"]
    if (tempType === "F" && readingsObj["type"] === "Temperature Sensor") {
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
    let sensorsObj = {};
    const t = item["createdAt"]
    sensorsObj = {...item}
    sensorsObj["createdAt"] = moment(t, "YYYY-MM-DD'T'hh:mm'Z'").format("LLLL")
    outputData.push(sensorsObj)
  }
  return outputData
}