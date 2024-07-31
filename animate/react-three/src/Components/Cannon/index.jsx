import { Debug, Physics, useBox, usePlane } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Plane(props) {
  const [ref, api] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  console.log(ref, api, 1111);
  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10]} color={0xff0000} />
    </mesh>
  );
}

function Cube(props) {
  const [ref] = useBox(() => ({
    position: [0, 1, 0],
    rotation: [0.4, 0.2, 0.5],
    ...props,
  }));
  console.log(props);
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshLambertMaterial color="hotpink" />
    </mesh>
  );
}

const Cannon = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      camera={{ position: [-1, 5, 5], fov: 45 }}
    >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={Math.PI} />

      <Physics frictionGravity={[0, 100, 0]}>
        <Debug scale={6}>
          <Plane position={[0, -2.5, 0]} />
          <Cube position={[2, 5, 0]} mass={10000} />
          <Cube position={[4, 5, 0]} mass={5} />
        </Debug>
      </Physics>
    </Canvas>
  );
};
export default Cannon;
