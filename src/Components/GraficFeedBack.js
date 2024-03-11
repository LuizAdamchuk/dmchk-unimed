import React, { useState, useEffect } from "react";

import CircleComponent from "./CircleComponent";
import ProgressBar from "./ProgressBar";
import PercentageComponent from "./PercentageComponent";

const GraficFeedBack = ({ data }) => {
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setLoadedData(data);
  }, [data]);

  return (
    <div className="bg-[#0A4840]">
      {loadedData &&
        loadedData.map((item, index) => {
          const title = Object.keys(item)[0];

          return (
            <div
              key={index}
              className="bg-[#0A4840] rounded shadow mb-[8px] md:mb-[8px]"
            >
              <h2 className="text-xl bg-[#093D37] font-semibold pl-[16px] pr-[16px] pt-[10px] pb-[10px]">
                {title}
              </h2>
              {item["ColoredBar"] &&
                item["ColoredBar"].map((dataDatails, dataDatailsIndex) => (
                  <div className="bg-[#0A4840] flex justify-center items-center w-full h-full px-4">
                    <div className="items-center justify-center pr-4">
                      <CircleComponent value={dataDatails.value} />
                    </div>
                    <div key={dataDatailsIndex} className="flex-grow">
                      <ProgressBar
                        score={dataDatails.value}
                        promoters={dataDatails.promoters}
                        neutrals={dataDatails.neutrals}
                        detractors={dataDatails.detractors}
                      />
                    </div>
                  </div>
                ))}

              <div className="text-white pl-[16px] pr-[16px] pb-[16px]">
                {item[title].map((detail, detailIndex) => {
                  const key = Object.keys(detail)[0];
                  const value = detail[key].value;
                  const percent = detail[key].percent;
                  return (
                    <div
                      key={detailIndex}
                      className={`p-1 flex justify-between items-center border-t-2 border-[#096956] ${
                        detailIndex === 0 ? "text-[#B1D34A]" : ""
                      }`}
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
            </div>
          );
        })}
    </div>
  );
};

export default GraficFeedBack;
