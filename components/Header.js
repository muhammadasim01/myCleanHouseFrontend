import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { color } from "../styles/global.css";
import logo from "../public/assets/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center font-lg absolute w-[100vw] m-6">
        <figure>
          <Image src={logo} />
        </figure>
        <div className="w-[75rem] flex justify-evenly items-center text-lightColor">
          <Link href="/">Our Guarantee</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Book A Cleaner</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Contact Us</Link>
          <PrimaryButton
            text="Login"
            bgColor={"bg-accentColor"}
            textColor={"text-primaryColor"}
          />
          <PrimaryButton
            text="Register"
            bgColor={"bg-primaryColor"}
            textColor={"text-lightColor"}
          />
        </div>
      </div>

      {/* <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <figure>
              <Image src={logo} />
            </figure>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link >
                <Link href="/" >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/sdf">about</Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/dsfsdf">cosdf</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
};

export default Header;
