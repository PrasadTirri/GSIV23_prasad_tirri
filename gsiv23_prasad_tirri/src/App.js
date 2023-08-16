import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPage from "./components/ListPage";
import DetailsPage from "./components/DetailsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ListPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
