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
              <div className=" bg-[#0A4840] pl-[16px] pr-[16px] flex justify-center items-center">
                <div className="w-1/5 flex items-center justify-center">
                  <CircleComponent value={68} />
                </div>
                <div className="w-4/5">
                  <ProgressBar
                    score={68}
                    promoters={76}
                    neutrals={11}
                    detractors={13}
                  />
                </div>
              </div>
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
