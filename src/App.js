import "./App.css";
import Home from "./Components/Pages/Home/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./Components/Pages/About/About/About";
import Events from "./Components/Pages/Events/Events/Events";
import Blog from "./Components/Pages/Blog/Blog/Blog";
import DashBoard from "./Components/Pages/DashBoard/DashBoard/DashBoard";
import Login from "./Components/Pages/Login/Login";
import Registration from "./Components/Pages/Login/Registration";
import Notfound from "./Components/Pages/Notfound/Notfound";
import UserRegistration from "./Components/Pages/UserRegistration/UserRegistration";
import Navbar from "./Components/Shared/NavBar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import AuthProvider from "./Components/Context/AuthProvider";
import BlogDetails from "./Components/Pages/BlogDetails/BlogDetails";
import Members from "./Components/Pages/Member/Members/Members";
import Committees from "./Components/Pages/Committee/Committee/Committees";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="Blog/:blogId" element={<BlogDetails />} />
            <Route path="/Committee" element={<Committees />} />
            <Route path="/Member" element={<Members />} />
            <Route path="/becomeMember" element={<UserRegistration />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Notfound" element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
