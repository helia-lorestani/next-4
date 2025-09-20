export let recipes = [
  {
    id: "1",
    name: "Classic Margherita Pizza",
    ingredients: "Pizza dough - Tomato sauce - Fresh mozzarella cheese",
    instructions:
      "Preheat the oven to 475°F (245°C) - Roll out the pizza dough and spread tomato sauce evenly - Top with slices of fresh mozzarella and fresh basil leaves",
    userId: "166",
  },
  {
    id: "2",
    name: "Vegetarian Stir-Fry",
    ingredients: "Tofu, cubed - Broccoli florets - Carrots, sliced",
    instructions:
      "In a wok, heat sesame oil over medium-high heat - Add minced ginger and garlic, sauté until fragrant",
    userId: "122",
  },
  {
    id: "3",
    name: "Chocolate Chip Cookies",
    ingredients: "All-purpose flour - Butter, softened - Brown sugar",
    instructions:
      "Preheat the oven to 350°F (175°C) - In a bowl, cream together softened butter, brown sugar, and white sugar - Beat in eggs one at a time, then stir in vanilla extract.",
    userId: "76",
  },
];

export async function GET() {
  return Response.json(recipes);
}

export async function POST(req) {
  const body = await req.json();

  const lastId =
    recipes.length > 0 ? Number(recipes[recipes.length - 1].id) : 0;
  const newRecipe = { ...body, id: String(lastId + 1) };

  recipes.push(newRecipe);

  return Response.json(newRecipe);
}

export async function DELETE(req) {
  const { id } = await req.json();
  recipes = recipes.filter((u) => u.id !== id);

  return Response.json(recipes[index]);
}

export async function PATCH(req) {
  const body = await req.json();
  const index = recipes.findIndex((u) => u.id === body.id);

  if (index === -1) {
    return Response.json("error");
  }

  recipes[index] = { ...recipes[index], ...body };

  return Response.json(recipes[index]);
}
