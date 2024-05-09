import Table from './components/Table'
import getTableData from './components/getTableData'

export default async function Home() {
  const { columns, rows } = await getTableData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Table columns={columns} rows={rows} />
      </div>
    </main>
  )
}
