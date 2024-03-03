import React from "react";
import PercentageComponent from "./PercentageComponent";

const DetailsContent = ({ item, title }) => {
  return (
    <div className="mt-4 text-white p-2">
      {item[title].map((detail, detailIndex) => {
        const key = Object.keys(detail)[0];
        const value = detail[key].value;
        const percent = detail[key].percent;
        return (
          <div
            key={detailIndex}
            className="p-1 flex justify-between items-center border-b-2 border-gray-500"
          >
            {key}:
            <span>
              {value}
              <PercentageComponent value={percent} />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default DetailsContent;
