import "./App.css";
import Home from "./Components/Pages/Home/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./Components/Pages/About/About/About";
import Events from "./Components/Pages/Events/Events/Events";
import Blog from "./Components/Pages/Blog/Blog/Blog";
import Committee from "./Components/Pages/Committee/Committee/Committee";
import Member from "./Components/Pages/Member/Member/Member";
import DashBoard from "./Components/Pages/DashBoard/DashBoard/DashBoard";
import Login from "./Components/Pages/Login/Login";
import Registration from "./Components/Pages/Login/Registration";
import Notfound from "./Components/Pages/Notfound/Notfound";
import UserRegistration from "./Components/Pages/UserRegistration/UserRegistration";
import Navbar from "./Components/Shared/NavBar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Committee" element={<Committee />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/becomeMember" element={<UserRegistration />} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Notfound" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
