import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";

function RobotModel() {
  const { scene, animations } = useGLTF("/robot_playground.glb");
  const mixer = useRef(null);

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.setLoop(LoopRepeat, Infinity);
        action.play();
      });
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={scene} position={[0, -1, 0]} />;
}

function Avatar() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas style={{ height: "80vh", width: "100vw" }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <RobotModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Avatar;
