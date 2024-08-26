
import React from 'react';
import './App.css';
import Nav from "./component/Nav";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Front1 from "./component/Front1";
import Intro from './component/Intro';
import Slider from "./component/Slider";
import ViMi from './component/ViMi';
import H from "./component/H";
import Services1 from "./component/Services1";
import But from './component/But';
import AboutUs from './component/AboutUs';
import Contact from './component/Contact';
import Program from './component/Program';
import Donate from './component/Donate';

// Layout component to include Nav and dynamic content area
const Layout = () => {
  return (
    <div>
      <Nav /> {/* Nav will always be visible */}
      <Outlet /> {/* This is where route-specific components will be rendered */}
    </div>
  );
};

// Define routes for your application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the layout to ensure Nav is consistently shown
    children: [
      {
        path: "/",
        element: (
          <>
            <Front1 />
            <Intro />
            <Slider />
            <ViMi />
            <H />
            <Services1 />
            <But />
          </>
        ), // Render these components on the home route
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/Program",
        element: <Program />,
      },
      {
        path: "/Donate",
        element: <Donate />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
