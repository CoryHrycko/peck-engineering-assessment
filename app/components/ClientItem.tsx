'use client'

import Link from 'next/link'

const ClientItem = ({
  value,
  key,
  style,
  link,
}: {
  value: string
  key: number
  style: string
  link: string
}) => {
  return (
    <td className={style} key={key}>
      <Link href={`/truck/${link}`}>{value}</Link>
    </td>
  )
}

export default ClientItem
