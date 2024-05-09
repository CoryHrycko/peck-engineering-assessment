const getTableData = async () => {
  //    Quries to implement
  //    1. Get all the data from the table
  //    https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20limit%20100
  //    2. Get the count of the data for pagination
  //    https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20%20|%3E%20select%20count(*)%20as%20__count_alias__&$$read_from_nbe=true&$$version=2.1
  //    3. Get the data for column filtering = data.columns
  //    https://data.sfgov.org/api/views/rqzj-sfat.json?read_from_nbe=true&version=2.1

  async function getColumnData() {
    const data = await fetch(
      'https://data.sfgov.org/api/views/rqzj-sfat.json?read_from_nbe=true&version=2.1',
    )

    return data.json()
  }

  async function getRowData() {
    const data = await fetch(
      'https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20limit%20100',
    )

    return data.json()
  }

  async function getCountData() {
    const data = await fetch(
      'https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20%20|%3E%20select%20count(*)%20as%20__count_alias__&$$read_from_nbe=true&$$version=2.1',
    )

    return data.json()
  }

  // console.log('getColumnData', getColumnData())
  // console.log('getRowData', getRowData())

  const dun = await getCountData()
  const rowsFromAPI = await getRowData()
  const columnsFromAPI = await getColumnData()

  // console.log('getCountData',dun)
  console.log('rowsFromAPI', rowsFromAPI[0])
  // console.log('columnsFromAPI',columnsFromAPI.columns.map((c: any) => c.name))

  
  const columns = columnsFromAPI.columns.map((c: any) => {
    return { name: c.name, id: c.name }
  })


  const rows = rowsFromAPI

  return { columns, rows }
}

export default getTableData
