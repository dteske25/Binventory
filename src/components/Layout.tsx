import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
}
