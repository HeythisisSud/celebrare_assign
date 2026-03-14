import Gallery from "./components/Gallery"

function App() {
  return (
    <main className="relative overflow-hidden px-3 py-4 sm:px-6 sm:py-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="ambient-grid" />
      </div>

      <section className="relative mx-auto max-w-6xl">
        <div className="mobile-hero mb-4 rounded-4xl border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.82),rgba(250,241,231,0.96))] p-4 shadow-[0_24px_70px_rgba(75,55,33,0.12)] backdrop-blur sm:mb-8 sm:rounded-[2.5rem] sm:p-6 md:p-10">
          <p className="mb-4 inline-flex rounded-full border border-stone-200/80 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            Curated moments
          </p>

          <div className="grid gap-4 sm:gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-[2.45rem] font-semibold leading-[0.88] tracking-[-0.06em] text-stone-900 sm:text-5xl sm:leading-[0.95] lg:text-6xl">
                A softer, editorial home for your photo collection.
              </h1>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-6 text-stone-600 sm:mt-5 sm:text-lg sm:leading-7">
                Browse striking imagery, filter by photographer, and keep the frames
                you love within reach.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
              <div className="rounded-[1.6rem] border border-stone-200/60 bg-stone-950 px-4 py-4 text-left text-stone-50 shadow-[0_18px_35px_rgba(28,25,23,0.18)] sm:rounded-3xl sm:px-5 sm:py-5">
                <p className="text-xs uppercase tracking-[0.18em] text-stone-400 sm:text-sm sm:tracking-[0.24em]">
                  Moodboard
                </p>
                <p className="mt-2 text-xl font-medium sm:text-2xl">Soft light, quiet luxury</p>
              </div>

              <div className="rounded-[1.6rem] border border-stone-200/80 bg-[linear-gradient(135deg,rgba(255,248,242,0.98),rgba(245,233,221,0.9))] px-4 py-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:rounded-3xl sm:px-5 sm:py-5">
                <p className="text-xs uppercase tracking-[0.18em] text-stone-500 sm:text-sm sm:tracking-[0.24em]">
                  Mobile feel
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-700 sm:text-base sm:leading-7">
                  Designed to read like a small editorial app, not a squeezed desktop page.
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
