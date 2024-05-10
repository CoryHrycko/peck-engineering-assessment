import GeolocationGetter from './components/GeolocationGetter'
import PaginationButtons from './components/PaginationButtons'
import Table from './components/Table'
import getTableData from './components/data/getTableData'

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string
    offset?: string
    limit?: string
    lat?: string
    lng?: string
    radius?: string
  }
}) {
  const { columns, rows, count } = await getTableData(
    parseInt(searchParams?.offset ?? '0'),
    parseInt(searchParams?.limit ?? '100'),
    {
      lat: searchParams?.lat,
      lng: searchParams?.lng,
    },
    parseInt(searchParams?.radius ?? '50000'),
  )

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <GeolocationGetter />
      {/* <div className="w-full items-center justify-between font-mono text-sm lg:flex"> */}
      {/* <div className=""> */}
      <Table columns={columns} rows={rows} />
      {/* </div> */}
      <PaginationButtons count={count} />
    </main>
  )
}
