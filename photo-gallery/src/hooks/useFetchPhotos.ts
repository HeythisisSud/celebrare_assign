import { useState, useEffect } from "react"
import { Photo } from "../types/photo"

const API_URL = "https://picsum.photos/v2/list?limit=30"

export default function useFetchPhotos() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(API_URL)

        if (!res.ok) {
          throw new Error("Failed to fetch photos")
        }

        const data: Photo[] = await res.json()
        setPhotos(data)

      } catch (err) {
        setError((err as Error).message)

      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  return { photos, loading, error }
}
