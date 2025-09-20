import Image from "next/image";

export default async function RecipeDetails({ params }) {
  const res = await fetch(`http://localhost:3000/api/v1/recipes/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) return <p>Recipe not found</p>;

  const recipes = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recipe Details</h2>
      <div className="card-id">
        <h4>Name: {recipes.name}</h4>
        <p>ingredients: {recipes.ingredients}</p>
        <p>instructions: {recipes.instructions}</p>
        <p>UserId: {recipes.userId}</p>
        <Image
          src={"/recipes.svg"}
          alt="recipse image"
          width={310}
          height={180}
          style={{ position: "relative", left: "-30px" }}
        />
      </div>
    </div>
  );
}
