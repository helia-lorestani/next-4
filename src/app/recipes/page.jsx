import SearchBar from "../../../components/SearchBar";
import Recipes from "../../../components/Recipes";

export const metadata = {
  title: "Recipes Page",
  description: "welcome to the recipespage",
};

export default function RecipesPage({ searchParams }) {
  const q = searchParams.q || "";

  return (
    <>
      <h1 style={{ marginLeft: "20px" }}>All Recipes</h1>
      <SearchBar defaultValue={q} path="recipes" />
      <Recipes query={q} limit={10} />
    </>
  );
}
