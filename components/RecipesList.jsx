import { getData } from "../utils/dataservices";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("./Card"), {
  loading: () => <h2>loading card...</h2>,
});

export default async function RecipesList({ query, limit }) {
  const data = await getData(
    `http://localhost:3000/api/v1/recipes?[id]/limit=${limit}`
  );

  let recipes = data;

  if (query) {
    const q = query.toLowerCase();
    recipes = recipes.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.ingredients.toLowerCase().includes(q)
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
