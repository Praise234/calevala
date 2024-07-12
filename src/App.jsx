import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";
import CompanyPage from "./pages/CompanyPage";
import AboutPage from "./pages/AboutPage";


function App() {

  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/services" Component={ServicePage} />
        <Route path="/work" Component={WorkPage} />
        <Route path="/projects" Component={ProjectPage} />
        <Route path="/company" Component={CompanyPage} />
        <Route path="/about" Component={AboutPage} />
      </Routes>
      <Footer />
     
    </div>
  )
}

export default App
