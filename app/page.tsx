"use client";
import React from "react";
import { FaPaperPlane, FaBehance, FaLinkedinIn } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { RxExternalLink } from "react-icons/rx";
import { TiDocumentText } from "react-icons/ti";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { LuClipboardEdit } from "react-icons/lu";

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
              <a data-tooltip-id="contact-tooltip">
                <div className="example-container __react_component_tooltip __react_component_tooltip.show rounded-3xl w-20 h-20 bg-customAsh hover:border-4 hover:bg-gray-400 flex justify-center">
                  <FaPaperPlane size={30} className="my-auto" />
                  <Tooltip
                    id="contact-tooltip"
                    className="example-rounded __react_component_tooltip __react_component_tooltip.show hidden lg:flex"
                    arrowColor="transparent"
                    data-tooltip-content="Hello world! "
                  >
                    <p className="mr-1">Contact Me</p>
                    <RxExternalLink size={20} />
                  </Tooltip>
                </div>
              </a>
            </div>

            <div className="lg:flex">
              <a data-tooltip-id="resume-tooltip">
                <div className="example-container __react_component_tooltip __react_component_tooltip.show rounded-3xl w-20 h-20 bg-customAsh hover:border-4 hover:bg-gray-400 flex justify-center">
                  <LuClipboardEdit size={30} className="my-auto" />
                  <Tooltip
                    id="resume-tooltip"
                    className="example-rounded __react_component_tooltip __react_component_tooltip.show hidden lg:flex"
                    arrowColor="transparent"
                  >
                    <p className="mr-1">Resume</p>
                    <RxExternalLink size={20} />
                  </Tooltip>
                </div>
              </a>
            </div>
          </section>

          <section className="flex gap-4 justify-center mt-4">
            <div className="lg:flex">
              <a data-tooltip-id="projects-tooltip" data-tooltip-place="bottom">
                <div className="example-container __react_component_tooltip __react_component_tooltip.show rounded-3xl w-20 h-20 bg-customAsh hover:border-4 hover:bg-gray-400 flex justify-center">
                  <LiaProjectDiagramSolid size={30} className="my-auto" />
                  <Tooltip
                    id="projects-tooltip"
                    className="example-rounded __react_component_tooltip __react_component_tooltip.show hidden lg:flex"
                    arrowColor="transparent"
                    data-tooltip-content="Hello world! "
                  >
                    <p className="mr-1">Projects</p>
                    <RxExternalLink size={20} />
                  </Tooltip>
                </div>
              </a>
            </div>

            <div className="lg:flex">
              <a data-tooltip-id="behance-tooltip" data-tooltip-place="bottom">
                <div className="example-container __react_component_tooltip __react_component_tooltip.show rounded-3xl w-20 h-20 bg-customAsh hover:border-4 hover:bg-gray-400 flex justify-center">
                  <FaBehance size={30} className="my-auto" />
                  <Tooltip
                    id="behance-tooltip"
                    className="example-rounded __react_component_tooltip __react_component_tooltip.show hidden lg:flex"
                    arrowColor="transparent"
                  >
                    <p className="mr-1">Behance</p>
                    <RxExternalLink size={20} />
                  </Tooltip>
                </div>
              </a>
            </div>

            <div className="lg:flex">
              <a data-tooltip-id="in-tooltip" data-tooltip-place="bottom">
                <div className="example-container __react_component_tooltip __react_component_tooltip.show rounded-3xl w-20 h-20 bg-customAsh hover:border-4 hover:bg-gray-400 flex justify-center">
                  <FaLinkedinIn size={30} className="my-auto" />
                  <Tooltip
                    id="in-tooltip"
                    className="example-rounded __react_component_tooltip __react_component_tooltip.show hidden lg:flex"
                    arrowColor="transparent"
                  >
                    <p className="mr-1">LinkedIn</p>
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
