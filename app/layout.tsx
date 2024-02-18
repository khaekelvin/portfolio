import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "./page";

const inter = Inter({ subsets: ["latin"] });

import React from "react";

function layout() {
  return (
    <html lang="en">
      <body className="bg-customBlack text-white">
        <Hero />
      </body>
    </html>
  );
}

export default layout;
