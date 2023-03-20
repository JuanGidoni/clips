import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { About, Home } from "../../Pages";
// TODO: React router with github pages (home page will be a route /projectname)
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/justdoit/" element={<Home />} />
      <Route path="/justdoit/aboutme" element={<About />} />
    </>
  )
);
