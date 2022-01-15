import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import AddCommittee from "./Components/DashBoard/AddCommittee/AddCommittee";
import AddEvent from "./Components/DashBoard/AddEvent/AddEvent";
import BlogsAdd from "./Components/DashBoard/BlogsCrete/BlogsAdd";
import Edit from "./Components/DashBoard/BlogsCrete/Edit";
import Dashboard from "./Components/DashBoard/Dashboard/Dashboard";
import EditBlog from "./Components/DashBoard/EditBlog/EditBlog";
import MakeAdmin from "./Components/DashBoard/MakeAdmin/MakeAdmin";
import MyInfo from "./Components/DashBoard/My Info/MyInfo";
import Profile from "./Components/DashBoard/Profile/Profile";
import About from "./Components/Pages/About/About/About";
import BlogDetails from "./Components/Pages/BlogDetails/BlogDetails";
import Blogs from "./Components/Pages/Blogs/Blogs/Blogs";
import Committees from "./Components/Pages/Committee/Committee/Committees";
import Events from "./Components/Pages/Events/Events/Events";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Pages/Login/Login";
import PrivateRoute from "./Components/Pages/Login/PrivateRoute/PrivateRoute";
import Registration from "./Components/Pages/Login/Registration";
import Members from "./Components/Pages/Member/Members/Members";
import Notfound from "./Components/Pages/Notfound/Notfound";
import Privacy from "./Components/Pages/Privacy&policy/Privacy";
import UserRegistration from "./Components/Pages/UserRegistration/UserRegistration";
import Footer from "./Components/Shared/Footer/Footer";

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

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/DashBoard/Home" element={<Home />} />
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
              <Route path={`/Dashboard/MyInfo`} element={<MyInfo />} />
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
