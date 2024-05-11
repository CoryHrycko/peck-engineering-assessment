const getTruckData = async (truckId: string) => {
  //  https://data.sfgov.org/api/id/rqzj-sfat.json?$where=${truckId}
  // https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20search%20%27${truckId}%27%20order%20by%20%60objectid%60%20asc%20limit%20100&$$query_timeout_seconds=30
  try {
    const data = await fetch(
      `https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20search%20%27${truckId}%27%20order%20by%20%60objectid%60%20asc%20limit%20100&$$query_timeout_seconds=30`,
    )

    return data.json()
  } catch (error) {
    console.log(error)
  }
}

export default getTruckData
