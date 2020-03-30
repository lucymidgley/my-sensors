import React from 'react'
import { useTable, useFilters, useSortBy  } from 'react-table'
import "./Table.scss"


export function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input className='searchBox'
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}


export default function Table({ columns, data}) {
  
    const defaultSorted = {
      id: "name",
      desc: true
    }


    const defaultColumn = React.useMemo(
      () => ({
        // Let's set up our default Filter UI
        Filter: DefaultColumnFilter,
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
      defaultSorted 
    },
    useFilters,
      useSortBy
      )
  return (
    <>
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
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className={column.isSorted ? (column.isSortedDesc ? 'up' : 'down') : ''} {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
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