"use client";
import React from "react";
import { FaPaperPlane, FaLink } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { RxExternalLink } from "react-icons/rx";

function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          Dane is a Visual Designer in Brooklyn, New York
        </div>

        <div>
          <section className="flex gap-4 justify-center">
            <div className="lg:flex">
              <a data-tooltip-id="my-tooltip-rounded">
                <div className="example-container __react_component_tooltip __react_component_tooltip.show rounded-3xl w-20 h-20 bg-customAsh hover:border-4 hover:bg-gray-400 flex justify-center">
                  <FaPaperPlane size={30} className="my-auto" />
                  <Tooltip
                    id="my-tooltip-rounded"
                    className="example-rounded __react_component_tooltip __react_component_tooltip.show hidden lg:flex"
                    arrowColor="transparent"
                  >
                    <p className="mr-1">Contact Me</p>
                    <RxExternalLink size={20} />
                  </Tooltip>
                </div>
              </a>
            </div>

            <div className="lg:flex">
              <a data-tooltip-id="my-tooltip-rounded">
                <div className="example-container __react_component_tooltip __react_component_tooltip.show rounded-3xl w-20 h-20 bg-customAsh hover:border-4 hover:bg-gray-400 flex justify-center">
                  <FaPaperPlane size={30} className="my-auto" />
                  <Tooltip
                    id="my-tooltip-rounded"
                    className="example-rounded __react_component_tooltip __react_component_tooltip.show hidden lg:flex"
                    arrowColor="transparent"
                  >
                    <p className="mr-1">Contact Me</p>
                    <RxExternalLink size={20} />
                  </Tooltip>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Hero;
