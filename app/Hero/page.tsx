"use client";
import { Tooltip } from "react-tooltip";
import React from "react";
import {
  FaPaperPlane,
  FaPaperclip,
  FaProjectDiagram,
  FaBehance,
  FaLinkedinIn,
} from "react-icons/fa";

function Hero() {
  return (
    <>
      <main className="flex flex-col">
        <div className="text-center text-3xl pt-32">
          King is a Visual Designer in Brooklyn, New York
        </div>
        <div className="">
          <div className="flex justify-center gap-3 mt-10">
            <a className="w-[80px] h-[80px] bg-ash-box flex rounded-3xl justify-center">
              <div className="flex items-center justify-center">
                <FaPaperPlane size={28} />
              </div>
            </a>

            <a className="w-[80px] h-[80px] bg-ash-box flex rounded-3xl justify-center">
              <div className="flex items-center justify-center">
                <FaPaperclip size={28} />
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-3 mt-3">
            <a className="w-[80px] h-[80px] bg-ash-box flex rounded-3xl justify-center">
              <div className="flex items-center justify-center">
                <FaProjectDiagram size={28} />
              </div>
            </a>

            <a className="w-[80px] h-[80px] bg-ash-box flex rounded-3xl justify-center">
              <div className="flex items-center justify-center">
                <FaBehance size={28} />
              </div>
            </a>

            <a className="w-[80px] h-[80px] bg-ash-box flex rounded-3xl justify-center">
              <div className="flex items-center justify-center">
                <FaLinkedinIn size={28} />
              </div>
            </a>
          </div>
        </div>

        <button className="border border-white w-20 rounded-xl mt-20 mx-auto">
          king
        </button>
        <p className="text-center mt-5">
          Enterprise Design Systems <br /> & Search Ads at Google
        </p>
      </main>
    </>
  );
}

export default Hero;
