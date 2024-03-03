import React, { useState, useEffect } from "react";
import Button from "./Button";
import PercentageComponent from "./PercentageComponent";

const ExpandableDetails = ({ data }) => {
  const [selectedItemIndices, setSelectedItemIndices] = useState([]);
  const [loadedData, setLoadedData] = useState([]);
  const [actualValues, setActualValues] = useState([]);

  useEffect(() => {
    setLoadedData(data);
    setActualValues(processData(data));
  }, [data]);

  const processData = (data) => {
    return data.map((item) => {
      const title = Object.keys(item)[0];
      const firstDetail = item[title][0];
      const key = Object.keys(firstDetail)[0];
      const value = firstDetail[key].value;
      const percent = firstDetail[key].percent;

      const newValue =
        percent >= 0
          ? value + value * (percent / 100)
          : value - value * (Math.abs(percent) / 100);

      return { title: key, value: formatNumber(newValue.toFixed(1)) };
    });
  };

  function formatNumber(value) {
    let formattedValue = value.toString().replace(".", ",");
    if (!formattedValue.includes(",")) {
      formattedValue += ",0";
    }
    return formattedValue;
  }

  const handleExpand = (index) => {
    const isSelected = selectedItemIndices.includes(index);
    setSelectedItemIndices(
      isSelected
        ? selectedItemIndices.filter((i) => i !== index)
        : [...selectedItemIndices, index]
    );
  };

  return (
    <div>
      {loadedData &&
        loadedData.map((item, index) => {
          const title = Object.keys(item)[0];

          return (
            <div
              key={index}
              className="bg-[#0A4840] rounded shadow"
              onClick={() => handleExpand(index)}
            >
              <h2 className="bg-[#093D37] pl-[16px] pr-[16px] pt-[10px] pb-[10px] text-xl font-semibold">
                {title}
              </h2>
              <div className=" mt-[16px] ml-[16px] pb-[16px] flex justify-between bg-[#0A4840]">
                {actualValues && actualValues.length > 0 ? (
                  <p className="text-lg flex items-center ">
                    <span className="font-source-sans-pro font-[700] text-[42px]">
                      {actualValues[index].value}
                    </span>
                    <span className="ml-[4px]">
                      {actualValues[index].title}
                    </span>
                  </p>
                ) : (
                  <p>Loading...</p>
                )}
                <Button
                  size="xs"
                  icon={true}
                  iconSize="1rem"
                  className="ml-[72px]"
                >
                  DETALHAR
                </Button>
              </div>

              {selectedItemIndices.includes(index) && (
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
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ExpandableDetails;
