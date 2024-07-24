import {
  animated,
  useSpring,
  useSpringValue,
  useTransition,
} from '@react-spring/web';
import './App.css';
import TransitionExample from './Transition';

function App() {
  const [styles] = useSpring(
    () => ({
      from: { opacity: 0 },
      // loop: true,
      pause: true,
      to: { opacity: 1 },
    }),
    []
  );
  const handle = () => {
    api.start({ pause: false });
  };
  const opacity = useSpringValue(0, {
    config: {
      mass: 2,
      friction: 5,
      tension: 80,
    },
  });

  const handleClick = () => opacity.start(1);
  const [transitions, api] = useTransition(2, () => ({
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  }));
  const handleTrans = () => {
    console.log(111);
    api.start();
  };

  return (
    <div>
      11111
      <animated.div
        style={{
          position: 'fixed',
          ...styles,
        }}
        onClick={handle}
      >
        11
      </animated.div>
      <animated.div onClick={handleClick} style={{ opacity }}>
        Hello World
      </animated.div>
      {transitions((style, item) => (
        <animated.div style={style} onClick={handleTrans}>
          {item}
        </animated.div>
      ))}
      <TransitionExample />
    </div>
  );
}

export default App;
