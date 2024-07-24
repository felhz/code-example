import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

const TransitionExample = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const transitions = useTransition(items, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    keys: (item) => item.id,
  });

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, text: `Item ${items.length + 1}` },
    ]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <div>
        {transitions((style, item) => (
          <animated.div style={style} key={item.id}>
            <div>
              {item.text}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default TransitionExample;
