"use client";

import Link from "next/link";
import ThemeToggleSimple from "./ThemeToggle";
import { useRouter } from "next/navigation";

const links = [
  { href: "/users", title: "users" },
  { href: "/posts", title: "posts" },
  { href: "/recipes", title: "recipes" },
];

const adminLinks = [
  { href: "/admin/users", title: "admin-users" },
  { href: "/admin/posts", title: "admin-posts" },
  { href: "/admin/recipes", title: "admin-recipes" },
];

export default function Header() {
  const router = useRouter();

  const handleAdminChange = (e) => {
    const value = e.target.value;
    if (value) router.push(value);
  };

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
          <li>
            {" "}
            <select
              onChange={handleAdminChange}
              style={{
                backgroundColor: "#b7a5a5ff",
                padding: "5px 10px",
                border: "solid #b7a5a5ff",
              }}
            >
              <option value="">Admin Pages</option>
              {adminLinks.map((link) => (
                <option key={link.href} value={link.href}>
                  {link.title}
                </option>
              ))}
            </select>
          </li>
        </ul>

        <ThemeToggleSimple />
      </nav>
    </div>
  );
}
