import React from 'react'


export default function Column(props){


const columns_all = React.useMemo(
  () => [
    {
      Header: 'All Sensors',
      columns: [
        {
          Header: 'Name',
          accessor: "name"
        },
        {
          Header: 'Time',
          accessor: 'time',
        },
        {
          Header: 'Value',
          accessor: 'value',
        },
      ],
    },
  ],
  []
)
const columns_temp = React.useMemo(
  () => [
    {
      Header: 'Temperature Sensors',
      columns: [
        {
          Header: 'Name',
          accessor: "name"
        },
        {
          Header: 'Time',
          accessor: 'time',
        },
        {
          Header: `Temperature  ( \u00b0${props.tempType} )`,
          accessor: 'value',
        },
      ],
    },
  ],
  []
)
const columns_humidity = React.useMemo(
  () => [
    {
      Header: 'Humidity Sensors',
      columns: [
        {
          Header: 'Name',
          accessor: "name"
        },
        {
          Header: 'Time',
          accessor: 'time',
        },
        {
          Header: '% Humidity',
          accessor: 'value',
        },
      ],
    },
  ],
  []
)
const columns_info = React.useMemo(
  () => [
    {
      Header: 'Sensors',
      columns: [
        {
          Header: 'Name',
          accessor: "name"
        },
        {
          Header: 'Type',
          accessor: "type"
        },
        {
          Header: 'Created at:',
          accessor: 'createdAt',
        },
      ],
    },
  ],
  []
)

return {columns_all, columns_humidity, columns_temp, columns_info}
}