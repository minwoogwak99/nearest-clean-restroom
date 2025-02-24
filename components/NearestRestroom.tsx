"use client"

import { useState, useEffect } from "react"
import { getBathrooms } from "@/lib/api"
import { calculateDistance } from "@/lib/utils"
import RestroomCard from "./RestroomCard"

interface Bathroom {
  id: string
  name: string
  address: string
  clean_score: string
  latitude: string
  longitude: string
}

export default function NearestRestroom() {
  const [nearestRestroom, setNearestRestroom] = useState<Bathroom | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const findNearestRestroom = async () => {
      try {
        const bathrooms = await getBathrooms()

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            const sortedBathrooms = bathrooms
              .filter((bathroom: Bathroom) => bathroom.clean_score && Number.parseFloat(bathroom.clean_score) >= 3.5)
              .sort((a: Bathroom, b: Bathroom) => {
                const distanceA = calculateDistance(
                  latitude,
                  longitude,
                  Number.parseFloat(a.latitude),
                  Number.parseFloat(a.longitude),
                )
                const distanceB = calculateDistance(
                  latitude,
                  longitude,
                  Number.parseFloat(b.latitude),
                  Number.parseFloat(b.longitude),
                )
                return distanceA - distanceB
              })

            if (sortedBathrooms.length > 0) {
              setNearestRestroom(sortedBathrooms[0])
            } else {
              setError("No clean restrooms found nearby.")
            }
            setLoading(false)
          },
          (error) => {
            setError("Unable to get your location. Please enable location services.")
            setLoading(false)
          },
        )
      } catch (error) {
        setError("An error occurred while fetching data.")
        setLoading(false)
      }
    }

    findNearestRestroom()
  }, [])

  if (loading) {
    return <div className="text-center">Loading...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return nearestRestroom ? (
    <RestroomCard restroom={nearestRestroom} />
  ) : (
    <div className="text-center">No restroom found.</div>
  )
}

