import { Suspense } from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import LoadingPage from "../pages/LOading";
import { Container } from "@mui/material";
import { Footer } from "./Footer/Footer";

const Layout = () => {
  return (
    <Container maxWidth='md' style={{border: "1px solid gray", padding: "0px" }}>
      <NavBar />
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
        <Footer/>
    </Container>
  );
};

export default Layout;
