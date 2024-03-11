import React from "react";
import { tv } from "tailwind-variants";
import { BiMenu } from "react-icons/bi";
import { useMenuContext } from "../Context/MenuContext";
import { IconContext } from "react-icons";
import { generateResponsiveFontSize } from "../shared";

const button = tv({
  base: `text-white inline-flex items-center font-source-sans-pro font-[400] text-[1rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] hover:text-white/80 transition-color`,
  variants: {
    size: {
      default: "h-10 px-4",
      sm: "h-8 px-3",
      xs: "h-6 px-2",
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

const MenuButton = ({
  size,
  className,
  iconSize = "1.5rem",
  responsivity = 1.3,
  ...props
}) => {
  const { setMenuOpen } = useMenuContext();
  const responsiveFontSize = generateResponsiveFontSize(responsivity, 0.1);

  return (
    <IconContext.Provider
      value={{
        className: `text-[1.3rem] ${responsiveFontSize}`,
      }}
    >
      <button
        onClick={() => setMenuOpen(true)}
        className={button({ size, active: false, className })}
      >
        <BiMenu />
        Menu
      </button>
    </IconContext.Provider>
  );
};

export default MenuButton;
