const PingPage = () => {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center gap-4 bg-slate-100 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 dark:bg-gray-700">
        <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg dark:bg-gray-600">
          {["Nico", "Me", "You", "Yourself"].map((person, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="size-10 rounded-full bg-blue-400" />
              <span className="text-lg font-medium">{person}</span>
              <div className="relative flex size-6 items-center justify-center rounded-full bg-red-500 text-white">
                <span className="z-10">{index}</span>
                <div className="absolute size-6 animate-ping rounded-full bg-red-500" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default PingPage;
