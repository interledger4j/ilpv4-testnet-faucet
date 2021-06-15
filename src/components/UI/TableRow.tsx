import React from 'react'

import classNames from 'classnames'

interface TableRowProps {
  id: number
  field: string
  value: string
}

const TableRow = (props: TableRowProps) => {
  const borderDotted = props.id !== 1 ? 'border-dotted' : 'border-none'
  return (
    <tr
      className={classNames(
        'text-lg h-10 border-t-2 border-blue-200',
        borderDotted
      )}
    >
      <td className="pl-2">{props.id}</td>
      <td>{props.field}</td>
      <td className="pr-2">{props.value}</td>
    </tr>
  )
}

export default TableRow
