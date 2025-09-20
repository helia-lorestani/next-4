"use server";

import { revalidateTag } from "next/cache";
import { v4 as uuid } from "uuid";

export async function postPost(post) {
  await fetch("http://localhost:3000/api/v1/posts", {
    method: "POST",
    body: JSON.stringify({ ...post, id: uuid() }),
  });
  revalidateTag("post");
}

export async function patchPost(id, updatedData) {
  await fetch("http://localhost:3000/api/v1/posts", {
    method: "PATCH",
    body: JSON.stringify({ id, ...updatedData }),
  });
  revalidateTag("post");
}

export async function deletePost(id) {
  await fetch("http://localhost:3000/api/v1/posts", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  revalidateTag("post");
}
