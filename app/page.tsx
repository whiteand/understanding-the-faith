import Link from "next/link";
import LINKS from "../content/content";

export default function Home() {
  return (
    <div className="container">
      <h1>Зміст</h1>
      <nav>
        {LINKS.map((link) =>
          link.disabled ? (
            <div key={link.href}>{link.title}</div>
          ) : (
            <Link key={link.href} href={link.href}>
              {link.title}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
