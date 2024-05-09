type Column = {
  name: string
  id: string
}

type Row = {
  id: string
  name: string
  role: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
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
          <tr key={row.id}>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {row.name}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {row.role}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {row.email}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {row.phone}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {row.address}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {row.city}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {row.state}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {row.zip}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
