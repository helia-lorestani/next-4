"use server";

import { revalidateTag } from "next/cache";
import { v4 as uuid } from "uuid";

export async function postRecipe(recipe) {
  await fetch("http://localhost:3000/api/v1/recipes", {
    method: "POST",
    body: JSON.stringify({ ...recipe, id: uuid() }),
  });
  revalidateTag("recipe");
}

export async function patchRecipe(id, updatedData) {
  await fetch("http://localhost:3000/api/v1/recipes", {
    method: "PATCH",
    body: JSON.stringify({ id, ...updatedData }),
  });
  revalidateTag("recipe");
}

export async function deleteRecipe(id) {
  await fetch("http://localhost:3000/api/v1/recipes", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  revalidateTag("recipe");
}
