import type { Row } from './Table'

const Item = ({ row }: { row: Row }) => {
  const style = 'px-6 py-4 text-sm text-gray-700 whitespace-nowrap'
  const rowKeys = [
    row.objectid,
    row.applicant,
    row.facilitytype,
    row.cnn,
    row.locationdescription,
    row.address,
    row.blocklot,
    row.block,
    row.lot,
    row.permit,
    row.status,
    row.x,
    row.y,
    row.latitude,
    row.longitude,
    row.schedule,
    row.received,
    row.priorpermit,
    row.expirationdate,
  ]

  return (
    <tr key={row.objectid}>
      {rowKeys.map((value, key) => (
        <td className={style} key={key}>
          {value}
        </td>
      ))}
    </tr>
  )
}

export default Item
