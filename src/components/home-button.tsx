import { state } from "@/store";
import { useSnapshot } from "valtio";

export function HomeButton({
  type,
  title,
  handleClick,
  customStyles,
}: {
  type: string;
  title: string;
  handleClick: () => void;
  customStyles: string;
}) {
  const snap = useSnapshot(state);

  function generateStyle(type: string) {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#FFF",
      };
    }
  }

  return (
    <button
      style={generateStyle(type)}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
