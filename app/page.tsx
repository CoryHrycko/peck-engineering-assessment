import Table from './components/Table'
import getTableData from './components/getTableData'

export default async function Home() {
  const { columns, rows } = await getTableData()

  return (
    <main className="flex flex-col items-center justify-between p-24 %">
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        <Table columns={columns} rows={rows} />
      </div>
    </main>
  )
}
