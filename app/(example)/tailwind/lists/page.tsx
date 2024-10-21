// 3.8 Lists and Animations Example

const ListsPage = () => {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center gap-4 bg-slate-100 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 dark:bg-gray-700">
        <h3 className="font-semibold">First Child & Last Child</h3>
        <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg dark:bg-gray-600">
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

        <h3 className="font-semibold">Even & Odd Child</h3>
        <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg dark:bg-gray-600">
          {["Nico", "Me", "You", "Yourself"].map((person, index) => (
            <div
              key={index}
              className="flex items-center gap-5 rounded-full p-2 odd:bg-gray-200 even:bg-slate-200"
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
    </>
  );
};

export default ListsPage;
