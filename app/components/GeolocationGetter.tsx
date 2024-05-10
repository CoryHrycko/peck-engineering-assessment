'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

function GeolocationGetter() {
  const [position, setPosition] = useState<GeolocationPosition | undefined>()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  useEffect(() => {
    const success = (pos: GeolocationPosition) => {
      setPosition(pos)
      if (pos) {
        params.set('lat', pos.coords.latitude.toString())
        params.set('lng', pos.coords.longitude.toString())
        replace(`${pathname}?${params.toString()}`)
      }
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <div>
      {position && (
        <p>
          Latitude: {position.coords.latitude} Longitude:{' '}
          {position.coords.longitude}
        </p>
      )}
      {!position && (
        <p>Geolocation is not supported by your browser. Searching...</p>
      )}
    </div>
  )
}

export default GeolocationGetter