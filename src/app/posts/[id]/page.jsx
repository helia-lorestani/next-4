import React from "react";
import { getData } from "../../../../utils/dataservices";

export async function generateMetadata({ params }) {
  return {
    title: `Post - ${params.id}`,
    description: " postpage",
  };
}

export default async function PostDetail({ params }) {
  const { id } = params;
  const post = await getData(`https://dummyjson.com/posts/${id}`, {
    cache: "no-store",
  });

  return (
    <>
      <div className="card-id">
        <h4>Title: {post.title}</h4>
        <p>Body: {post.body}</p>

        <p>Views: {post.views}</p>
        <p>UserId: {post.userId}</p>
      </div>
    </>
  );
}
