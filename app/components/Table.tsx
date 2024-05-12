import Columns from './Columns'
import RowItems from './RowItems'

export type Column = {
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
  rows: Row[] | any[] | undefined
  keysToShow?: string[]
  mainTable?: boolean
}

const Table = ({ columns, rows, mainTable }: TableProps) => {
  if (!columns || columns.length === 0) {
    return null
  }

  if (!rows || rows.length === 0) {
    return null
  }

  if (!rows) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-center">No data found</p>
      </div>
    )
  }
  return (
    <>
      <table className="table-fixed">
        <Columns columns={columns} />
        <RowItems rows={rows} mainTable={mainTable} />
      </table>
    </>
  )
}

export default Table
