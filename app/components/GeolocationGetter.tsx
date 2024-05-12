'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { use, useEffect, useState } from 'react'

function GeolocationGetter() {
  const [position, setPosition] = useState<GeolocationPosition | undefined>()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  const isInt = (value: any) => {
    let x;
    if (isNaN(value)) {
      return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
  }

  const resetRadious = () => {
    let radius = prompt('Please enter a radius.(enter 5000000 if not sure)')
    if (radius &&  isInt(radius)) {
    {
      params.set('radius', radius)
      replace(`${pathname}?${params.toString()}`)
    }
  }
}

  const handleResetRadius = () => {
    resetRadious()
  }

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
  
    if (!params.get('radius')) {
      resetRadious()
    }
  }, [])

  if (!position) {
    return <p>Geolocation may not supported by your browser. Searching...</p>
  }

  return (
    <div>
      {position && (
        <>
          <p>
            Latitude: {position.coords.latitude} Longitude:{' '}
            {position.coords.longitude}{' '}
            <button
              onClick={() => {
                handleResetRadius()
              }}>
              Reset Radius
            </button>
          </p>
        </>
      )}
    </div>
  )
}

export default GeolocationGetter
