export async function GET(req, { params }) {
  const res = await fetch("http://localhost:3000/api/v1/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  const post = posts.find((p) => p.id === params.id);
  if (!post) return Response.json({ error: "Post not found" }, { status: 404 });

  return Response.json(post);
}

export async function PATCH(req, { params }) {
  const body = await req.json();

  const res = await fetch(`http://localhost:3000/api/v1/posts/${params.id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return res;
}

export async function DELETE(req, { params }) {
  const res = await fetch(`http://localhost:3000/api/v1/posts/${params.id}`, {
    method: "DELETE",
  });
  return res;
}
