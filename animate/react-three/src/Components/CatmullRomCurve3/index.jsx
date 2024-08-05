import { MotionPathControls, Sphere, useMotion } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Loop() {
  const motion = useMotion();
  useFrame((state, delta) => {
    // Set the current position along the curve, you can increment indiscriminately for a loop
    motion.current += delta;
    // Look ahead on the curve
    motion.object.current.lookAt(motion.next);
    console.log(motion);
    // console.log(motion.current);
  });
}

function Com() {
  const poi = useRef();
  return (
    <group>
      <MotionPathControls
        debug
        offset={0}
        focus={poi}
        damping={0.2}
        focusDamping={0.15}
        curves={[
          new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(10, 20, 0),
            new THREE.Vector3(20, 20, 0),
            new THREE.Vector3(40, 0, 0),
          ]),
        ]}
      >
        <Loop />
      </MotionPathControls>
      <Sphere ref={poi}>
        <meshStandardMaterial color="hotpink" />
      </Sphere>
    </group>
  );
}

const CatmullRomCurve3 = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 100], fov: 45 }}
    >
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  );
};
export default CatmullRomCurve3;
