import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import PageContainer from "../containers/PageContainer";

const Layout = () => {
  return (
    <>
      <PageContainer>
        <Navbar />
        <Outlet />
      </PageContainer>
    </>
  );
};

export default Layout;
