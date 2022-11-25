import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Story from "./Story";
import Projects from "./Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/story" element={<Story />} />
    </Routes>
  );
}

export default App;
