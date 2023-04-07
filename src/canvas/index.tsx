"use client";

import { Center, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CameraRig } from "./camera-rig";
import { ShirtModel } from "./shirt-model";

export function CanvasModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />

      <Environment preset="city" />

      <CameraRig>
        {/** <Backdrop /> */}
        <Center>
          <ShirtModel />
        </Center>
      </CameraRig>
    </Canvas>
  );
}
