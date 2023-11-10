import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      center
      style={{
        width: "20%",
        color: "white",
      }}
    >
      {progress} %
    </Html>
  );
};

export default Loader;
