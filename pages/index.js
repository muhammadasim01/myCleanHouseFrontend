import styles from "../styles/Home.module.css";
import HomePage from "../screens/HomePage";
import Blogs from "../screens/Blogs";
import FaQ from "../screens/FaQ";
import About from "../screens/About";
import SignUp from "../components/MobileHeader/SignUp";
import SignIn from "../components/MobileHeader/SignIn";

export default function Home() {
  return (
    <>
      <div>
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        <SignUp />
        {/* <HomePage /> */}
        {/* <Blogs /> */}
        {/* <FaQ /> */}
        {/* <About /> */}
      </div>
    </>
  );
}
