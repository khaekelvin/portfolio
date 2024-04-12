import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Hero from "./page";

const inter = Inter({ subsets: ["latin"] });

import React from "react";

function layout() {
  return (
    <html lang="en">
      <body className="bg-customBlack text-white">
        <Hero />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default layout;
