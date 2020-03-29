const readings = require("../data/readings.json")
const sensors = require("../data/sensors.json")
const moment = require('moment');

const getData = function(sensors, readings){
  let outputData = [];
  for(const item of readings){
    item["name"] = sensors[item.sensorId - 1]["name"]
    item["time"] = moment(item["time"]).format("LLLL")
    outputData.push(item)
  }
  return outputData
}

const data = getData(sensors, readings)

export {data}
