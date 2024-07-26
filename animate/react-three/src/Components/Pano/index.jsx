import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

const Pano = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={Math.PI} />
      <Scene></Scene>
    </Canvas>
  );
};
export default Pano;
