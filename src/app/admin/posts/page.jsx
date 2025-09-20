"use client";
import { useState, useEffect } from "react";
import { postPost, patchPost, deletePost } from "../../../../utils/postAction";
import { v4 as uuid } from "uuid";

export default function AdminPosts() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    views: "",
    userId: "",
  });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/posts?limit=1", { cache: "no-store" })
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  const handleAdd = async () => {
    if (!newPost.title) return;

    const newPostWithId = { ...newPost, id: uuid() };
    await postPost(newPostWithId);

    setPosts((prev) => [...prev, newPostWithId]);
    setNewPost({
      title: "",
      body: "",
      views: "",
      userId: "",
    });
  };

  const handleEdit = async (id) => {
    await patchPost(id, editing);
    setPosts((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...editing } : u))
    );
    setEditing(null);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel – Manage Posts</h2>

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
          <label htmlFor="title">Title:</label>
          <input
            value={newPost.title}
            id="title"
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            placeholder="Title"
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input
            value={newPost.body}
            id="body"
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            placeholder="Body"
          />
        </div>
        <div>
          <label htmlFor="views">Views:</label>
          <input
            value={newPost.views}
            id="views"
            onChange={(e) => setNewPost({ ...newPost, views: e.target.value })}
            placeholder="Views"
          />
        </div>
        <div>
          <label htmlFor="userId">UserId:</label>
          <input
            value={newPost.userId}
            type="number"
            id="userId"
            onChange={(e) => setNewPost({ ...newPost, userId: e.target.value })}
            placeholder="UserId"
          />
        </div>

        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {posts.map((u) => (
          <li key={u.id} style={{ marginBottom: "10px" }}>
            {editing?.id === u.id ? (
              <>
                <input
                  value={editing?.title || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, title: e.target.value })
                  }
                />
                <input
                  value={editing?.body || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, body: e.target.value })
                  }
                />

                <input
                  value={editing?.views || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, views: e.target.value })
                  }
                />

                <input
                  value={editing?.userId || ""}
                  type="number"
                  onChange={(e) =>
                    setEditing({ ...editing, userId: e.target.value })
                  }
                />

                <button onClick={() => handleEdit(u.id)}>Save</button>
              </>
            ) : (
              <>
                <p>
                  title : {u.title} *** body: {u.body} *** views:
                  {u.views} *** userId: {u.userId}
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
