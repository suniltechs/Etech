import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout"; // Fixed: Changed absolute import to relative
import Home from "./components/Home";
import Brands from "./components/Brands";
import Benefits from "./components/Benefits";
import Instructor from "./components/Instructor";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import PageNotFound from "./components/PageNotFound";

// smooth scrolling
import Lenis from "lenis";

// Initialize Lenis;
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Define your main layout component
export const MainLayout = () => (
  <>
    <Home />
    <Brands />
    <Benefits />
    <Instructor />
    <Courses />
    <Testimonials />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}> {/* Fixed: Layout component case */}
      <Route index element={<MainLayout />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
