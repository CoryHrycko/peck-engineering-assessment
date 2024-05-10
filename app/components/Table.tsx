import Columns from './Columns'
import Item from './Item'
import PaginationButtons from './PaginationButtons'
import RowItems from './RowItems'

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
}

const Table = ({ columns, rows }: TableProps) => {
  if (columns.length === 0) {
    return null
  }

  if (rows.length === 0) {
    return null
  }

  if (!rows) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-center">No data found</p>
      </div>
    )
  }
  console.log(rows)
  return (
    <>
      {/* <table className="min-w-fit border divide-y divide-gray-200 text-left"> */}
      <table className="table-fixed">
        <Columns columns={columns} />
        <RowItems rows={rows} />
      </table>
    </>
  )
}

export default Table
