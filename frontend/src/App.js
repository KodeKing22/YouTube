// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CommentForm from "./components/CommentForm/CommentForm"
import VideoPage from "./pages/VideoPage/VideoPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/searchvideos" element={<SearchPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/commentform" element={<PrivateRoute><CommentForm/></PrivateRoute>} />
        <Route path="/videopage" element={<VideoPage/>} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
