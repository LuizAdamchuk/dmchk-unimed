import React from "react";
import Tabs from "./Components/Tabs";
import MenuButton from "./Components/MenuButton";
import ExpandableDetails from "./Components/ExpandDetails";
import GraficFeedBack from "./Components/GraficFeedBack";
import MenuDetails from "./Components/MenuDetails";

import ExpandableDetailsData from "./mocks/expandableDetailsData.json";
import graficDetailsData from "./mocks/graficDetailsData.json";
import menuData from "./mocks/menuData.json";

import { MenuProvider } from "./Context/MenuContext";
import { ClockIcon } from "./assets/ClockIcon";

function App() {
  return (
    <MenuProvider>
      <div
        className={`App w-screen h-screen bg-[#06624B] relative min-w-[360px]`}
      >
        <header className="pt-[14px] bg-gradient-to-b from-[#00995D] to-[#077358]">
          <MenuButton />

          <Tabs size="large" title="Indicadores Estratégicos" />
        </header>
        <span className="flex items-center pl-4">
          <ClockIcon />
          <Tabs
            font="ssr"
            size="small"
            title="01/01/2020 | Base: Milhões"
            textcolor="default"
            backgroundcolor="primary"
            space="primary"
          />
        </span>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 mx-0 md:mx-4">
          <ExpandableDetails
            data={ExpandableDetailsData}
            className="w-full md:w-1/2"
          />
          <GraficFeedBack
            data={graficDetailsData}
            className="w-full md:w-1/2"
          />
        </div>

        <GraficFeedBack />
        <MenuDetails data={menuData} />
      </div>
    </MenuProvider>
  );
}

export default App;
