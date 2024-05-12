import { Column } from './Table'

const cleanForMainTable = (rows: any[], columns: Column[]) => {
  const mainTableKeys: string[] = [
    'objectid',
    'applicant',
    'facilitytype',
    'locationdescription',
    'address',
    'status',
  ]
  const mainTableKeys2: string[] = [
    'locationid',
    'Applicant',
    'FacilityType',
    'LocationDescription',
    'Address',
    'Status',
  ]

  const mainTableRows = rows.map((map: any) => {
    return mainTableKeys.reduce(
      (acc, key) => {
        if (map.hasOwnProperty(key)) {
          acc[key] = map[key]
        }
        return acc
      },
      {} as { [key: string]: number | string | boolean },
    )
  })

  const mainTableColumns = columns.filter((obj: any) =>
    mainTableKeys2.includes(obj.id),
  )

  return { mainTableColumns, mainTableRows, mainTableKeys }
}

export default cleanForMainTable
