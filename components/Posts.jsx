import { Suspense } from "react";
import PostsList from "./PostList";
import { CircularProgress } from "@mui/material";

export default function Posts({ query, limit }) {
  return (
    <section>
      <h2 style={{ marginLeft: "20px" }}>Posts</h2>
      <Suspense
        fallback={
          <div style={{ textAlign: "center", padding: 20 }}>
            <CircularProgress />
            <p>Loading posts...</p>
          </div>
        }
      >
        <PostsList query={query} limit={limit} />
      </Suspense>
    </section>
  );
}
