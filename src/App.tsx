import { Route, Routes } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import GamePage from "./pages/GamePage";
import RegisterPage from "./pages/RegisterPage";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/register-game" element={<RegisterPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </>
  );
}
export default App;
