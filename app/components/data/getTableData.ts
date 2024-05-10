const getTableData = async (offset = 0, limit = 100, location?: {lat?: string, lng?: string}, radius?:number) => {
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
  // $where=within_circle(report_location,%2047.59815,%20-122.334540,%20500)

  async function getColumnData() {
    const data = await fetch(
      'https://data.sfgov.org/api/views/rqzj-sfat.json?read_from_nbe=true&version=2.1',
    )

    return data.json()
  }

  async function getRowData() {
    let data: Response
    let url= `https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20offset%20${offset}%20limit%20${limit}`
    
    if (location?.lat && location?.lng) {
      url = url= `https://data.sfgov.org/api/id/rqzj-sfat.json?$where=within_circle(location,%20${location.lat},%20${location.lng}`

      if (radius) {
        url = `${url},%20${radius})`
      }

      url = `${url}%20offset%20${offset}%20limit%20${limit}`
    }

    data = await fetch(url)

    return data.json()
  }

  async function getCountData() {
    const data = await fetch(
      'https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20%20|%3E%20select%20count(*)%20as%20__count_alias__&$$read_from_nbe=true&$$version=2.1',
    )

    return data.json()
  }

  let count:[{ __count_alias__: number; }] = [{ __count_alias__: 0 }]
  let rowsFromAPI
  let columnsFromAPI

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

  return { columns, rows: rowsFromAPI, count }  
}

export default getTableData
