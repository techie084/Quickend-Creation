import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const routers = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, name: "home", element: <Home /> },
      { path: "services", name: "services", element: <Services /> },
      { path: "about", name: "about", element: <About /> },
      { path: "contact", name: "contact", element: <Contact /> },
    ],
  },
  /* CATCH ALL */
  {
    path: "*",
    name: "404",
    element: <NotFound />,
  },
];

declare global {
  interface Window {
    __routers__: typeof routers;
  }
}

window.__routers__ = routers;
