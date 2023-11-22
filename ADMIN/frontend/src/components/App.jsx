import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "./Privacy";
import Terms from "./Term";
import RichTextEditor from "./RichTextEditor";
import About from "./About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/AboutCK" element={<RichTextEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
