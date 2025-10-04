import { getData } from "../utils/dataservices";
import Card from "./Card";

export default async function RecipesList({ query, limit }) {
  const data = await getData(`https://dummyjson.com/recipes?limit=${limit}`);
  let recipes = data.recipes;

  if (query) {
    const q = query.toLowerCase();
    recipes = recipes.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.ingredients.some((i) => i.toLowerCase().includes(q))
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        justifyContent: "center",
      }}
    >
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        recipes.map((p) => <Card key={p.id} item={p} type="recipes" />)
      )}
    </div>
  );
}
