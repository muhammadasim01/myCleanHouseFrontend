import FaQBanner from "../components/FaQ/FaQBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaQCards from "../components/FaQ/FaQCards";
function FaQ() {
  return (
    <div>
      <Header bgColor={" bg-primaryColor"} />
      <FaQBanner />
      <FaQCards />
      <Footer />
    </div>
  );
}

export default FaQ;
