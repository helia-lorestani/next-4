import { getData } from "../utils/dataservices";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("./Card"), {
  loading: () => <h2>loading card...</h2>,
});

export default async function UsersList({ query, limit }) {
  const data = await getData(
    `http://localhost:3000/api/v1/users?[id]/limit=${limit}`
  );

  let users = data;

  if (query) {
    const q = query.toLowerCase();
    users = users.filter(
      (p) =>
        p.firstName.toLowerCase().includes(q) ||
        p.lastName.toLowerCase().includes(q) ||
        p.email.toLowerCase().includes(q) ||
        p.password.toLowerCase().includes(q) ||
        p.username.toLowerCase().includes(q)
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
      {users.length === 0 ? (
        <p>No posts found</p>
      ) : (
        users.map((p) => <Card key={p.id} item={p} type="users" />)
      )}
    </div>
  );
}
