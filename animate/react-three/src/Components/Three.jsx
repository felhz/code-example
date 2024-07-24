import {
  DragControls,
  Environment,
  Gltf,
  Helper,
  OrbitControls,
  Text,
  useGLTF,
  useKeyboardControls,
} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
function Three() {
  const { animations } = useGLTF('/air.glb');
  const { camera } = useThree();
  const airRef = useRef();
  const mixer = useRef();
  const [sub, get] = useKeyboardControls();
  const [airPosition, setAirPosition] = useState([1, 1, 1]);

  useEffect(() => {
    camera.zoom = 6;
    mixer.current = new THREE.AnimationMixer(airRef.current);
    animations.forEach((clip) => {
      mixer.current.clipAction(clip).play();
    });
  }, []);
  const matrix = new THREE.Matrix4();

  useFrame((state, delta) => {
    mixer.current?.update(delta);
    const pressed = get().back;
    const upPressed = get().forward;
    if (pressed) {
      setAirPosition((s) => {
        return [s[0], s[1] - 0.1, s[2]];
      });
    }
    if (upPressed) {
      setAirPosition((s) => {
        return [s[0], s[1] + 0.1, s[2]];
      });
    }
  });

  return (
    <>
      <DragControls
        matrix={matrix}
        autoTransform={false}
        onDrag={(localMatrix) => matrix.copy(localMatrix)}
      >
        <Helper args={['royalblue']} />
        <Gltf
          ref={airRef}
          src="/air.glb"
          scale={[0.1, 0.1, 0.1]}
          position={airPosition}
        ></Gltf>
        <Text color="black" anchorX="center" anchorY="middle">
          hello world!
        </Text>
        <Environment preset="park" background />
      </DragControls>

      <OrbitControls />
    </>
  );
}
export default Three;
