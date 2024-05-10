type Column = {
  name: string
  id: string
}

const Columns = ({ columns }: { columns: Column[] }) => {
  return (
    <tr>
      {columns.map((column: Column) => (
        <th
          key={column.id}
          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 text-nowrap">
          {column.name}
        </th>
      ))}
    </tr>
  )
}

export default Columns
