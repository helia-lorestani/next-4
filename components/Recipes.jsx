import { Suspense } from "react";
import RecipesList from "./RecipesList";
import { CircularProgress } from "@mui/material";

export default function Recipes({ query, limit }) {
  return (
    <section>
      <h2 style={{ marginLeft: "20px" }}>Recipes</h2>
      <Suspense
        fallback={
          <div style={{ textAlign: "center", padding: 20 }}>
            <CircularProgress />
            <p>Loading recipes...</p>
          </div>
        }
      >
        <RecipesList query={query} limit={limit} />
      </Suspense>
    </section>
  );
}
