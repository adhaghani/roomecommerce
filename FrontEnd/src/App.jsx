import React from "react";

import Register from "./Page/LoginRegister/Register/Register";
import Login from "./Page/LoginRegister/Login/Login";
import Home from "./Page/Home/Home";
import Outlet from "./Page/Home/Outlet/Outlet";
import Product from "./Page/Product/Product";
import Cart from "./Page/Cart/Cart";
import Checkout from "./Page/Checkout/Checkout";
import ProductDetail from "./Page/Product/Detail/ProductDetail";
import User from "./Page/User/User";
import Order from "./Page/User/Order/Order";
import Admin from "./Page/Admin/Admin";
import Development from "./Page/Development/Development";
import UserDetail from "./Page/Admin/Section/AdminUserDetail/UserDetail";
import NoSession from "./Page/NoSession/NoSession";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/outlet" element={<Outlet />} />
          <Route exact path="/NoSession" element={<NoSession />} />
          <Route exact path="/Product/:UserID" element={<Product />} />
          <Route exact path="/Cart/:UserID" element={<Cart />} />
          <Route exact path="/Development" element={<Development />} />
          <Route
            exact
            path="/Checkout/:UserID/:TotalAmount"
            element={<Checkout />}
          />
          <Route exact path="/User/:UserID" element={<User />} />
          <Route exact path="/Admin/:AdminID" element={<Admin />} />
          <Route exact path="/Order/:UserID/:OrderID" element={<Order />} />
          <Route
            exact
            path="/Admin/Order/:AdminID/:UserID/:OrderID"
            element={<Order />}
          />
          <Route
            exact
            path={"/Product/:UserID/:categoryID/:ProductID"}
            element={<ProductDetail />}
          />
          <Route
            exact
            path={`/Admin/UserDetails/:AdminID/:UserID`}
            element={<UserDetail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
