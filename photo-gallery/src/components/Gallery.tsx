import { useReducer, useState, useMemo, useCallback } from "react"
import useFetchPhotos from "../hooks/useFetchPhotos"
import { favouritesReducer, initialState } from "../reducer/favouritesReducer"
import PhotoCard from "./PhotoCard"
import type { Photo } from "../types/photo"

export default function Gallery() {

  const { photos, loading, error } = useFetchPhotos()

  const [search, setSearch] = useState<string>("")

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    initialState
  )

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    []
  )

  const filteredPhotos = useMemo((): Photo[] => {

    return photos.filter(photo =>
      photo.author.toLowerCase()
        .includes(search.toLowerCase())
    )

  }, [photos, search])

  const toggleFav = (id: string) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: id
    })
  }

  if (loading)
    return <p className="text-center mt-10">Loading...</p>

  if (error)
    return <p className="text-center text-red-500">{error}</p>

  return (
    <div className="p-6">

      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={handleSearch}
        className="border p-2 w-full mb-6"
      />

      <div
        className="grid gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4"
      >

        {filteredPhotos.map(photo => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFav={favourites.includes(photo.id)}
            toggleFav={toggleFav}
          />
        ))}

      </div>

    </div>
  )
}
