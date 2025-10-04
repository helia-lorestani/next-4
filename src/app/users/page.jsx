import SearchBar from "../../../components/SearchBar";
import Users from "../../../components/Users";

export const metadata = {
  title: "User Page",
  description: "welcome to the userpage",
};

export default function UsersPage({ searchParams }) {
  const q = searchParams.q || "";

  return (
    <>
      <h1 style={{ marginLeft: "20px" }}>All Users</h1>
      <SearchBar defaultValue={q} path="users" />
      <Users query={q} limit={10} />
    </>
  );
}
