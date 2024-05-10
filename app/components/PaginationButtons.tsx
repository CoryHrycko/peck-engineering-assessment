'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, MouseEvent } from 'react'

const PaginationButtons = ({ count = 0 }: { count: number }) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  const urlOffset = params.get('offset')
  const [offset, setOffset] = useState(urlOffset ? parseInt(urlOffset) : 0)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (offset === 0 && event.currentTarget.textContent === 'Previous') return
    if (offset > count && event.currentTarget.textContent === 'Next') return

    if (event.currentTarget.textContent === 'Previous') {
      params.set('offset', (offset - 100).toString())
      setOffset(offset - 100)
    } else {
      params.set('offset', (offset + 100).toString())
      setOffset(offset + 100)
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Previous
      </button>
      <button
        onClick={handleClick}
        className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
      </button>
    </div>
  )
}

export default PaginationButtons
