import React from 'react'

import DataToDisplay from '../../models/dataToDisplay'
import TableRow from './TableRow'

interface TableProps {
  rows: DataToDisplay[]
}

const Table = (props: TableProps) => {
  return (
    <div className="w-full mx-20">
      <table className="table-fixed">
        <thead>
          <tr className="bg-blue-600 text-2xl text-left text-white border-none">
            <th className="w-1/5 pl-2">#</th>
            <th className="w-2/5">Property</th>
            <th className="w-2/5 pr-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row) => (
            <TableRow
              key={row.field}
              id={row.id}
              field={row.field}
              value={row.value}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
