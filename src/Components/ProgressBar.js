import React from "react";
import { tv } from "tailwind-variants";
import { HappyFaceIcon } from "../assets/HappyFace";
import { SadFaceIcon } from "../assets/SadFace";
import { NeutralFaceIcon } from "../assets/NeutralFace";

const ProgressBar = ({ promoters, neutrals, detractors }) => {
  const progressBarSegment = tv({
    base: "h-full absolute",
    variants: {
      type: {
        promoters: "bg-[#2AC8BF] rounded-l-full",
        neutrals: "bg-gray-400",
        detractors: "bg-red-400 rounded-r-full",
      },
    },
    defaultVariants: {
      type: "promoters",
    },
  });

  const renderSegment = (width, type, offset = 0) => (
    <div
      style={{ width: `${width}%`, left: `${offset}%` }}
      className={progressBarSegment({ type })}
    ></div>
  );

  return (
    <div className="pl-[8px] pb-[16px] pt-[8px] text-white rounded-lg">
      <div className="flex justify-between mt-2">
        <div className="flex flex-col items-center pr-2">
          <div className="flex items-center">
            <HappyFaceIcon fill="#2AC8BF" />

            <span className="text-[#2AC8BF] pl-1 font-source-sans-pro font-[700]">
              {promoters}%
            </span>
          </div>
          Promotores
        </div>
        <div className="flex flex-col items-center pr-2">
          <div className="flex items-center">
            <NeutralFaceIcon fill="#8BADB3" />

            <span className="text-[#8BADB3] pl-1 font-source-sans-pro font-[700]">
              {neutrals}%{" "}
            </span>
          </div>
          Neutros
        </div>
        <div className="flex flex-col items-center pr-2">
          <div className="flex items-center">
            <SadFaceIcon fill="#FF7070" />

            <span className="text-[#FF7070] pl-1 font-source-sans-pro font-[700]">
              {detractors}%{" "}
            </span>
          </div>
          Detratores
        </div>
      </div>

      {/* Aqui na parte de baixo refatorei para uma funcao apenas, existe a possibilidade de refatoracao na parte de cima, mas achei interessante deixar nos 2 formatos */}

      <div className="mt-4 h-2 rounded-full bg-white relative">
        {renderSegment(promoters, "promoters")}
        {renderSegment(neutrals, "neutrals", promoters)}
        {renderSegment(detractors, "detractors", promoters + neutrals)}
      </div>
    </div>
  );
};

export default ProgressBar;
