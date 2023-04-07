import { state } from "@/store";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import { useSnapshot } from "valtio";

export function CameraRig({ children }: { children: React.ReactNode }) {
  const snap = useSnapshot(state);
  const group = useRef();

  // set the model rotation smoothly
  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // set model camera postion
    // @ts-ignore
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    easing.dampE(
      // @ts-ignore
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  // @ts-ignore
  return <group ref={group}>{children}</group>;
}
