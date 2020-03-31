export default function getData(sensors, readings, sensorType, tempType) {
  let sensorsLookup = {};
  for (const sensor of sensors) {
    sensorsLookup[sensor.id] = sensor;
  }
  let outputData = [];
  let dataFiltered;
  for (const item of readings) {
    let readingsObj = {
      ...item
    };
    readingsObj["name"] = sensorsLookup[item["sensorId"]]["name"];
    readingsObj["type"] = sensorsLookup[item["sensorId"]]["type"];
    if (tempType === "F" && readingsObj["type"] === "Temperature Sensor") {
      readingsObj["value"] = ((parseFloat(item["value"]) * 9) / 5 + 32).toFixed(
        1
      );
    } else {
      readingsObj["value"] = parseFloat(item["value"]).toFixed(1);
    }
    //Add units to values for "all sensors" table
    if (sensorType === "All") {
      if (readingsObj["type"] === "Temperature Sensor" && tempType === "F") {
        readingsObj["value"] += "\u00b0F";
      } else if (
        readingsObj["type"] === "Temperature Sensor" &&
        tempType === "C"
      ) {
        readingsObj["value"] += "\u00b0C";
      } else {
        readingsObj["value"] += "%";
      }
    }

    outputData.push(readingsObj);
    if (
      sensorType === "Temperature Sensor" ||
      sensorType === "Humidity Sensor"
    ) {
      dataFiltered = outputData.filter(item => item["type"] === sensorType);
    } else {
      dataFiltered = outputData;
    }
  }
  return dataFiltered;
}
