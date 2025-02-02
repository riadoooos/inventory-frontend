import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./screens/Dashboard";
import Login from "./components/Login";
import Layout from "./Layout/Layout";
import "./App.css";
import LoginScreen from "./screens/userScreens/LoginScreen";
import RegisterScreen from "./screens/userScreens/RegisterScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" exact element={<LoginScreen />} />
        <Route path="/register" exact element={<RegisterScreen />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
