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
    <div className="border rounded-lg overflow-hidden shadow">

      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-60 object-cover"
      />

      <div className="flex justify-between items-center p-3">

        <p className="text-sm font-medium">
          {photo.author}
        </p>

        <button
          onClick={() => toggleFav(photo.id)}
          className="text-xl"
        >
          {isFav ? "❤️" : "🤍"}
        </button>

      </div>
    </div>
  )
}
