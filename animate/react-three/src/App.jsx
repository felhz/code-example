import { KeyboardControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Three from './Components/Three';

function App() {
  const Controls = {
    forward: 'forward',
    back: 'back',
    left: 'left',
    right: 'right',
    jump: 'jump',
  };
  return (
    <Canvas style={{ height: 500 }}>
      <KeyboardControls
        map={[
          { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
          { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
          { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
          { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
          { name: Controls.jump, keys: ['Space'] },
        ]}
      >
        <ambientLight intensity={Math.PI} />
        <Three />
      </KeyboardControls>
    </Canvas>
  );
}

export default App;
