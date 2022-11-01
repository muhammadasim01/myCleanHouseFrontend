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
import HowItsWorks from "../screens/HowItsWorks";
import GetAQuoteForm from "../components/MobileHeader/GetAQuoteForm";
import BookingSummary from "../components/MobileHeader/BookingSummary";

export default function Home() {
  return (
    <>
      <div>
        {/*Rendering the Mobile menu screen Just for demo purpose */}
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <VirifyEmail /> */}
        {/* <UpdateEmail /> */}
        {/* <GetAQuoteForm /> */}
        <BookingSummary />
        {/* <SignInSignUp /> */}
        {/*Other All Screens */}
        {/* <HomePage /> */}
        {/* <Blogs /> */}
        {/* <FaQ /> */}
        {/* <About /> */}
        {/* <HowItsWorks /> */}
      </div>
    </>
  );
}
