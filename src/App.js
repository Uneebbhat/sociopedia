import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import SecondaryNavbar from "./Components/Navbar/SecondaryNavbar/SecondaryNavbar";
import MainNavbar from "./Components/Navbar/MainNavbar/MainNavbar";
import "./App.css";
import SignUp from "./Components/Pages/SignUp/SignUp";
import SignIn from "./Components/Pages/SignIn/SignIn";
import MainPage from "./Components/Pages/Home/MainPage";

function App() {
  function Navbar() {
    const location = useLocation();
    const isSignupOrSigninPage =
      location.pathname === "/signup" || location.pathname === "/signin";

    return isSignupOrSigninPage ? <SecondaryNavbar /> : <MainNavbar />;
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
