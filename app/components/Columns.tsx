type Column = {
  name: string
  id: string
}

const Columns = ({ columns }: { columns: Column[] }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column: Column) => (
          <th
            key={column.id}
            className="px-6 py-3 text-xs font-medium text-left text-gray-500 text-nowrap">
            {column.name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default Columns
