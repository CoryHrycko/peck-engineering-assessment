import getTruckData from '@/app/components/data/getTruckData'
import GeolocationGetter from '../../../components/GeolocationGetter'
import PaginationButtons from '../../../components/PaginationButtons'
import Table from '../../../components/Table'
import getTableData from '../../../components/data/getTableData'
import Item from '@/app/components/Item'

export default async function Home({
  params,
  searchParams,
}: {
  params: {
    truck: string
  }
  searchParams?: {
    query?: string
    offset?: string
    limit?: string
    lat?: string
    lng?: string
    radius?: string
  }
}) {
  const { columns } = await getTableData(
    parseInt(searchParams?.offset ?? '0'),
    parseInt(searchParams?.limit ?? '100'),
    {
      lat: searchParams?.lat,
      lng: searchParams?.lng,
    },
    parseInt(searchParams?.radius ?? '5000000'),
  )
  const truckId = params?.truck
  const truckData = await getTruckData(truckId)

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Truck Tracker</h1>
      <Table columns={columns} rows={truckData} mainTable={false} />
    </main>
  )
}
