import React from "react";
import { AppContainer } from "../components/AppContainer.style.js";
import Header from "../components/Header.jsx";
import HeadDrawer from "../components/Drawer.jsx";

function Main() {
  return (
    <>
      <Header></Header>
      <AppContainer>main content</AppContainer>
    </>
  );
}
export default Main;
