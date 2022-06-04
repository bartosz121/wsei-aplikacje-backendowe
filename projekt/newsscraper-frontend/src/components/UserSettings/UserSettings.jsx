import React, { useState } from "react";

import ChangeEmailForm from "../ChangeEmailForm/ChangeEmailForm";
import ChangePasswordForm from "../ChangePasswordForm/ChangePasswordForm";

const UserSettings = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center mt-4 h-auto">
      <div className="tabs">
        <a
          onClick={(e) => setActiveTab(1)}
          className={`font-semibold tab tab-lg tab-lifted ${
            activeTab === 1 && "tab-active"
          }`}
        >
          Email
        </a>
        <a
          onClick={(e) => setActiveTab(2)}
          className={`font-semibold tab tab-lg tab-lifted ${
            activeTab === 2 && "tab-active"
          }`}
        >
          Password
        </a>
      </div>
      <div className="bg-base-100 rounded-lg artboard md:phone-2 p-4">
        <div className={`h-full ${activeTab != 1 ? "hidden" : undefined}`}>
          <ChangeEmailForm />
        </div>
        <div className={`h-full ${activeTab != 2 ? "hidden" : undefined}`}>
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
