import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DashboardHeader from "./Components/Dashboard/Header.jsx";
import Activity from "./Components/Activity/Activity.jsx";
import RecentOrders from "./Components/Recent Orders/RecentOrders.jsx";
import CustomerFeedback from "./Components/Customer Feedback/CustomerFeedback.jsx";
import Category from "./Components/Category/Category.jsx";
import NetProfit from "./Components/Net Profit/NetProfit.jsx";
import MainDashBoard from "./Components/Main Dashboard/MainDashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainDashBoard />
  </React.StrictMode>
);
