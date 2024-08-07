import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Cannon from './Components/Cannon/index.jsx';
import CatmullRomCurve3 from './Components/CatmullRomCurve3/index.jsx';
import Collision from './Components/Collision/index.jsx';
import Controls from './Components/Controls/index.jsx';
import Hub from './Components/Hub/index.jsx';
import Map from './Components/Map/index.jsx';
import MotionPath from './Components/MotionPath/index.jsx';
import Pano from './Components/Pano/index.jsx';
import Rotate from './Components/Rotate/index.jsx';
import Scroller from './Components/Scroll/index.jsx';
import Sphereg from './Components/Sphere/index.jsx';
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
  {
    path: '/scroll',
    element: <Scroller />,
  },
  {
    path: '/motion',
    element: <MotionPath />,
  },
  {
    path: '/hub',
    element: <Hub />,
  },
  {
    path: '/catcure3',
    element: <CatmullRomCurve3 />,
  },
  {
    path: '/sphere',
    element: <Sphereg />,
  },
  {
    path: '/map',
    element: <Map />,
  },
  {
    path: '/control',
    element: <Controls />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ height: '50vh' }}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
