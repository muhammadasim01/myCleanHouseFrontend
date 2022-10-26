import styles from "../styles/Home.module.css";
import HomePage from "../screens/HomePage";
import Blogs from "../screens/Blogs";
import FaQ from "../screens/FaQ";
import About from "../screens/About";
import SignUp from "../components/MobileHeader/SignUp";
import SignIn from "../components/MobileHeader/SignIn";
import VirifyEmail from "../components/MobileHeader/VerifyEmail";
import UpdateEmail from "../components/MobileHeader/UpdateEmail";
import SignInSignUp from "../components/MobileHeader/SignInSignUp";

export default function Home() {
  return (
    <>
      <div>
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <VirifyEmail /> */}
        {/* <UpdateEmail /> */}
        <SignInSignUp />
        {/* <HomePage /> */}
        {/* <Blogs /> */}
        {/* <FaQ /> */}
        {/* <About /> */}
      </div>
    </>
  );
}
