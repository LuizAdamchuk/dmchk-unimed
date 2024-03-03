import React from "react";
import { tv } from "tailwind-variants";

const tabsComponent = tv({
  base: "text-white  pt-[10px] pb-[10px] ",
  variants: {
    font: {
      roboto: "font-roboto-slab",
      ssp: "font-source-sans-pro",
    },
    size: {
      small: "font-[400]",
      medium: "font-[600]",
      large: "font-[700]",
      exlarge: "font-[800]",
    },
    textcolor: {
      default: "text-white",
      primary: "text-[#6AA093]",
      secondary: "text-green-500",
    },
    backgroundcolor: {
      default: "",
      primary: "bg-[#06614B]",
    },
    space: {
      default: "pl-[16px]",
      primary: "pl-[6px]",
    },
  },
  defaultVariants: {
    size: "medium",
    textcolor: "default",
    font: "roboto",
    backgroundcolor: "default",
    space: "default",
  },
});

const Tabs = ({ title, size, textcolor, font, backgroundcolor, space }) => {
  return (
    <div
      className={tabsComponent({
        size,
        textcolor,
        font,
        backgroundcolor,
        space,
      })}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default Tabs;
