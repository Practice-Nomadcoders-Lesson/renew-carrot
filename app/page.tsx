export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-slate-100 p-5 dark:bg-gray-700">
      <div className="w-full max-w-screen-sm rounded-3xl bg-white p-5 shadow-lg dark:bg-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-semibold text-gray-600 dark:text-gray-300">
              In transit
            </span>
            <span className="-mb-1 text-4xl font-semibold dark:text-white">
              Coolblue
            </span>
          </div>
          <div className="size-12 rounded-full bg-orange-400" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="cursor-pointer rounded-full bg-green-400 px-2.5 py-1.5 text-xs font-medium uppercase text-white transition hover:scale-125 hover:bg-green-500">
            Today
          </span>
          <span className="dark:text-gray-100">9:30-10:30</span>
        </div>
        <div className="relative">
          <div className="absolute h-2 w-full rounded-full bg-gray-200" />
          <div className="absolute h-2 w-2/3 rounded-full bg-green-400" />
        </div>
        <div className="mt-5 flex items-center justify-between text-gray-600 dark:text-gray-300">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>Intransit</span>
          <span className="text-gray-400 dark:text-gray-500">Delivered</span>
        </div>
      </div>
    </main>
  );
}
