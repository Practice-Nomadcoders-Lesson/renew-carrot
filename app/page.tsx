export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-slate-100 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 dark:bg-gray-700">
      <div className="flex w-full max-w-screen-sm flex-col gap-4 rounded-3xl bg-white p-5 shadow-lg dark:bg-gray-600">
        {["Nico", "Me", "You", "Yourself"].map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b-2 pb-5 last:border-0 last:pb-0"
          >
            <div className="size-10 rounded-full bg-blue-400" />
            <span className="text-lg font-medium">{person}</span>
            <div className="flex size-6 items-center justify-center rounded-full bg-red-500 text-white">
              <span>{index}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
