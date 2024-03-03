import React from "react";
import { useState } from "react";
import { tv } from "tailwind-variants";

const percentageComponent = tv({
  base: "ml-3 pl-[12px] pr-[6px] rounded-full text-white inline-flex items-center justify-center justify-between font-source-sans-pro w-[84px] h-[20px]",
  variants: {
    value: {
      negative: "bg-[#ED1651]",
      positive: "bg-[#00995D]",
    },
    direction: {
      down: "↓",
      up: "↑",
    },
  },
  defaultVariants: {
    value: "positive",
    direction: "up",
  },
});
function formatNumber(value) {
  let formattedValue = value.toString().replace(".", ",");
  if (!formattedValue.includes(",")) {
    formattedValue += ",0";
  }
  return formattedValue;
}

const PercentageComponent = ({ value }) => {
  const [active, setActive] = useState(false);

  const direction = value < 0 ? "down" : "up";
  const formattedValue = formatNumber(value);

  return (
    <div
      onClick={() => setActive(!active)}
      className={percentageComponent({
        value: value < 0 ? "negative" : "positive",
        direction,
      })}
    >
      {formattedValue}%
      <span className="ml-3">
        {percentageComponent.variants.direction[direction]}
      </span>
    </div>
  );
};

export default PercentageComponent;
