import logo from "./images/logo.jpg";
import Hero from "../components/Hero";
// import Features from "../components/Features";
import Newsletter from "./Newsletter";
import News from "./News";
import MainComponent from "./MainComponent";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-900">
      <nav className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 rounded-lg mr-2" />
        </div>
        <div>
          <button
            onClick={() => navigate("/Signin")}
            className=" hover:text-white text-blue-600 font-bold py-2 px-4 rounded mr-2"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/Signout")}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
          >
            Sign up
          </button>
        </div>
      </nav>
      <Hero />
      {/* <Features /> */}
      <News />
      <MainComponent />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Navbar;
