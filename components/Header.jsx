"use client";

import Link from "next/link";
import ThemeToggleSimple from "./ThemeToggle";

const links = [
  { href: "/users", title: "users" },
  { href: "/posts", title: "posts" },
  { href: "/recipes", title: "recipes" },
];

export default function Header() {
  return (
    <div>
      <nav>
        <ul className="nav-list">
          {links.map((item, i) => {
            return (
              <li
                key={i}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "gray",
                }}
              >
                <Link
                  href={item.href}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <ThemeToggleSimple />
      </nav>
    </div>
  );
}
