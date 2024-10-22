const GroupPage = () => {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center gap-4 bg-slate-100 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 dark:bg-gray-700">
        <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg dark:bg-gray-600">
          <div className="group flex flex-col">
            <span className="group-focus-within:text-blue-500 ">
              Focus Input
            </span>
            <input
              className="w-full bg-gray-100"
              placeholder="Write your email"
            />
            <span className="hidden text-xs group-focus-within:block">
              Make sure it is a valid email...
            </span>
            <button>Submit</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default GroupPage;
