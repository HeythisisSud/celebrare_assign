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
      <section className="rounded-[1.8rem] border border-white/70 bg-white/78 p-7 text-center shadow-[0_25px_60px_rgba(75,55,33,0.1)] backdrop-blur sm:rounded-4xl sm:p-10">
        <div className="mx-auto h-11 w-11 animate-spin rounded-full border-4 border-stone-200 border-t-stone-700 sm:h-12 sm:w-12" />
        <p className="mt-5 text-base font-medium text-stone-700 sm:text-lg">
          Loading the gallery...
        </p>
        <p className="mt-2 text-sm leading-6 text-stone-500">
          Pulling in a fresh set of frames for you.
        </p>
      </section>
    )

  if (error)
    return (
      <section className="rounded-[1.8rem] border border-rose-200 bg-rose-50/90 p-7 text-center shadow-[0_25px_60px_rgba(120,53,15,0.08)] sm:rounded-4xl sm:p-10">
        <p className="text-base font-semibold text-rose-700 sm:text-lg">
          The gallery could not load right now.
        </p>
        <p className="mt-2 text-sm text-rose-600">{error}</p>
      </section>
    )

  return (
    <section className="rounded-[1.9rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(250,242,234,0.92))] p-3 shadow-[0_25px_70px_rgba(75,55,33,0.1)] backdrop-blur sm:rounded-4xl sm:p-6 lg:p-8">
      <div className="mb-5 rounded-[1.6rem] border border-white/70 bg-white/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:mb-8 sm:rounded-[1.8rem] sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 sm:text-sm sm:tracking-[0.28em]">
            Discover
          </p>
          <h2 className="mt-2 text-[1.8rem] font-semibold tracking-[-0.05em] text-stone-900 sm:text-3xl">
            Browse the collection
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base">
            Search by photographer and save the images that deserve a second look.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:min-w-70 sm:gap-3">
          <div className="rounded-[1.2rem] border border-stone-200/80 bg-white/80 px-3 py-3 shadow-[0_12px_25px_rgba(120,98,76,0.06)] sm:rounded-[1.25rem] sm:px-4 sm:py-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500 sm:text-xs sm:tracking-[0.22em]">
              Visible
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-stone-900 sm:text-3xl">
              {filteredPhotos.length}
            </p>
          </div>

          <div className="rounded-[1.2rem] border border-stone-200/80 bg-white/80 px-3 py-3 shadow-[0_12px_25px_rgba(120,98,76,0.06)] sm:rounded-[1.25rem] sm:px-4 sm:py-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500 sm:text-xs sm:tracking-[0.22em]">
              Favorites
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-stone-900 sm:text-3xl">
              {favourites.length}
            </p>
          </div>
        </div>
        </div>
      </div>

      <label className="mb-5 block sm:mb-8">
        <span className="mb-3 block px-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-500 sm:px-0 sm:text-sm sm:tracking-[0.24em]">
          Search artists
        </span>
        <div className="rounded-[1.35rem] border border-white/80 bg-white/85 p-2 shadow-[0_18px_35px_rgba(95,74,52,0.08)] backdrop-blur">
          <div className="flex items-center gap-3 rounded-2xl bg-[#fbf6f1] px-4 py-3.5 ring-1 ring-stone-200/70 sm:px-5 sm:py-4">
            <span className="text-base text-stone-400">{"\u2315"}</span>
            <input
              type="text"
              placeholder="Try Alejandro Escamilla..."
              value={search}
              onChange={handleSearch}
              className="w-full bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400 sm:text-base"
            />
          </div>
        </div>
      </label>

      {filteredPhotos.length === 0 ? (
        <div className="rounded-[1.6rem] border border-dashed border-stone-300 bg-stone-50/80 px-5 py-12 text-center sm:rounded-[1.75rem] sm:px-6 sm:py-16">
          <p className="text-lg font-semibold text-stone-800 sm:text-xl">
            No photographers matched your search.
          </p>
          <p className="mt-3 text-sm text-stone-500">
            Try a broader name or clear the filter to explore the full set.
          </p>
        </div>
      ) : (
        <div
          className="grid gap-4
          grid-cols-1
          sm:gap-6
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
