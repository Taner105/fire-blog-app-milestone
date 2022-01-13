import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import Navbar from "../components/Navbar";


const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/details" element={<Details />} />
                <Route path="/login" element={<Login />} />
                <Route path="/newblog" element={<NewBlog />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/updateblog" element={<UpdateBlog />} />
            </Routes>
        </Router>
    )
}
export default AppRouter;
