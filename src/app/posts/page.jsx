import SearchBar from "../../../components/SearchBar";
import Posts from "../../../components/Posts";

export const metadata = {
  title: "Post Page",
  description: "welcome to the Postpage",
};

export default function PostPage({ searchParams }) {
  const q = searchParams.q || "";

  return (
    <>
      <h1 style={{ marginLeft: "20px" }}>All Posts</h1>
      <SearchBar defaultValue={q} path="posts" />
      <Posts query={q} limit={10} />
    </>
  );
}
