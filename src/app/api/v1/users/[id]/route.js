export async function GET(req, { params }) {
  const res = await fetch("http://localhost:3000/api/v1/users", {
    cache: "no-store",
  });
  const users = await res.json();

  const user = users.find((p) => p.id === params.id);
  if (!user) return Response.json({ error: "User not found" }, { status: 404 });

  return Response.json(user);
}

export async function PATCH(req, { params }) {
  const body = await req.json();

  const res = await fetch(`http://localhost:3000/api/v1/users/${params.id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return res;
}

export async function DELETE(req, { params }) {
  const res = await fetch(`http://localhost:3000/api/v1/users/${params.id}`, {
    method: "DELETE",
  });
  return res;
}
