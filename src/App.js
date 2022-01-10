import "./App.css";
import Home from "./Components/Pages/Home/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./Components/Pages/About/About/About";
import Events from "./Components/Pages/Events/Events/Events";
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
import Profile from "./Components/DashBoard/Profile/Profile";
import Edit from "./Components/DashBoard/BlogsCrete/Edit";
import Dashboard from "./Components/DashBoard/Dashboard/Dashboard";
import BlogsAdd from "./Components/DashBoard/BlogsCrete/BlogsAdd";
import MakeAdmin from "./Components/DashBoard/MakeAdmin/MakeAdmin";
import { Helmet } from "react-helmet";
import Blogs from "./Components/Pages/Blogs/Blogs/Blogs";
import AddEvent from "./Components/DashBoard/AddEvent/AddEvent";
import PrivateRoute from "./Components/Pages/Login/PrivateRoute/PrivateRoute";
import BlogEdit from "./Components/DashBoard/BlogsCrete/BlogEdit";
import EditBlog from "./Components/DashBoard/EditBlog/EditBlog";
import Privacy from "./Components/Pages/Privacy&policy/Privacy";
import AddCommittee from "./Components/DashBoard/AddCommittee/AddCommittee";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা প্রাক্তন ছাত্র ছাত্রী পরিষদ
            </title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Blog" element={<Blogs />} />
            <Route path="/Blog/:blogId" element={<BlogDetails />} />
            <Route path="/BlogEdit/:blogId" element={<Edit />} />
            <Route path="/Committee" element={<Committees />} />
            <Route path="/Member" element={<Members />} />
            <Route path="/becomeMember" element={<UserRegistration />} />
            <Route
              path="/Dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/Dashboard" element={<Profile />} />
              <Route path={`/Dashboard/BlogWrite`} element={<BlogsAdd />} />
              <Route
                path={`/Dashboard/BlogEdit/:blogId`}
                element={<EditBlog />}
              />
              <Route path={`/Dashboard/makeAdmin`} element={<MakeAdmin />} />
              <Route path={`/Dashboard/addEvent`} element={<AddEvent />} />
              <Route
                path={`/Dashboard/addCommittee`}
                element={<AddCommittee />}
              />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
