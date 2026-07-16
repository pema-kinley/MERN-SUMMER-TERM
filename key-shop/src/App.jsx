import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";


function App() {
  return (
    <Routes>
      <Route element = {<MainLayout />}>
        <Route path ="/" element ={<Home/>} />
        <Route path = "/shop" element = {<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;