"use client";

import { EditorTabs, FilterTabs, TabType } from "@/lib/constants";
import { fadeAnimation, slideAnimation } from "@/lib/motion";
import { state } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSnapshot } from "valtio";
import { ColorPicker } from "./color-picker";
import { HomeButton } from "./home-button";
import { Tab } from "./tab";

export function Customizer() {
  const snap = useSnapshot(state);

  const [activeEditorTab, setActiveEditorTab] = useState<TabType["name"]>();
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  function generateTabContent() {
    switch (activeEditorTab) {
      case "colorpicker": {
        return <ColorPicker />;
      }

      default: {
        return null;
      }
    }
  }

  const handleActiveFilterTab = (tabName: string) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        // @ts-ignore
        [tabName]: !prevState[tabName],
      };
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="z-10 top-5 right-5 absolute"
            {...fadeAnimation}
          >
            <HomeButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                isFilterTab
                tab={tab}
                // @ts-ignore
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
