async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 100000));
}

export default async function Life() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-4xl text-white">Life!</h1>
    </div>
  );
}
