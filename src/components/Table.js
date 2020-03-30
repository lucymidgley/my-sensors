import React from 'react'
import { useTable, useFilters, useSortBy  } from 'react-table'
import "./Table.scss"

/* 
Column filter function:
  displays the number of rows to search within before filtering
  adds input search box to each column
  uses react table's setFilter to find the corresponding data
*/

function ColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input className='searchBox'
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}


export default function Table({ columns, data}) {
  
    const defaultColumn = React.useMemo(
      () => ({
        Filter: ColumnFilter,
      }),
      []
    )

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      allColumns,
      getToggleHideAllColumnsProps
    } = useTable({
      columns,
      data,
      initialState: {
        sortBy: [{ id: 'name', desc: true }]
      },
      defaultColumn,
    },
    useFilters,
      useSortBy
      )

      /*
      Table template from react-table with: 
         Search filter added to header 
         Conditionally add 'desc' or 'asc' class to column if it is sorted
         Added checkbox to toggle all columns on or off
         Added checkbox to choose which columns should be shown 
      */
  return (
    <>
    {console.log(getTableBodyProps())}
    <div className="columnToggles">
    <label>
        <input type="checkbox" {...getToggleHideAllColumnsProps()}/> All
      </label>
        {allColumns.map(column => (
          <div key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
              {column.Header}
            </label>
          </div>
        ))}
        <br />
      </div>
    <table {...getTableProps()} >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className={column.isSorted ? (column.isSortedDesc ? 'desc' : 'asc') : ''} 
              {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
              <div className="searchBox" >{column.canFilter ? column.render('Filter') : null}</div>
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

