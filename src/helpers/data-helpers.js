const readings = require("../data/readings.json")
const sensors = require("../data/sensors.json")

const getData = function(sensors, readings){
  let outputData = [];
  for(const item of readings){
    item["name"] = sensors[item.sensorId - 1]["name"]
    outputData.push(item)
  }
  return outputData
}

const data = getData(sensors, readings)

export {data}
