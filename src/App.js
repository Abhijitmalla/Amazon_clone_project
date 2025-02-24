/* eslint-disable no-unused-vars */
import "./App.css";
import Home from "./pages/Home";
import Layout from "./Layout/layout";
import Error404page from "./pages/AuthScreen.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import CreatePurchaseOrder from "./src/PurchaseOrder/CreatePurchaseOrder";
import ProtectedRoute from "./utils/ProtectedRoute";
import { ToastContainer } from "react-toastify";
// eslint-disable-next-line no-unused-vars
import { Provider, useSelector } from "react-redux";
import store from "./redux/store/store";
import { useDispatch } from "react-redux";
import { fetchSidebar } from "./redux/reducer/sidebardata";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Products from "./pages/Products";
import Order from "./pages/Order";
import Setting from "./pages/Setting";
import Users from "./pages/Users";
import AllCategories from "./pages/AllCategories";
import AddCategory from "./pages/AddCategory";
import ManageCustomer from "./pages/ManageCustomer";
import CreateCustomer from "./pages/CreateCustomer";
import PurchaseOrder from "./pages/PurchaseOrder";
import SalesOrder from "./pages/SalesOrder";
import AddProduct from "./pages/AddProduct";
import ManageProduct from "./pages/ManageProduct";
import EditProduct from "./pages/EditProduct";



function App() {
  const sidebarItems = [
    { name: "Home", link: "/home", icon: "home" },
    {
      name: "Dashboard",
      link: "/Dashboard",
      icon: "Dashboard",
      children: [{ name: "Analytics", link: "/Analytics", icon: "Analytics" }],
    },
    {
      name: "Customer",
      link: "/Customer",
      icon: "AccountCircle",
      children: [
        {
          name: "Manage Customer",
          link: "/ManageCustomer",
          icon: "Dashboard",
        },
        { name: "Create Customer", link: "/CreateCustomer", icon: "Add" },
      ],
    },
    {
      name: "Supplier",
      link: "/Supplier",
      icon: "AccountCircle",
      children: [{}],
    },

    {
      name: "Orders",
      link: "/orders",
      icon: "orders",
      children: [
        {
          name: "Purchase Order",
          link: "/PurchaseOrder",
          icon: "Store",
        },

        { name: "Sales Order", link: "/SalesOrder", icon: "ShoppingCart" },
      ],
    },
    {
      name: "Retail Sales",
      link: "/Retail-Sales",
      icon: "Retail",
      children: [{}],
    },
    {
      name: "Inventory",
      link: "/Inventory",
      icon: "Inventory",
      children: [{}],
    },
    {
      name: "Categories",
      icon: "categories",
      children: [
        { name: "All categories", link: "/AllCategories" },
        { name: "Add category", link: "/AddCategory" },
      ],
    },
    {
      name: "Products",
      link: "/products",
      icon: "Redeem",
      children: [
        { name: "Add Product", link: "/AddProduct", icon: "Add" },
        { name: "Manage Product", link: "/ManageProduct", icon: "Dashboard" },
        { name: "Edit Product", link: "/EditProduct", icon: "Null" },
      ],
    },
    { name: "Invoice", link: "/Invoice", icon: "Receipt", children: [{}] },
    {
      name: "Warehouse",
      link: "/Warehouse",
      icon: "Warehouse",
      children: [{}],
    },
    { name: "Users", link: "/users", icon: "users", children: [{}] },
    { name: "Settings", link: "/settings", icon: "settings" },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout sidebarList={sidebarItems} />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "Products",
          element: <Products />,
        },
        { path: "orders", element: <Order /> },
        { path: "settings", element: <Setting /> },
        { path: "users", element: <Users /> },
        { path: "AllCategories", element: <AllCategories /> },
        { path: "AddCategory", element: <AddCategory /> },
        { path: "ManageCustomer", element: <ManageCustomer /> },
        { path: "CreateCustomer", element: <CreateCustomer /> },
        { path: "PurchaseOrder", element: <PurchaseOrder /> },
        { path: "SalesOrder", element: <SalesOrder /> },
        { path: "ManageProduct", element: <ManageProduct /> },
        { path: "AddProduct", element: <AddProduct /> },
        { path: "EditProduct", element: <EditProduct /> },

      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </>
  );
}

export default App;
