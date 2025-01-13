export default function Extras({ params }: { params: { potato: string[] } }) {
  return (
    <div className="flex flex-col gap-3 py-10">
      <h1 className="font-rubik text-6xl">Extras!</h1>
      <h2 className="font-roboto">So much more to learn!</h2>
      <h3 className="font-pretendard">세상에 이런 폰트가 나오다니 천재인듯</h3>
    </div>
  );
}
