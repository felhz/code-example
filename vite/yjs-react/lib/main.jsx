import { useEffect } from 'react';
import AA from 'react-dom';
console.log(AA.createPortal);

const Button = ({ children = 'btn' }) => {
  useEffect(() => {
    console.log(1111);
  }, []);

  return <button>{children}</button>;
};
export { Button };
