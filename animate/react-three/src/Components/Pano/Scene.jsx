import { useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

const Scene = () => {
  const { gl, camera } = useThree();
  //["left", "right", "top", "bottom", "front", "back"]
  const textTures = useTexture([
    '/pano/left.png',
    '/pano/right.png',
    '/pano/top.png',
    '/pano/bottom.png',
    '/pano/front.png',
    '/pano/back.png',
  ]);

  useEffect(() => {
    gl.setSize(300, 300);
    camera.position.set(1, 0, -1.5);
  }, []);

  return (
    <mesh
      scale={[3, 3, 3]}
      material={textTures.map((textTure, i) => {
        return new THREE.MeshBasicMaterial({
          map: textTure,
          side: THREE.BackSide,
        });
      })}
    >
      <boxGeometry args={[3, 3, 3]}></boxGeometry>
    </mesh>
  );
};
export default Scene;
