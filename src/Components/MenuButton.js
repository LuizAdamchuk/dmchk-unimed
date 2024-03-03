import React from "react";
import { tv } from "tailwind-variants";
import { BiMenu } from "react-icons/bi";
import { useMenuContext } from "../Context/MenuContext";

const button = tv({
  base: "text-white inline-flex items-center font-normal w-full font-source-sans-pro font-[400]",
  variants: {
    size: {
      default: "h-10 px-4",
      sm: "h-8 px-3",
      xs: "h-6 px-2 text-xs",
    },
    active: {
      true: "font-bold",
    },
  },
  defaultVariants: {
    size: "default",
    active: false,
  },
});

const MenuButton = ({ size, className, iconSize = "1.5rem", ...props }) => {
  const { setMenuOpen } = useMenuContext();

  return (
    <button
      onClick={() => setMenuOpen(true)}
      className={button({ size, active: false, className })}
    >
      <BiMenu size={iconSize} />
      Menu
    </button>
  );
};

export default MenuButton;
