import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Services from "./component/services/Services";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import AboutUs from "./component/aboutUs/About-us";
import Contact from "./component/contact/Contact";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const toggoleVisiblHundle = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggoleVisiblHundle);
    return () => {
      window.removeEventListener("scroll", toggoleVisiblHundle);
    };
  });

  const scrollToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="containere">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
      {showScroll && (
        <div className="scroll" onClick={scrollToUp}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
}

export default App;
