import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import User from './components/User/User';
import Github from './components/Github/Github';
import GIthubInfo from './components/GithubInfo/GIthubInfo';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/:userId" element={<User />} />
      <Route loader={GIthubInfo} path="/Github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
