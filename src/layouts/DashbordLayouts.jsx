import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "@/store";
import Link from "next/link";

export default function DashbordLayouts({ children }) {
  return (
    <Provider store={store}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Learner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link style={{marginLeft:"10px"}} href={"/home"}>Home</Link>
              <Link style={{marginLeft:"10px"}}href={"/dashbord/courses"}>courses</Link>
              <Link style={{marginLeft:"10px"}}href={"/dashbord/teachers"}>teacher</Link>
              <Link style={{marginLeft:"10px"}}href={"/dashbord/student"}>students</Link>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">{children}</div>
    </Provider>
  );
}
