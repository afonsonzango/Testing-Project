import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { createRoot } from "react-dom/client";

//Renderization Layout
import General from "./handle_layouts/General";

//Pages Chain Func
import Get from "./components/partials/RoutesField";

//Dependences
import "../assets/dependences/bootstrap/bootstrap.min.css"
import "../assets/dependences/bootstrap/bootstrap.bundle.min"

const MyApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/application" element={<General />} >
          <Route path="/application/dashboard" element={<Get.Dashboard />}/>
          <Route path="/application/users" element={<Get.Users />} />
          <Route path="/application/configuration/*" element={<Get.Configurations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const rootElement:any = document.getElementById('root'); 
const root = createRoot(rootElement);
root.render(<MyApp />);
