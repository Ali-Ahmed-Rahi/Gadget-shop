import { Outlet } from "react-router-dom";
import Navbar from "../shered/Navbar";
import Footer from "../shered/Footer";


const MainLayout = () => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  );
};

export default MainLayout;