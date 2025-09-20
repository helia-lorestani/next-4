"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Card({ item, type = "items" }) {
  const router = useRouter();

  const title =
    item.title ||
    item.name ||
    (item.firstName && item.lastName
      ? `${item.firstName} ${item.lastName}`
      : item.username || "No title");

  return (
    <article className="card">
      <div>
        <h3>{title}</h3>
        <p>ID: {item.id}</p>
        <button
          style={{
            padding: "5px",
            backgroundColor: "gray",
          }}
          onClick={(e) => {
            router.push(`/${type}/${item.id}`);
          }}
        >
          See details
        </button>
      </div>
    </article>
  );
}
