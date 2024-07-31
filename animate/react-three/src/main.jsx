import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Cannon from './Components/Cannon/index.jsx';
import Collision from './Components/Collision/index.jsx';
import Pano from './Components/Pano/index.jsx';
import Rotate from './Components/Rotate/index.jsx';
import Sprite from './Components/Sprite/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pano',
    element: <Pano />,
  },
  {
    path: '/rotate',
    element: <Rotate />,
  },
  {
    path: '/cannon',
    element: <Cannon />,
  },
  {
    path: '/collision',
    element: <Collision />,
  },
  {
    path: '/sprite',
    element: <Sprite />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ height: '50vh' }}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
