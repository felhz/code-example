import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';

const ClickSpring = () => {
  const [clicked, setClicked] = useState(false);
  const styles = useSpring({
    transform: clicked ? 'scale(1.5)' : 'scale(1)',
    config: { tension: 200, friction: 12 },
  });

  return (
    <animated.button style={styles} onClick={() => setClicked(!clicked)}>
      Click me!
    </animated.button>
  );
};

export default ClickSpring;
