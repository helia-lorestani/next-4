import Link from "next/link";

export const metadata = {
  title: "Home page",
  description: "welcome to the homepage",
};

export default async function Home() {
  const links = [
    { href: "/users", title: "users" },
    { href: "/posts", title: "posts" },
    { href: "/recipes", title: "recipes" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {links.map((item, i) => (
        <Link key={i} href={item.href} style={{ textDecoration: "none" }}>
          <button
            style={{
              width: "95vw",
              height: "20vh",
              margin: "20px",
              fontSize: "xxx-large",
              color: "black",
              cursor: "pointer",
            }}
          >
            {item.title}
          </button>
        </Link>
      ))}
    </div>
  );
}
