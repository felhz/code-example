import {
  DragControls,
  Gltf,
  Helper,
  Html,
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
  const { camera, gl, scene } = useThree();
  const airRef = useRef();
  const mixer = useRef();
  const [sub, get] = useKeyboardControls();
  const [airPosition, setAirPosition] = useState([1, 1, 1]);

  useEffect(() => {
    let p = new THREE.Vector3(0, 0, 20);
    camera.position.set(p.x, p.y, p.z);
    scene.background = new THREE.Color(0xffff00);

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
      console.log(camera);
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
          scale={[0.2, 0.2, 0.2]}
          position={airPosition}
        ></Gltf>

        {/* <Environment preset={'city'} background={'only'} /> */}
      </DragControls>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        fontSize={1}
        rotateY={(Math.PI / 180) * 80}
      >
        hello world!
      </Text>
      <OrbitControls args={[camera, gl.domElement]} />
      <Html>
        <div>111</div>
      </Html>
    </>
  );
}
export default Three;
