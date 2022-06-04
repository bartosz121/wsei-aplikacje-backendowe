import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Session from "supertokens-auth-react/recipe/session";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";

import useAuth from "../../hooks/useAuth/useAuth";

const Navbar = () => {
  const [sessionExists, setSessionExists] = useState(false);

  const navigate = useNavigate();
  const { isLoggedIn, userSignedIn, userSignedOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    userSignedOut();
    navigate("/", { replace: true });
    location.reload();
  };

  useEffect(() => {
    const checkSession = async () => {
      const doesSessionExist = await Session.doesSessionExist();
      setSessionExists(doesSessionExist);
      doesSessionExist ? userSignedIn() : userSignedOut();
    };

    checkSession();
  }, []);

  return (
    <nav className="navbar top-0 sticky bg-primary z-10">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-primary-content text-lg font-bold sm:text-xl md:text-2xl"
        >
          NewsReporter
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link to="/search" className="btn btn-ghost btn-xs sm:btn-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <desc>
              Download more icon variants from https://tabler-icons.io/i/search
            </desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </Link>

        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <desc>
                    Download more icon variants from
                    https://tabler-icons.io/i/user
                  </desc>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li
                onClick={(e) => {
                  document.activeElement.blur();
                }}
              >
                <Link to="/user/bookmarks" className="justify-between">
                  My bookmarks
                </Link>
              </li>
              <li
                onClick={(e) => {
                  document.activeElement.blur();
                }}
              >
                <Link to="/user/settings" className="justify-between">
                  Settings
                </Link>
              </li>
              <li onClick={async (e) => handleLogout()}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/auth"
              className="btn btn-primary btn-xs sm:btn-md font-bold"
            >
              Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
