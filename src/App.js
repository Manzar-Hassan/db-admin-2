import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedDashboardContent from "./helper/SharedDashboardContent";
import Animation from "./pages/animation_page/Animation";
import Blank from "./pages/blank_page/Blank";
import Border from "./pages/border_page/Border";
import ButtonsPage from "./pages/buttons_page/ButtonsPage";
import CardsPage from "./pages/cards_page/CardsPage";
import ChartPage from "./pages/chart_page/ChartPage";
import ColorPage from "./pages/color_page/ColorPage";
import Dashboard from "./pages/dashboard/Dashboard";
import Error from "./pages/error_page/Error";
import ForgotPassword from "./pages/forgotPassword_page/ForgotPassword";
import Login from "./pages/login_page/Login";
import Others from "./pages/others_page/Others";
import Register from "./pages/register_page/Register";
import Table from "./pages/tables_page/Table";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedDashboardContent />}>
          <Route index element={<Dashboard />} />
          <Route path="/Blank" element={<Blank />} />
          <Route path="/Buttons" element={<ButtonsPage />} />
          <Route path="/Cards" element={<CardsPage />} />
          <Route path="/Charts" element={<ChartPage />} />
          <Route path="/Animations" element={<Animation />} />
          <Route path="/Borders" element={<Border />} />
          <Route path="/Colors" element={<ColorPage />} />
          <Route path="/Others" element={<Others />} />
          <Route path="/Table" element={<Table />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Password-Reset" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
