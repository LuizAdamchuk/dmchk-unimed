import React, { useState, useEffect } from "react";
import { useMenuContext } from "../Context/MenuContext";

import { tv } from "tailwind-variants";
import { UnimedIcon } from "../assets/UnimedIcon";
import { CloseIcon } from "../assets/CloseIcon";

const menuDetailsVariants = tv({
  base: "absolute inset-0 w-[300px] h-screen z-10",
  variants: {
    visibility: {
      visible: "bg-gradient-to-b from-green-700 via-green-800 to-green-900",
      hidden: "",
    },
    sectionActive: {
      true: "bg-[#B1D34B] text-[#0A5F55]",
      false: "",
    },
  },
  defaultVariants: {
    visibility: "hidden",
    sectionActive: false,
  },
});

const MenuDetails = ({ data }) => {
  const { menuOpen, setMenuOpen } = useMenuContext();
  const [clickedH3, setClickedH3] = useState({});
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setLoadedData(data);
  }, [data]);

  const handleH3Click = (text) => {
    setClickedH3({ ...clickedH3, [text]: !clickedH3[text] });
  };

  if (!menuOpen) return null;
  return (
    <aside
      className={menuDetailsVariants({
        visibility: menuOpen ? "visible" : "hidden",
        sectionActive: clickedH3["Indicadores Estratégicos"],
      })}
    >
      <div className=" bg-[url('../../public/menu-details.png')] text-white w-[300px] h-screen fixed top-0 left-0 z-10 ">
        <header className="flex justify-between items-center mb-4">
          <div className="pl-[16px] pt-[16px] pr-[16px]">
            <UnimedIcon />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 text-white font-source-sans-pro  pl-[16px] pt-[16px] pr-[16px] hover:text-white/80 transition-colors"
          >
            <span>Fechar</span> <CloseIcon width={12} height={12} />
          </button>
        </header>

        {loadedData.map((section) => (
          <nav key={section.title}>
            <h2 className="pt-[16px] pb-[16px] pl-[16px] font-roboto-slab font-[800] ">
              {section.title}
            </h2>

            {section.sectionData.map((subSection) => (
              <div>
                <h3
                  onClick={() => handleH3Click(subSection.subtitle)}
                  className={`pt-[16px] pb-4 pl-4 font-roboto-slab font-[600]  cursor-pointer  ${
                    clickedH3[subSection.subtitle]
                      ? "bg-[#B1D34B] text-[#0A5F55] hover:text-[#0A5F55]/80 focus:text-[#0A5F55]/90 active:bg-[#B1D34B]/40 transition-color duration-200"
                      : "hover:text-white/80  transition-color duration-200"
                  } `}
                >
                  {subSection.subtitle}
                </h3>
                {clickedH3[subSection.subtitle] && (
                  <ul className="font-source-sans-pro">
                    {subSection.data.map((item) => (
                      <li
                        key={item}
                        className="pt-2 pb-2 pl-10 mb-1 text-[#81C6AE] hover:text-white cursor-pointer transition-color"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        ))}
      </div>
    </aside>
  );
};

export default MenuDetails;
