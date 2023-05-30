import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/SimpleNavbar/Navbar";
import SignUp from "./Components/Pages/SignUp/SignUp";
import HomePage from "./Components/Pages/Home/HomePage";
import HomeNav from "./Components/Navbar/HomeNavbar/HomeNav";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <SignUp />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <HomeNav />
              <HomePage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
