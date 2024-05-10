'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, MouseEvent, use, useEffect } from 'react'

const PaginationButtons = ({
  count,
}: {
  count: [{ __count_alias__: number }]
}) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  const urlOffset = params.get('offset')
  const [offset, setOffset] = useState(urlOffset ? parseInt(urlOffset) : 0)
  const [previousDisabled, setPreviousDisabled] = useState(offset === 0)
  const [nextDisabled, setNextDisabled] = useState(false)

  useEffect(() => {
    const roundCount = Math.floor(count[0].__count_alias__ / 100) ?? 0
    const roundOffset = Math.floor(offset / 100) ?? 0

    if (offset === 0) setPreviousDisabled(true)
    else setPreviousDisabled(false)
    console.log(count, offset, roundCount)
    if (roundOffset === roundCount) setNextDisabled(true)
    else setNextDisabled(false)
  }, [offset, count])

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
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
        disabled={!!previousDisabled}
        onClick={handleClick}
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:disabled:bg-gray-700 dark:hover:disabled:text-gray-400 hover:disabled:bg-gray-100 hover:disabled:text-gray-500 disabled:cursor-not-allowed">
        Previous
      </button>
      <button
        disabled={!!nextDisabled}
        onClick={handleClick}
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:disabled:bg-gray-700 dark:hover:disabled:text-gray-400 hover:disabled:bg-gray-100 hover:disabled:text-gray-500 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  )
}

export default PaginationButtons
