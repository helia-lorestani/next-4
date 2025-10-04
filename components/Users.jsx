import { Suspense } from "react";
import UsersList from "./UserList";
import { CircularProgress } from "@mui/material";

export default function User({ query, limit }) {
  return (
    <section>
      <h2 style={{ marginLeft: "20px" }}>Users</h2>
      <Suspense
        fallback={
          <div style={{ textAlign: "center", padding: 20 }}>
            <CircularProgress />
            <p>Loading users...</p>
          </div>
        }
      >
        <UsersList query={query} limit={limit} />
      </Suspense>
    </section>
  );
}
