export async function GET(req, { params }) {
  const res = await fetch("http://localhost:3000/api/v1/recipes", {
    cache: "no-store",
  });
  const recipes = await res.json();

  const recipe = recipes.find((p) => p.id === params.id);
  if (!recipe)
    return Response.json({ error: "Recipe not found" }, { status: 404 });

  return Response.json(recipe);
}

export async function PATCH(req, { params }) {
  const body = await req.json();

  const res = await fetch(`http://localhost:3000/api/v1/recipes/${params.id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return res;
}

export async function DELETE(req, { params }) {
  const res = await fetch(`http://localhost:3000/api/v1/recipes/${params.id}`, {
    method: "DELETE",
  });
  return res;
}
