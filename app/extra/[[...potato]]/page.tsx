import HackedComponent from "@/components/hacked-component";
import { revalidatePath } from "next/cache";
import {
  experimental_taintObjectReference,
  experimental_taintUniqueValue,
} from "react";

async function getData() {
  const keys = {
    apiKey: "119112114",
    secret: "112010110",
  };
  //experimental_taintObjectReference("API Keys were leaked!!!", keys);
  experimental_taintUniqueValue("Secret key was exposed", keys, keys.secret);
  return keys;
}

export default async function Extras({
  params,
}: {
  params: { potato: string[] };
}) {
  const data = await getData();

  return (
    <div className="flex flex-col gap-3 py-10">
      <h1 className="font-rubik text-6xl">Extras!</h1>
      <h2 className="font-roboto">So much more to learn!</h2>
      <h3 className="font-pretendard">세상에 이런 폰트가 나오다니 천재인듯</h3>

      <HackedComponent data={data} />
    </div>
  );
}
