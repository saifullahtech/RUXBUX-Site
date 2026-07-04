const videos = [
  {
    id: "f29dhpkjE-I",
    title: "StackSmart organizer short video 1",
  },
  {
    id: "FouBah-wjTs",
    title: "StackSmart organizer short video 2",
  },
  {
    id: "9FvVf-MizuE",
    title: "StackSmart organizer short video 3",
  },
  {
    id: "pgTJGNXFArg",
    title: "StackSmart organizer short video 4",
  },
  {
    id: "6K2zIyG_uZE",
    title: "StackSmart organizer short video 5",
  },
];

export default function ProductVideosSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-[24px] font-extrabold leading-tight text-[#08264a] sm:text-[30px]">
            Watch StackSmart in Action
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm font-medium leading-6 text-[#4e5b6d] sm:text-base">
            Quick product clips showing how the organizer fits, stacks, and keeps wardrobes tidy.
          </p>
        </div>

        <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {videos.map((video) => (
            <article
              key={video.id}
              className="w-[72vw] max-w-[280px] shrink-0 snap-start rounded-2xl border border-[#d7e0ea] bg-white p-2 shadow-[0_18px_40px_rgba(9,33,61,0.12)] sm:w-auto sm:max-w-none"
            >
              <div className="rounded-xl bg-[#08264a] p-1.5">
                <div className="mx-auto mb-1.5 h-1 w-12 rounded-full bg-[#d8952f]" />
                <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[#08264a] ring-1 ring-white/15">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
