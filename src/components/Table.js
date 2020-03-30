import React, { useState } from 'react'
import { useTable, useFilters, useSortBy  } from 'react-table'

export default function Table({ columns, data }) {
  const [filterInput, setFilterInput] = useState("");

    const handleFilterChange = e => {
      const value = e.target.value || undefined;
      setFilter("name", value);
      setFilterInput(value);
    };
   

    

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      setFilter
    } = useTable({
      columns,
      data,
    },
    useFilters,
      useSortBy
      )
  return (
    <>
      <input className="searchBox"
        value={filterInput}
        onChange={handleFilterChange}
        placeholder="Search name"
      />
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th  {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
               <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  )
}