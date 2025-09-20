"use client";
import { useState, useEffect } from "react";
import {
  postRecipe,
  patchRecipe,
  deleteRecipe,
} from "../../../../utils/recipeAction";
import { v4 as uuid } from "uuid";

export default function AdminRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    userId: "",
  });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/recipes?limit=1", { cache: "no-store" })
      .then((res) => res.json())
      .then(setRecipes);
  }, []);

  const handleAdd = async () => {
    if (!newRecipe.name) return;

    const newRecipeWithId = { ...newRecipe, id: uuid() };
    await postRecipe(newRecipeWithId);

    setRecipes((prev) => [...prev, newRecipeWithId]);
    setNewRecipe({
      name: "",
      ingredients: "",
      instructions: "",
      userId: "",
    });
  };

  const handleEdit = async (id) => {
    await patchRecipe(id, editing);
    setRecipes((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...editing } : u))
    );
    setEditing(null);
  };

  const handleDelete = async (id) => {
    await deleteRecipe(id);
    setRecipes((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel – Manage Recipes</h2>

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
          <label htmlFor="title">Name:</label>
          <input
            value={newRecipe.name}
            id="name"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, name: e.target.value })
            }
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <input
            value={newRecipe.ingredients}
            id="ingredients"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, ingredients: e.target.value })
            }
            placeholder="Ingredients"
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <input
            value={newRecipe.instructions}
            id="instructions"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, instructions: e.target.value })
            }
            placeholder="Instructions"
          />
        </div>
        <div>
          <label htmlFor="userId">UserId:</label>
          <input
            value={newRecipe.userId}
            type="number"
            id="userId"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, userId: e.target.value })
            }
            placeholder="UserId"
          />
        </div>

        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {recipes.map((u) => (
          <li key={u.id} style={{ marginBottom: "10px" }}>
            {editing?.id === u.id ? (
              <>
                <input
                  value={editing?.name || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, name: e.target.value })
                  }
                />
                <input
                  value={editing?.ingredients || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, ingredients: e.target.value })
                  }
                />

                <input
                  value={editing?.instructions || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, instructions: e.target.value })
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
                  name : {u.name} *** ingredients: {u.ingredients} ***
                  instructions:
                  {u.instructions} *** userId: {u.userId}
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
