import Table from './components/Table'

export default function Home() {
  const columns = [
    { name: 'Name', id: 'name' },
    { name: 'Role', id: 'role' },
    { name: 'Email', id: 'email' },
    { name: 'Phone', id: 'phone' },
    { name: 'Address', id: 'address' },
    { name: 'City', id: 'city' },
    { name: 'State', id: 'state' },
    { name: 'Zip', id: 'zip' },
  ]

  const rows = [
    {
      name: 'John Doe',
      role: 'Developer',
      email: 'john@example.com',
      phone: '+1 234 567 8901',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
    },
    {
      name: 'Jane Doe',
      role: 'Web Developer',
      email: 'jane@example.com',
      phone: '+1 345 678 9012',
      address: '456 Oak St',
      city: 'Nashville',
      state: 'TN',
      zip: '76543',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Table columns={columns} rows={rows} />
      </div>
    </main>
  )
}
