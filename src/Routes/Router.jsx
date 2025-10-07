import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RideBooking from "../Pages/RideBooking";
import Home from "../Pages/Home";
import UserHome from "../Pages/UserHome";
import AccountManager from "../Pages/AccountManager";
import NameEditForm from "../Components/NameEditForm";
import LoginOrRegister from "../Pages/LoginOrRegister";

export default function CustomeRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<UserHome/>} />
          <Route path="/bookride" element={<RideBooking />} />
          <Route path="/login" element={<LoginOrRegister />} />
          <Route path="/account" element={<AccountManager />} />
          <Route path="/account/updatename" element={<NameEditForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
