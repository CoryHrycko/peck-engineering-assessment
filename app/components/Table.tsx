import Columns from './Columns'
import Item from './Item'
import PaginationButtons from './PaginationButtons'

type Column = {
  name: string
  id: string
}

export type Row = {
  objectid: string
  applicant: string
  facilitytype: string
  cnn: string
  locationdescription: string
  address: string
  blocklot: string
  block: string
  lot: string
  permit: string
  status: string
  x: string
  y: string
  latitude: string
  longitude: string
  schedule: string
  received: string
  priorpermit: string
  expirationdate: string
}

type TableProps = {
  columns: Column[]
  rows: Row[]
  count: number
}

const Table = ({ columns, rows, count }: TableProps) => {
  if (columns.length === 0) {
    return null
  }

  if (rows.length === 0) {
    return null
  }

  return (
    <>
      <table className="min-w-fit border divide-y divide-gray-200 text-left">
        <thead className="bg-gray-50">
          <Columns columns={columns} />
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row) => (
            <Item key={row.objectid} row={row} />
          ))}
        </tbody>
      </table>
      <PaginationButtons count={count} />
    </>
  )
}

export default Table
