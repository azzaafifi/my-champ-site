"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const links = [
    "home",
    "about",
    "projects",
    "play",
    "talents",
    "contact",
  ];

  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between text-xs uppercase tracking-widest">
      <ul className="flex gap-6 opacity-80">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link}`} className="hover:opacity-60 transition">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 opacity-70">
        {/* Location */}
        <span>Los Angeles, CA</span>

        {/* The toggle DOT */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-3 h-3 rounded-full bg-current hover:scale-125 transition"
        />
      </div>
    </nav>
  );
}
