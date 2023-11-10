import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "leva";
import Loader from "./Loader";

function Model() {
  const { scene } = useLoader(GLTFLoader, "/GamingRoom.glb");
  const { position, rotation } = useControls("Model", {
    position: {
      value: [0, -1.7, 0.2],
      step: 0.1,
      // min: [-0.5, -2.3, -3],
      // max: [0.4, -0.3, 0.4],
    },
    rotation: {
      value: [0, 0.7, 0],
      step: 0.1,
    },
  });
  return (
    <group position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
}

function Scene() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight color={0xe8c37b} intensity={2} />
        <directionalLight
          color={0xec8f5e}
          position={[-69, 24, 14]}
          intensity={5}
        />
        <Environment preset="sunset" />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

export default Scene;
