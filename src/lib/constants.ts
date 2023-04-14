export type TabType = {
  name:
    | "colorpicker"
    | "filepicker"
    | "aipicker"
    | "logoShirt"
    | "stylishShirt";
  icon: any;
};

export const EditorTabs: TabType[] = [
  {
    name: "colorpicker",
    icon: "/assets/swatch.png",
  },
  {
    name: "filepicker",
    icon: "/assets/file.png",
  },
  {
    name: "aipicker",
    icon: "/assets/ai.png",
  },
];

export const FilterTabs: TabType[] = [
  {
    name: "logoShirt",
    icon: "/assets/logo-tshirt.png",
  },
  {
    name: "stylishShirt",
    icon: "/assets/stylish-tshirt.png",
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
