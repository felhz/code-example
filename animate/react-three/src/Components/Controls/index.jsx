import { GizmoHelper, GizmoViewport, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Controls = () => {
  return (
    <Canvas shadows gl={{ alpha: false }} scene={{}}>
      {/* <MapControls /> */}
      <ambientLight intensity={Math.PI} />
      <Sphere material-color="hotpink" w></Sphere>
      <GizmoHelper>
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"
        />
        {/* <GizmoViewcube></GizmoViewcube> */}
      </GizmoHelper>
      <axesHelper args={[10]} />
    </Canvas>
  );
};
export default Controls;
