import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FloatingMobileNav from "./FloatingMobileNav";
import CustomCursor from "./CustomCursor";

const AppLayout = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <FloatingMobileNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
