"use client";
import React from "react";
import { FaGithub, FaBehance, FaLinkedinIn } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { RxExternalLink } from "react-icons/rx";
import { TbMessages } from "react-icons/tb";
import { LuClipboardEdit } from "react-icons/lu";

function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto lg:flex lg:absolute lg:left-[50%] lg:top-[50%] lg:transform lg:translate-x-[-50%] lg:translate-y-[-50%]">
        <div>
          <div className="text-center mb-6 mt-20 font-normal lg:text-[80px] lg:leading-[90px] text-[30px] lg:max-w-[1100px] mx-auto">
            Kelvin is a Web Developer in Accra, Ghana
          </div>

          <div className="mt-16">
            <section className="lg:flex lg:justify-center gap-6">
              <section className="flex gap-4 justify-center">
                <div className="lg:flex lg:rotate-[-6deg] lg:mt-[13px]">
                  <a
                    data-tooltip-id="contact-tooltip"
                    data-tooltip-place="bottom"
                    href="mailto:kelvinksd500@gmail.com"
                  >
                    <div className="example-container __react_component_tooltip __react_component_tooltip.show rounded-3xl w-20 h-20 bg-customAsh hover:border-4 hover:bg-gray-400 flex justify-center">
                      <TbMessages size={30} className="my-auto" />
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

                <div className="lg:flex lg:rotate-[-3deg] lg:mt-[4px]">
                  <a
                    data-tooltip-id="resume-tooltip"
                    data-tooltip-place="bottom"
                    href="https://drive.google.com/file/d/1yHsLvt5dp5l7ryyRKbtV5ms9ijwio8JY/view?usp=sharing"
                  >
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

              <section className="flex gap-6 justify-center mt-4 mb-16 lg:mt-0 lg:mb-0">
                <div className="lg:flex rotate-[0deg]">
                  <a
                    data-tooltip-id="projects-tooltip"
                    data-tooltip-place="bottom"
                    href="https://github.com/khaekelvin"
                  >
                    <div className="example-container __react_component_tooltip __react_component_tooltip.show rounded-3xl w-20 h-20 bg-customAsh hover:border-4 hover:bg-gray-400 flex justify-center">
                      <FaGithub size={30} className="my-auto" />
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

                <div className="lg:flex lg:rotate-[3deg] lg:mt-[4px]">
                  <a
                    data-tooltip-id="behance-tooltip"
                    data-tooltip-place="bottom"
                    href="https://www.behance.net/codegraphixx"
                  >
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

                <div className="lg:flex lg:rotate-[6deg] lg:mt-[13px]">
                  <a
                    data-tooltip-id="in-tooltip"
                    data-tooltip-place="bottom"
                    href="https://www.linkedin.com/in/kelvin-duobu"
                  >
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
            </section>

            <div className="border border-white h-auto w-40 rounded-3xl flex justify-center mx-auto mb-7 lg:mt-16">
              <p className="my-1">Web Developer</p>
            </div>

            <div className="flex justify-center mx-auto text-center w-52">
              <p>Visual Designer & Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
