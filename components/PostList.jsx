import { getData } from "../utils/dataservices";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("./Card"), {
  loading: () => <h2>loading card...</h2>,
});

export default async function PostsList({ query, limit }) {
  const data = await getData(
    `http://localhost:3000/api/v1/posts?[id]/limit=${limit}`
  );

  let posts = data;

  if (query) {
    const q = query.toLowerCase();
    posts = posts.filter((p) => p.title.toLowerCase().includes(q));
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        justifyContent: "center",
      }}
    >
      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        posts.map((p) => <Card key={p.id} item={p} type="posts" />)
      )}
    </div>
  );
}
