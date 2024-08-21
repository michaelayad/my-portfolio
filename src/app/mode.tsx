"use client";
import { useEffect, useState } from "react";

export default function Mode() {
    useEffect(() => {
        // Check if the "mode" key exists in localStorage and set the body class
        if (typeof window !== "undefined" && window.localStorage) {
          const mode = localStorage.getItem("mode");
          if (mode === "dark") {
            document.body.classList.add("dark");
          } else {
            document.body.classList.remove("dark");
          }
        }
      }, []);
  return null;
}
