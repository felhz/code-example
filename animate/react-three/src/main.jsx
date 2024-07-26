import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Pano from './Components/Pano/index.jsx';
import Rotate from './Components/Rotate/index.jsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ height: '50vh' }}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
