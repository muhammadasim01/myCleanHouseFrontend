import BoxCards from "../components/BoxCards";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import ContactCleaner from "../components/ContactCleaner";
import MobileAppSection from "../components/MobileAppSection";
import RectangularCards from "../components/ServiceSection";
import CustomerSupport from "../components/CustomerSupport";
import Subscription from "../components/Subscription";
import SecondBanner from "../components/SecondBanner";
import ServiceSection from "../components/ServiceSection";
const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <BoxCards />
      <HowItWorks />
      <SecondBanner />
      <FeaturesSection />
      <ContactCleaner />
      <MobileAppSection />
      <ServiceSection />
      <CustomerSupport />
      <Subscription />
    </>
  );
};

export default HomePage;
