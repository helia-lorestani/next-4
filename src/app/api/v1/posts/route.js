export let posts = [
  {
    id: "1",
    title: "His mother had always taught him.",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    views: "200",
    userId: "121",
  },
  {
    id: "2",
    title: "Dave watched as the forest burned up on the hill.",
    body: " Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    views: "2000",
    userId: "77",
  },
  {
    id: "3",
    title: "This is important to remember.",
    views:
      "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
    views: "168",
    userId: "70",
  },
];

export async function GET() {
  return Response.json(posts);
}

export async function POST(req) {
  const body = await req.json();

  const lastId = posts.length > 0 ? Number(posts[posts.length - 1].id) : 0;
  const newPost = { ...body, id: String(lastId + 1) };

  posts.push(newPost);

  return Response.json(newPost);
}

export async function DELETE(req) {
  const { id } = await req.json();
  posts = posts.filter((u) => u.id !== id);

  return Response.json(posts[index]);
}

export async function PATCH(req) {
  const body = await req.json();
  const index = posts.findIndex((u) => u.id === body.id);

  if (index === -1) {
    return Response.json("error");
  }

  posts[index] = { ...posts[index], ...body };

  return Response.json(posts[index]);
}
