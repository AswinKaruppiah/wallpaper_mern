import { Route, Routes } from "react-router-dom";
import Admin from "./Ui/Admin/Admin";
import Adminlogin from "./Ui/Admin/Login/Adminlogin.js";

import Wallpaper from "./Ui/Intopage/Wallpaper";
import Nav from "./Ui/Nav/Nav";
import Uploadpage from "./Ui/Uploadpage/Uploadpage";

function App() {
  setTimeout(function () {
    localStorage.removeItem("token");
  }, 3600000);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Wallpaper />} />
        <Route path="/create" exact element={<Uploadpage />} />
        <Route path="admin/login" exact element={<Adminlogin />} />
        <Route path="/admin/adminpanel" exact element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
