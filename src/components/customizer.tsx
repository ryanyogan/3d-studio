"use client";

import { EditorTabs, FilterTabs } from "@/lib/constants";
import { fadeAnimation, slideAnimation } from "@/lib/motion";
import { state } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import { HomeButton } from "./home-button";
import { Tab } from "./tab";

export function Customizer() {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
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
                isActiveTab=""
                tab={tab}
                handleClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
