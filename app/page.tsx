export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-slate-100 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 dark:bg-gray-700">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg ring ring-transparent transition-shadow *:outline-none has-[.peer]:bg-green-100 has-[:invalid]:ring has-[:invalid]:ring-red-100 md:flex-row dark:bg-gray-600">
        <input
          type="email"
          placeholder="Search here..."
          className="peer h-10 w-full rounded-full bg-gray-200 pl-5 ring ring-transparent transition-shadow placeholder:drop-shadow focus:ring-orange-500 focus:ring-offset-2 invalid:focus:ring-red-500"
          required
        />
        <span className="hidden font-medium text-red-500 peer-invalid:block">
          Email is required
        </span>
        <button className="rounded-full bg-gradient-to-tr from-cyan-500 via-yellow-300 to-purple-400 py-2 font-medium text-white transition-transform focus:scale-90 active:scale-90 peer-invalid:text-red-500 md:px-5">
          Search
        </button>
      </div>
    </main>
  );
}
