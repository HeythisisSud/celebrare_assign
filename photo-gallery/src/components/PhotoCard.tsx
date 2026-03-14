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
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#f7f2eb] shadow-[0_20px_45px_rgba(60,38,18,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(60,38,18,0.18)]">
      <div className="relative overflow-hidden">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/45 via-stone-950/0 to-transparent opacity-80" />

        <p className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
          Photo #{photo.id}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 p-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Photographer
          </p>
          <p className="mt-2 text-lg font-semibold text-stone-900">
            {photo.author}
          </p>
        </div>

        <button
          onClick={() => toggleFav(photo.id)}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          title={isFav ? "Remove from favorites" : "Add to favorites"}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-200 ${
            isFav
              ? "border-rose-200 bg-rose-500 text-white shadow-[0_12px_24px_rgba(244,63,94,0.28)]"
              : "border-stone-300 bg-white text-stone-500 hover:border-rose-200 hover:text-rose-500"
          }`}
        >
          <span className="text-xl leading-none">
            {isFav ? "\u2665" : "\u2661"}
          </span>
        </button>
      </div>
    </article>
  )
}
