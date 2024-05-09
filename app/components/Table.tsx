import Item from "./Item"

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


  return (
    <table className="min-w-full border divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column) => (
            <th
              key={column.id}
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows.map((row) => (
            <Item row={row as Row} />
        ))}
      </tbody>
    </table>
  )
}

export default Table
