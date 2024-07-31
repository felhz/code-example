import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

const Rotate = () => {
  return (
    <Canvas>
      <OrbitControls enableRotate={true} />
      <ambientLight intensity={Math.PI} />
      <Scene></Scene>
    </Canvas>
  );
};
export default Rotate;
