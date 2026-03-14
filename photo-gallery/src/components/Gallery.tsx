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
    return (
      <section className="rounded-[2rem] border border-white/60 bg-white/75 p-10 text-center shadow-[0_25px_60px_rgba(75,55,33,0.1)] backdrop-blur">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-stone-200 border-t-stone-700" />
        <p className="mt-5 text-lg font-medium text-stone-700">
          Loading the gallery...
        </p>
        <p className="mt-2 text-sm text-stone-500">
          Pulling in a fresh set of frames for you.
        </p>
      </section>
    )

  if (error)
    return (
      <section className="rounded-[2rem] border border-rose-200 bg-rose-50/90 p-10 text-center shadow-[0_25px_60px_rgba(120,53,15,0.08)]">
        <p className="text-lg font-semibold text-rose-700">
          The gallery could not load right now.
        </p>
        <p className="mt-2 text-sm text-rose-600">{error}</p>
      </section>
    )

  return (
    <section className="rounded-[2rem] border border-white/60 bg-white/72 p-5 shadow-[0_25px_70px_rgba(75,55,33,0.1)] backdrop-blur sm:p-6 lg:p-8">
      <div className="mb-8 flex flex-col gap-5 border-b border-stone-200/80 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
            Discover
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-stone-900">
            Browse the collection
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base">
            Search by photographer and save the images that deserve a second look.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:min-w-[280px]">
          <div className="rounded-[1.25rem] border border-stone-200 bg-stone-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
              Visible
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-stone-900">
              {filteredPhotos.length}
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-stone-200 bg-stone-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
              Favorites
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-stone-900">
              {favourites.length}
            </p>
          </div>
        </div>
      </div>

      <label className="mb-8 block">
        <span className="mb-3 block text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
          Search artists
        </span>
        <input
          type="text"
          placeholder="Try Alejandro Escamilla..."
          value={search}
          onChange={handleSearch}
          className="w-full rounded-[1.25rem] border border-stone-200 bg-white/90 px-5 py-4 text-stone-900 outline-none transition duration-200 placeholder:text-stone-400 focus:border-stone-400 focus:ring-4 focus:ring-stone-200/70"
        />
      </label>

      {filteredPhotos.length === 0 ? (
        <div className="rounded-[1.75rem] border border-dashed border-stone-300 bg-stone-50/80 px-6 py-16 text-center">
          <p className="text-xl font-semibold text-stone-800">
            No photographers matched your search.
          </p>
          <p className="mt-3 text-sm text-stone-500">
            Try a broader name or clear the filter to explore the full set.
          </p>
        </div>
      ) : (
        <div
          className="grid gap-6
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3"
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
      )}
    </section>
  )
}
