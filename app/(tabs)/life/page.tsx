import db from "@/lib/db";

async function getPosts() {
  const posts = await db.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      views: true,
      created_at: true,
      _count: {
        select: {
          comments: true,
          likes: true,
        },
      },
    },
  });

  return posts;
}

export const metadata = {
  title: "동네생활",
};

export default async function Life() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div>
      <h1 className="text-4xl text-white">Life!</h1>
    </div>
  );
}
