import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth/useAuth";
import axiosI from "../../api/axios";
import Spinner from "../Spinner/Spinner";

const ChangeEmailForm = () => {
  const [loading, setLoading] = useState(false);
  const [newEmailAddress, setNewEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { userSignedOut } = useAuth();

  const AUTH_BASE_URL = import.meta.env.VITE_ST_APIDOMAIN;

  const handleBtnClick = async (e) => {
    e.preventDefault();
    if (newEmailAddress === "" || password === "") {
      return;
    }
    setLoading(true);

    await axiosI
      .post(`${AUTH_BASE_URL}/change_email`, {
        new_email: newEmailAddress,
        password: password,
      })
      .then((res) => {
        toast.success("Email changed!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        const errorMsg = error.response.data.detail;
        toast.error(errorMsg ? errorMsg : "Error");
      });

    setLoading(false);
  };

  return (
    <div
      className={`h-full flex flex-col justify-center items-center ${
        loading && "opacity-50"
      }`}
    >
      <p className="mb-6 text-2xl font-semibold">Change Email</p>
      <form onSubmit={async (e) => await handleBtnClick(e)}>
        <div className="form-control w-full max-w-xs  my-7">
          <label className="label">
            <span className="label-text font-semibold">New email address</span>
          </label>
          <input
            onChange={(e) => setNewEmailAddress(e.target.value)}
            type="email"
            placeholder="New email address"
            className="input input-bordered tracking-wide input-primary w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs  my-7">
          <label className="label">
            <span className="label-text font-semibold">Confirm Password</span>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="input input-bordered tracking-wide input-primary w-full max-w-xs"
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

export default ChangeEmailForm;
