"use client";
import React from "react";
import { FaPaperPlane, FaLink } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          Dane is a Visual Designer in Brooklyn, New York
        </div>

        <div>
          <div className="flex">
            <a
              data-tooltip-id="my-tooltip-rounded"
              data-tooltip-content="Contact Me"
            >
              <div className="example-container __react_component_tooltip __react_component_tooltip.show rounded-3xl w-20 h-20 bg-customAsh hover:border-4 hover:bg-gray-400 flex justify-center ">
                <FaPaperPlane size={30} className="my-auto " />
                <Tooltip
                  id="my-tooltip-rounded"
                  className="example-rounded __react_component_tooltip __react_component_tooltip.show"
                  arrowColor="transparent"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

{
  /* <FaLink />
  <div className="white-container">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content=""
              className="w-20 left-0 flex rounded-3xl"
            >
              <Tooltip
                id="my-tooltip"
                place="bottom"
                className="example-rounded"
              />
              <div className="w-20 h-20 bg-black">
                <FaPaperPlane size={25} />
              </div>
            </a>
          </div> */
}
