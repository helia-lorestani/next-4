export let users = [
  {
    id: "1",
    firstName: "Ali",
    lastName: "Ahmadi",
    username: "ali_ahmadi",
    password: "Alipass",
    email: "ali@gmail.com",
    age: "20",
    gender: "male",
    phone: "+81 965-431-3024",
  },
  {
    id: "2",
    firstName: "Kimia",
    lastName: "Moradi",
    username: "kimia_moradi",
    password: "Kimiapass",
    email: "kimia@gmail.com",
    age: "24",
    gender: "female",
    phone: "+81 965-879-3024",
  },
  {
    id: "3",
    firstName: "Nastaran",
    lastName: "Hasani",
    username: "nastaran_hasani",
    password: "Nastaranpass",
    email: "nastaran@gmail.com",
    age: "30",
    gender: "female",
    phone: "+81 145-879-3024",
  },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(req) {
  const body = await req.json();

  const lastId = users.length > 0 ? Number(users[users.length - 1].id) : 0;
  const newUser = { ...body, id: String(lastId + 1) };

  users.push(newUser);

  return Response.json(newUser);
}

export async function DELETE(req) {
  const { id } = await req.json();
  users = users.filter((u) => u.id !== id);

  return Response.json(users[index]);
}

export async function PATCH(req) {
  const body = await req.json();
  const index = users.findIndex((u) => u.id === body.id);

  if (index === -1) {
    return Response.json("error");
  }

  users[index] = { ...users[index], ...body };

  return Response.json(users[index]);
}
