export default async function UserDetails({ params }) {
  const res = await fetch(`http://localhost:3000/api/v1/users/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) return <p>User not found</p>;

  const user = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Details</h2>

      <>
        <div className="card-id">
          <h4>
            User: {user.firstName} {user.lastName}
          </h4>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Phone: {user.phone}</p>
        </div>
      </>
    </div>
  );
}
