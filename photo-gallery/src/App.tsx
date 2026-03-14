import Gallery from "./components/Gallery"

function App() {
  return (
    <main className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
      </div>

      <section className="relative mx-auto max-w-6xl">
        <div className="mb-8 rounded-4xl border border-white/55 bg-white/70 p-6 shadow-[0_30px_80px_rgba(75,55,33,0.12)] backdrop-blur md:p-10">
          <p className="mb-4 inline-flex rounded-full border border-stone-200 bg-stone-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            Curated moments
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-stone-900 sm:text-6xl">
                A softer, editorial home for your photo collection.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
                Browse striking imagery, filter by photographer, and keep the frames
                you love within reach.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl border border-stone-200/80 bg-stone-950 px-5 py-5 text-left text-stone-50">
                <p className="text-sm uppercase tracking-[0.24em] text-stone-400">
                  Mood
                </p>
                <p className="mt-2 text-2xl font-medium">Gallery Lounge</p>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-[linear-gradient(135deg,rgba(248,240,232,0.95),rgba(255,255,255,0.92))] px-5 py-5 text-left">
                <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
                  Style note
                </p>
                <p className="mt-2 text-base leading-7 text-stone-700">
                  Warm neutrals, airy spacing, and immersive photography.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Gallery />
      </section>
    </main>
  )
}

export default App
