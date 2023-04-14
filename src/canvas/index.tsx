"use client";

import { Center, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Backdrop } from "./backdrop";
import { CameraRig } from "./camera-rig";
import { ShirtModel } from "./shirt-model";

export function CanvasModel() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />

      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <ShirtModel />
        </Center>
      </CameraRig>
    </Canvas>
  );
}
