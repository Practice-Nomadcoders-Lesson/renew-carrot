import { revalidatePath } from "next/cache";

async function getData() {
  const data = await fetch(
    "https://nomad-movies.nomadcoders.workers.dev/movies",
  );
}

export default async function Extras({
  params,
}: {
  params: { potato: string[] };
}) {
  await getData();

  const action = async () => {
    "use server";
    revalidatePath("/extra");
  };

  return (
    <div className="flex flex-col gap-3 py-10">
      <h1 className="font-rubik text-6xl">Extras!</h1>
      <h2 className="font-roboto">So much more to learn!</h2>
      <h3 className="font-pretendard">세상에 이런 폰트가 나오다니 천재인듯</h3>
      <form action={action}>
        <button className="rounded-md border px-2 uppercase">revalidate</button>
      </form>
    </div>
  );
}
