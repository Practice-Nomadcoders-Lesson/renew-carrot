import { cn } from "@/lib/utils";

const EmptyPage = () => {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center gap-4 bg-slate-100 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 dark:bg-gray-700">
        <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg dark:bg-gray-600">
          {["Nico", "Me", "You", "Yourself", ""].map((person, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="size-10 rounded-full bg-blue-400" />
              <span
                className={cn(
                  "text-lg font-medium",
                  "empty:h-5 empty:w-24 empty:animate-pulse empty:rounded-full empty:bg-gray-300",
                )}
              >
                {person}
              </span>
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

export default EmptyPage;
