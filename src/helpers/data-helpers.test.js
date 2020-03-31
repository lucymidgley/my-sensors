import "@testing-library/jest-dom/extend-expect";
import getData from "./data-helpers";
const readingsTest = [
  {
    time: "2020-01-01T00:00Z",
    sensorId: 1,
    value: 22
  },
  {
    time: "2020-01-01T00:03Z",
    sensorId: 2,
    value: 35.38
  },
  {
    time: "2020-01-01T00:03Z",
    sensorId: 1,
    value: 67
  },
  {
    time: "2020-01-01T00:03Z",
    sensorId: 1,
    value: 100
  },
  {
    time: "2020-01-01T00:03Z",
    sensorId: 1,
    value: 0
  }
];
const sensorsTest = [
  {
    id: 1,
    name: "Living Room Thermostat",
    type: "Temperature Sensor",
    createdAt: "2019-12-31T00:00Z",
    units: "Celsius"
  },
  {
    id: 2,
    name: "Living Room Humdifier",
    type: "Humidity Sensor",
    createdAt: "2019-12-31T00:00Z",
    units: "%"
  }
];

describe("getData function", () => {
  it("Converts Celcius to Farehnheit correctly, and to 1 decimal place", () => {
    const dataObj = getData(
      sensorsTest,
      readingsTest,
      "Temperature Sensor",
      "F"
    );
    const outputTemp1 = dataObj[0]["value"];
    const outputTemp2 = dataObj[1]["value"];
    const outputTemp3 = dataObj[2]["value"];
    const outputTemp4 = dataObj[3]["value"];
    expect(outputTemp1).toEqual("71.6");
    expect(outputTemp2).toEqual("152.6");
    expect(outputTemp3).toEqual("212.0");
    expect(outputTemp4).toEqual("32.0");
  });
  it("Returns the correct filtered data", () => {
    const dataObjHumFiltered = getData(
      sensorsTest,
      readingsTest,
      "Humidity Sensor",
      "F"
    );
    const dataObjTempFiltered = getData(
      sensorsTest,
      readingsTest,
      "Temperature Sensor",
      "F"
    );
    expect(dataObjHumFiltered.length).toEqual(1);
    expect(dataObjHumFiltered[0]["type"]).toEqual("Humidity Sensor");

    expect(dataObjTempFiltered.length).toEqual(4);
    expect(dataObjTempFiltered[0]["type"]).toEqual("Temperature Sensor");
  });
  it("Returns the correct data with the correct unit, and correct rounding for the all sensors category", () => {
    const dataObjAllC = getData(sensorsTest, readingsTest, "All", "C");
    const dataObjAllF = getData(sensorsTest, readingsTest, "All", "F");
    expect(dataObjAllC[0]["value"]).toEqual("22.0\u00b0C");
    expect(dataObjAllF[0]["value"]).toEqual("71.6\u00b0F");
    expect(dataObjAllC[1]["value"]).toEqual("35.4%");
  });
});
