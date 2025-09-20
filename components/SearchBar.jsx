"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ defaultValue = "", path = "posts" }) {
  const [q, setQ] = useState(defaultValue);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/${path}?q=${encodeURIComponent(q)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-container">
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={`Search ${path} ...`}
        className="search-bar"
      />
      <button
        type="submit"
        style={{
          padding: "5px",
          backgroundColor: "gray",
        }}
        className="search-button"
      >
        Search
      </button>
    </form>
  );
}
