"use server";

import { revalidateTag } from "next/cache";
import { v4 as uuid } from "uuid";

export async function postUser(user) {
  await fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    body: JSON.stringify({ ...user, id: uuid() }),
  });
  revalidateTag("users");
}

export async function patchUser(id, updatedData) {
  await fetch("http://localhost:3000/api/v1/users", {
    method: "PATCH",
    body: JSON.stringify({ id, ...updatedData }),
  });
  revalidateTag("users");
}

export async function deleteUser(id) {
  await fetch("http://localhost:3000/api/v1/users", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  revalidateTag("users");
}
