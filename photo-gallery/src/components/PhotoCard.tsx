import type { Photo } from "../types/photo"

interface Props {
  photo: Photo
  isFav: boolean
  toggleFav: (id: string) => void
}

export default function PhotoCard({
  photo,
  isFav,
  toggleFav
}: Props) {
  return (
    <article className="group overflow-hidden rounded-[1.45rem] border border-white/70 bg-[#f7f2eb] shadow-[0_20px_45px_rgba(60,38,18,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(60,38,18,0.18)] sm:rounded-[1.75rem]">
      <div className="relative overflow-hidden">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-72"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-stone-950/45 via-stone-950/0 to-transparent opacity-80" />

        <p className="absolute left-3 top-3 rounded-full border border-white/35 bg-black/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
          Photo #{photo.id}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 p-3.5 sm:gap-4 sm:p-4">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500 sm:text-xs sm:tracking-[0.24em]">
            Photographer
          </p>
          <p className="mt-1.5 truncate text-base font-semibold text-stone-900 sm:mt-2 sm:text-lg">
            {photo.author}
          </p>
        </div>

        <button
          onClick={() => toggleFav(photo.id)}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          title={isFav ? "Remove from favorites" : "Add to favorites"}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-200 sm:h-11 sm:w-11 ${
            isFav
              ? "border-rose-200 bg-rose-500 text-white shadow-[0_12px_24px_rgba(244,63,94,0.28)]"
              : "border-stone-300 bg-white text-stone-500 hover:border-rose-200 hover:text-rose-500"
          }`}
        >
          <span className="text-lg leading-none sm:text-xl">
            {isFav ? "\u2665" : "\u2661"}
          </span>
        </button>
      </div>
    </article>
  )
}
