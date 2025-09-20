"use client";
import { useState, useEffect } from "react";
import { postUser, patchUser, deleteUser } from "../../../../utils/userAction";
import { v4 as uuid } from "uuid";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    age: "",
    gender: "",
    phone: "",
  });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/users?limit=1", { cache: "no-store" })
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const handleAdd = async () => {
    if (!newUser.firstName || !newUser.lastName) return;

    const newUserWithId = { ...newUser, id: uuid() };
    await postUser(newUserWithId);

    setUsers((prev) => [...prev, newUserWithId]);
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      username: "",
      age: "",
      gender: "",
      phone: "",
    });
  };

  const handleEdit = async (id) => {
    await patchUser(id, editing);
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...editing } : u))
    );
    setEditing(null);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel – Manage Users</h2>

      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            value={newUser.firstName}
            type="text"
            id="firstname"
            onChange={(e) =>
              setNewUser({ ...newUser, firstName: e.target.value })
            }
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            value={newUser.lastName}
            type="text"
            id="lastname"
            onChange={(e) =>
              setNewUser({ ...newUser, lastName: e.target.value })
            }
            placeholder="Last Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            value={newUser.email}
            type="email"
            id="email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            placeholder="Email"
          />
        </div>{" "}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            value={newUser.password}
            type="password"
            id="password"
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            value={newUser.username}
            type="text"
            id="username"
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            value={newUser.age}
            type="number"
            id="age"
            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
            placeholder="Age"
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            value={newUser.gender}
            type="text"
            id="gender"
            onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
            placeholder="Gender"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            value={newUser.phone}
            type="text"
            id="phone"
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            placeholder="Phone"
          />
        </div>
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {users.map((u) => (
          <li key={u.id} style={{ marginBottom: "10px" }}>
            {editing?.id === u.id ? (
              <>
                <input
                  value={editing?.firstName || ""}
                  type="text"
                  onChange={(e) =>
                    setEditing({ ...editing, firstName: e.target.value })
                  }
                />
                <input
                  value={editing?.lastName || ""}
                  type="text"
                  onChange={(e) =>
                    setEditing({ ...editing, lastName: e.target.value })
                  }
                />

                <input
                  value={editing?.email || ""}
                  type="email"
                  onChange={(e) =>
                    setEditing({ ...editing, email: e.target.value })
                  }
                />

                <input
                  value={editing?.password || ""}
                  type="password"
                  onChange={(e) =>
                    setEditing({ ...editing, password: e.target.value })
                  }
                />

                <input
                  value={editing?.username || ""}
                  type="text"
                  onChange={(e) =>
                    setEditing({ ...editing, username: e.target.value })
                  }
                />

                <input
                  value={editing?.age || ""}
                  type="number"
                  onChange={(e) =>
                    setEditing({ ...editing, age: e.target.value })
                  }
                />

                <input
                  value={editing?.gender || ""}
                  type="text"
                  onChange={(e) =>
                    setEditing({ ...editing, gender: e.target.value })
                  }
                />
                <input
                  value={editing?.phone || ""}
                  type="text"
                  onChange={(e) =>
                    setEditing({ ...editing, phone: e.target.value })
                  }
                />
                <button onClick={() => handleEdit(u.id)}>Save</button>
              </>
            ) : (
              <>
                <p>
                  firstname : {u.firstName} *** lastname: {u.lastName} ***
                  email:
                  {u.email} *** password: {u.password} *** username:{" "}
                  {u.username}
                  *** age: {u.age} *** gender: {u.gender} *** phone:
                  {u.phone}
                </p>
                <button
                  style={{
                    margin: "10px",
                    padding: "5px",
                    backgroundColor: "gray",
                  }}
                  onClick={() => setEditing(u)}
                >
                  Edit
                </button>

                <button
                  style={{
                    padding: "5px",
                    backgroundColor: "gray",
                  }}
                  onClick={() => handleDelete(u.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
