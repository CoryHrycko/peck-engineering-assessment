import type { Row } from './Table'

const Item = ({ row }: { row: Row }) => {
    return (
      <tr key={row.objectid}>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.objectid}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.applicant}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.facilitytype}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.cnn}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.locationdescription}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.address}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.blocklot}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.block}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.lot}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.permit}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.status}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.x}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.y}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.latitude}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.longitude}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.schedule}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.received}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.priorpermit}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {row.expirationdate}
        </td>
      </tr>
    )
  }

  export default Item