import React from "react";
import axiosI from "../../api/axios";

import Article from "../Article/Article";
import InfiniteScrollData from "../InfiniteScrollData/InfiniteScrollData";

const Bookmarks = () => {
  const AUTH_BASE_URL = import.meta.env.VITE_ST_APIDOMAIN;
  const url = `${AUTH_BASE_URL}/bookmark`;
  return (
    <div className="w-full flex justify-center bg-base-300">
      <div className="mt-4 w-full md:w-4/5 flex flex-row justify-center items-center overflow-auto">
        <InfiniteScrollData
          url={url}
          MapComponent={Article}
          axiosInstance={axiosI}
        />
      </div>
    </div>
  );
};

export default Bookmarks;
