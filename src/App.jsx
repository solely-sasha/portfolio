import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function App() {
  return (
    <div className="main">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
