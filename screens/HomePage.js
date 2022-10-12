import BoxCards from "../components/BoxCards";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import ContactCleaner from "../components/ContactCleaner";
import MobileAppSection from "../components/MobileAppSection";
import RectangularCards from "../components/RectangularCards";
import CustomerSupport from "../components/CustomerSupport";
const HomePage = () => {
  return (
    <>
      {/* <Header />
      <Banner /> */}
      <BoxCards />
      <HowItWorks />
      <FeaturesSection />
      <ContactCleaner />
      <MobileAppSection />
      <RectangularCards />
      <CustomerSupport />
      <ContactCleaner />
    </>
  );
};

export default HomePage;
