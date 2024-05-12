import ClientItem from './ClientItem'
import type { Row } from './Table'

const Item = ({ row, mainTable = true }: { row: Row; mainTable?: boolean }) => {
  const style =
    'px-6 py-4 text-sm text-gray-700 whitespace-nowrap text-left cursor-pointer'
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

  const mainTableKeys: string[] = [
    row.objectid,
    row.applicant,
    row.facilitytype,
    row.locationdescription,
    row.address,
    row.status,
  ]

  return (
    <tr key={row.objectid}>
      {!mainTable &&
        rowKeys.map((value, key) => (
          <ClientItem
            key={key}
            value={value}
            style={style}
            link={row.objectid}
          />
        ))}
      {mainTable &&
        mainTableKeys.map((value, key) => (
          <ClientItem
            key={key}
            value={value}
            style={style}
            link={row.objectid}
          />
        ))}
    </tr>
  )
}

export default Item
