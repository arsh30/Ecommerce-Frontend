import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";

const Layout = (props) => {
  return (
    <>
      <Header />
          {/* need  children, header is a parent level element */}
        
      {props.children}

          
    </>
  );
};

export default Layout;
