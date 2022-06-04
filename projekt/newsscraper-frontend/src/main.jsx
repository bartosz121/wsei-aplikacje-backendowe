import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

import { UserProvider } from "./context/UserContext";
import axiosI from "./api/axios";

import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Auth from "./components/Auth/Auth";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import UserSettings from "./components/UserSettings/UserSettings";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";

import App from "./App";
import "./index.css";

// Supertokens init
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_ST_APPNAME,
    apiDomain: import.meta.env.VITE_ST_APIDOMAIN,
    websiteDomain: import.meta.env.VITE_ST_WEBSITEDOMAIN,
    apiBasePathL: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init({
      signInAndUpFeature: {
        disableDefaultImplementation: true,
      },
      onHandleEvent: async (context) => {
        if (context.action === "SUCCESS") {
          if (context.user) {
            location.reload();
          }
        }
      },
    }),
    Session.init(),
  ],
});

Session.addAxiosInterceptors(axiosI);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/user/bookmarks"
            element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/settings"
            element={
              <ProtectedRoute>
                <UserSettings />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserProvider>
);
