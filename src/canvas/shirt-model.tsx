import { state } from "@/store";
import { useGLTF, useTexture } from "@react-three/drei";
import { useSnapshot } from "valtio";

export function ShirtModel() {
  const snap = useSnapshot(state);

  // @ts-expect-error
  // TODO: WHY?
  const { nodes, materials } = useGLTF("./shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      />
    </group>
  );
}
