const getTableData = () => {
  
  
  
  
  
  
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
      id: '1',
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
      id: '2',
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

  return { columns, rows }
}

export default getTableData