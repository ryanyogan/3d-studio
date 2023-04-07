import { Canvas } from "@/canvas";
import { Customizer } from "@/components/customizer";
import { HomeComponent } from "@/components/home";

export default function Home() {
  return (
    <main className="app transition-all ease-in">
      <HomeComponent />
      <Canvas />
      <Customizer />
    </main>
  );
}
