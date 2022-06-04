import React from "react";
import axios from "axios";

import Article from "../Article/Article";
import InfiniteScrollData from "../InfiniteScrollData/InfiniteScrollData";

const Home = () => {
  const url = import.meta.env.VITE_NEWSSCRAPER_API_URL;

  return (
    <div className="w-full flex justify-center bg-base-300">
      <div className="mt-4 w-full md:w-4/5 flex flex-row justify-center items-center overflow-auto">
        <InfiniteScrollData
          url={url}
          MapComponent={Article}
          axiosInstance={axios}
        />
      </div>
    </div>
  );
};

export default Home;
