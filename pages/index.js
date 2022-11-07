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
import GetAQuoteForm1 from "../components/MobileHeader/GetAQuoteForm1";
import BookingSummary from "../components/MobileHeader/BookingSummary";
import SendAsAGift from "../components/MobileHeader/SendAsAGift";
import GetAQuoteForm2 from "../components/MobileHeader/GetAQuoteForm2";
import GetAQuoteForm from "../components/MobileHeader/GetAQuoteForm";
import GetAQuoteForm3 from "../components/MobileHeader/GetAQuoteForm3";

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
        {/* <GetAQuoteForm1 /> */}
        {/* <GetAQuoteForm2 /> */}
        <GetAQuoteForm3 />
        {/* <BookingSummary /> */}
        {/* <SendAsAGift /> */}
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
