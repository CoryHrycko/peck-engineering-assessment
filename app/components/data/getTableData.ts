const getTableData = async (offset = 0, limit = 100, sort = 'objectid', order = 'asc') => {
  //    Quries to implement
  //    1. Get all the data from the table
  //    https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20limit%20100
  //    2. Get the count of the data for pagination
  //    https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20%20|%3E%20select%20count(*)%20as%20__count_alias__&$$read_from_nbe=true&$$version=2.1
  //    3. Get the data for column filtering = data.columns
  //    https://data.sfgov.org/api/views/rqzj-sfat.json?read_from_nbe=true&version=2.1
  //    https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20offset%20100%20limit%20100
  //    https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20order%20by%20%60objectid%60%20asc%20limit%20100
  //    %20order%20by%20%60objectid%60%20asc%20

  async function getColumnData() {
    const data = await fetch(
      'https://data.sfgov.org/api/views/rqzj-sfat.json?read_from_nbe=true&version=2.1',
    )

    return data.json()
  }

  async function getRowData() {
    const data = await fetch(
      `https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20offset%20${offset}%20limit%20${limit}`,
    )

    return data.json()
  }

  async function getCountData() {
    const data = await fetch(
      'https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20%20|%3E%20select%20count(*)%20as%20__count_alias__&$$read_from_nbe=true&$$version=2.1',
    )

    return data.json()
  }

  let count = 0
  let rowsFromAPI = []
  let columnsFromAPI = []

  try {
  count = await getCountData()
  } catch (error) {
    console.log(error)
  }

  try {
    rowsFromAPI = await getRowData()
  } catch (error) {
    console.log(error)
  }

  try {
    columnsFromAPI = await getColumnData()
  } catch (error) {
    console.log(error)
  }

  function insertSpaceInCamelCase(str: string) {
    return str.replace(/([A-Z])/g, ' $1').trim();
}

  const columns = columnsFromAPI.columns
    .map((c: any) => {
      return { name: insertSpaceInCamelCase(c.name), id: c.name }
    })
    .slice(0, -9)
    .filter((c: any) => c.name !== 'Food Items')

  const rows = rowsFromAPI

  return { columns, rows, count }
}

export default getTableData