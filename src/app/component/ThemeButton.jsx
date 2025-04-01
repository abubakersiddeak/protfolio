"use client";
import React from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import UseTheme from "./UseTheme";

export default function ThemeButton() {
  const { theme, setTheme } = UseTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg "
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-white" />
      )}
    </button>
  );
}
