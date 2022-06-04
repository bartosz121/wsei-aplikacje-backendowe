import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth/useAuth";
import axiosI from "../../api/axios";
import Spinner from "../Spinner/Spinner";

const ChangePasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);

  const navigate = useNavigate();
  const { userSignedOut } = useAuth();

  const AUTH_BASE_URL = import.meta.env.VITE_ST_APIDOMAIN;

  const handleBtnClick = async (e) => {
    e.preventDefault();

    if (password === "" || newPassword === "" || confirmNewPassword === "") {
      return;
    }

    setPasswordsDoNotMatch(false);
    setLoading(true);

    if (newPassword !== confirmNewPassword) {
      setPasswordsDoNotMatch(true);
      toast.error("Passwords do not match");
    } else {
      await axiosI
        .post(`${AUTH_BASE_URL}/change_password`, {
          old_password: password,
          new_password: newPassword,
        })
        .then((res) => {
          toast.success("Password changed!");
          userSignedOut();
          navigate("/auth");
        })
        .catch((error) => {
          console.error(error);
          const errorMsg = error.response.data.detail;
          toast.error(errorMsg ? errorMsg : "Error");
        });
    }

    setLoading(false);
  };

  return (
    <div
      className={`h-full flex flex-col justify-center items-center ${
        loading && "opacity-50"
      }`}
    >
      <p className="mb-6 text-2xl font-semibold">Change Password</p>
      <form onSubmit={async (e) => await handleBtnClick(e)}>
        <div className="form-control w-full max-w-xs  my-7">
          <label className="label">
            <span className="label-text font-semibold">Current password</span>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="input input-bordered tracking-wide input-primary w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs  my-7">
          <label className="label">
            <span className="label-text font-semibold">New Password</span>
          </label>
          <input
            onChange={(e) => {
              setNewPassword(e.target.value);
              setPasswordsDoNotMatch(false);
            }}
            type="password"
            placeholder="New Password"
            className={`input input-bordered tracking-wide w-full max-w-xs ${
              passwordsDoNotMatch ? "input-error" : "input-primary"
            }`}
          />
        </div>
        <div className="form-control w-full max-w-xs  my-7">
          <label className="label">
            <span className="label-text font-semibold">
              Confirm New Password
            </span>
          </label>
          <input
            onChange={(e) => {
              setConfirmNewPassword(e.target.value);
              setPasswordsDoNotMatch(false);
            }}
            type="password"
            placeholder="Confirm New Password"
            className={`input input-bordered tracking-wide w-full max-w-xs ${
              passwordsDoNotMatch ? "input-error" : "input-primary"
            }`}
          />
        </div>
        <button
          type="submit"
          className={`btn btn-accent btn-wide font-bold tracking-wider mt-4 ${
            loading && "btn-disabled"
          }`}
        >
          Update
        </button>
      </form>
      {loading && (
        <span className="absolute">
          <Spinner />
        </span>
      )}
    </div>
  );
};

export default ChangePasswordForm;
