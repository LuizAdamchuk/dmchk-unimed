import React from "react";
import { useState } from "react";
import { tv } from "tailwind-variants";
import { CiCirclePlus } from "react-icons/ci";

const button = tv({
  base: "bg-[#C4DE77] text-[#0A5F55]  rounded-full inline-flex items-center justify-center font-roboto-slab mr-[16px] hover:bg-[#C4DE77]/60 focus:bg-[#C4DE77]/90 active:bg-[#C4DE77]/30 transition-color duration-200",
  variants: {
    size: {
      default: "h-10 px-4",
      sm: "h-8 px-3",
      xs: "h-6 px-2 text-xs",
    },
    active: {
      true: "shadow-lg",
    },
  },
  defaultVariants: {
    size: "default",
    active: false,
  },
});

const iconButton = tv({
  base: "ml-1 stroke-2 ",
  variants: {
    active: {
      true: "shadow-lg",
    },
  },
  defaultVariants: {
    active: false,
  },
});

const Button = ({
  size,
  className,
  icon = false,
  iconSize = "1.5rem",
  ...props
}) => {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => {
        setActive(!active);
        if (props.onClick) {
          props.onClick();
        }
      }}
      className={button({ size, active, className })}
    >
      {props.children}
      {icon && (
        <CiCirclePlus
          data-testid="iconButton"
          size={iconSize}
          className={iconButton({ active })}
        />
      )}
    </button>
  );
};

export default Button;
