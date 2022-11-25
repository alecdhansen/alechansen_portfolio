import React from "react";
import styled from "styled-components";
import HeadDrawer from "./Drawer";

const HeadBody = styled.div`
  height: 200px;
  width: 100vw;
  background-color: tan;
`;

const Header = () => {
  return (
    <>
      <HeadBody>
        <HeadDrawer></HeadDrawer>
      </HeadBody>
    </>
  );
};

export default Header;
