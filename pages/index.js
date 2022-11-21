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
import GetAQuoteForm4 from "../components/MobileHeader/GetAQuoteForm4";
import BasicInfo from "../components/MobileHeader/BasicInfo";
import BackgroundCheck from "../components/MobileHeader/BackgroundCheck";
import UploadPhotoId from "../components/MobileHeader/UploadPhotoId";
import CleanerProfile from "../components/MobileHeader/CleanerProfile";
import BookingDetails from "../components/MobileHeader/BookingDetails";

export default function Home() {
  return (
    <>
      <div>
        {/*Rendering the Mobile menu screen Just for demo purpose */}
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <SignInSignUp />
        {/* <VirifyEmail /> */}
        {/* <UpdateEmail /> */}
        {/* <GetAQuoteForm /> */}
        {/* <GetAQuoteForm1 /> */}
        {/* <GetAQuoteForm2 /> */}
        {/* <GetAQuoteForm3 /> */}
        {/* <GetAQuoteForm4 /> */}
        {/* <BookingSummary /> */}
        {/* <SendAsAGift /> */}
        {/* <BasicInfo /> */}
        {/* <BackgroundCheck /> */}
        {/* <UploadPhotoId /> */}
        {/* <CleanerProfile /> */}
        {/* <BookingDetails /> */}
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
