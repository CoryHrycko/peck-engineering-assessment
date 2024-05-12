import GeolocationGetter from './components/GeolocationGetter'
import PaginationButtons from './components/PaginationButtons'
import Table, { Row } from './components/Table'
import cleanForMainTable from './components/cleanForMainTable'
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
    parseInt(searchParams?.radius ?? '5000000'),
  )

  const { mainTableColumns, mainTableRows, mainTableKeys } = cleanForMainTable(
    rows,
    columns,
  )

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Truck Tracker</h1>
      <GeolocationGetter />
      <PaginationButtons count={count} />
      <Table
        columns={mainTableColumns}
        rows={mainTableRows}
        keysToShow={mainTableKeys}
      />
      <PaginationButtons count={count} />
    </main>
  )
}
