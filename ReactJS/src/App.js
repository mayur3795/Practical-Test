import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
