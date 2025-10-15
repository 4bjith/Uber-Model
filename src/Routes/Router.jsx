import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RideBooking from "../Pages/RideBooking";
import Home from "../Pages/Home";
import UserHome from "../Pages/UserHome";
import AccountManager from "../Pages/AccountManager";
import NameEditForm from "../Components/NameEditForm";
import LoginOrRegister from "../Pages/LoginOrRegister";
import NumberUpdateForm from "../Components/NumberUpdateForm";
import ProfileImgUpdateForm from "../Components/ProfileImgUpdateForm";
import { ToastContainer } from "react-toastify";

export default function CustomeRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/bookride" element={<RideBooking />} />
          <Route path="/login" element={<LoginOrRegister />} />
          <Route path="/account" element={<AccountManager />} />
          <Route path="/account/updatename" element={<NameEditForm />} />
          <Route path="/account/updatenumber" element={<NumberUpdateForm />} />
          <Route
            path="/account/updateprofile"
            element={<ProfileImgUpdateForm />}
          />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
        />
      </BrowserRouter>
    </>
  );
}
