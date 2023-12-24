import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../Pages/auth/loginSlice";
import { fetchNewAccessJWT } from "../api/userApi";
import { getUserProfile } from "../Redux/auth/userAction";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  const { user, isUser } = useSelector((state) => state.user);
  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };
    !user._id && dispatch(getUserProfile());
    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("QueryTicketingSystem") &&
      updateAccessJWT();
    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth, user._id]);

  if (isUser == false) {
    setTimeout(() => {
      return <Navigate to="/" replace />;
    }, 3000);
  }
  return children;
}

// window.location.href='/';
