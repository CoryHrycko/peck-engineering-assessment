import Item from './Item'
import { Row } from './Table'

type RowItemsProps = {
  rows: Row[]
}

const RowItems = ({ rows }: RowItemsProps) => {
  return (
    <tbody className="bg-white">
      {rows && rows?.map((row: Row) => <Item key={row.objectid} row={row} />)}
    </tbody>
  )
}

export default RowItems
