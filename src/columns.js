import React from "react";
const moment = require("moment");

/*
Columns Objects fro react-table
  For time columns accept raw data in order to sort correctly 
  and then use moment to format cell to local human readable correctly
 */

export default function Column(props) {
  const columns_all = React.useMemo(
    () => [
      {
        Header: "All Sensors",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Time",
            accessor: "time",
            Filter: "",
            Cell: ({ cell: { value } }) =>
              moment(value, "YYYY-MM-DD'T'hh:mm'Z'").format("YYYY MMM DD HH:mm")
          },
          {
            Header: "Value",
            accessor: "value"
          }
        ]
      }
    ],
    []
  );
  const columns_temp = React.useMemo(
    () => [
      {
        Header: "Temperature Sensors",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Time",
            accessor: "time",
            Filter: "",
            Cell: ({ cell: { value } }) =>
              moment(value, "YYYY-MM-DD'T'hh:mm'Z'").format("YYYY MMM DD HH:mm")
          },
          {
            Header: `Temperature  ( \u00b0${props.tempType} )`,
            accessor: "value"
          }
        ]
      }
    ],
    [props.tempType]
  );
  const columns_humidity = React.useMemo(
    () => [
      {
        Header: "Humidity Sensors",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Time",
            accessor: "time",
            Filter: "",
            Cell: ({ cell: { value } }) =>
              moment(value, "YYYY-MM-DD'T'hh:mm'Z'").format("YYYY MMM DD HH:mm")
          },
          {
            Header: "Humidity (%)",
            accessor: "value"
          }
        ]
      }
    ],
    []
  );
  const columns_info = React.useMemo(
    () => [
      {
        Header: "Sensors",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Type",
            accessor: "type"
          },
          {
            Header: "Created at",
            accessor: "createdAt",
            Filter: "",
            Cell: ({ cell: { value } }) =>
              moment(value, "YYYY-MM-DD'T'hh:mm'Z'").format("YYYY MMM DD HH:mm")
          }
        ]
      }
    ],
    []
  );

  return { columns_all, columns_humidity, columns_temp, columns_info };
}
