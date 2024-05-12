import Item from './Item'
import { Row } from './Table'

type RowItemsProps = {
  rows: Row[]
  mainTable?: boolean
}

const RowItems = ({ rows, mainTable }: RowItemsProps) => {
  return (
    <tbody className="bg-white [&>*:nth-child(odd)]:bg-indigo-100 [&>*:nth-child(even)]:bg-indigo-300">
      {rows &&
        rows?.map((row: Row) => (
          <Item key={row.objectid} row={row} mainTable={mainTable} />
        ))}
    </tbody>
  )
}

export default RowItems
