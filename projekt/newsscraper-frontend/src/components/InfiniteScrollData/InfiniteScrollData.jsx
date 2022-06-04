import React, { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import Spinner from "../Spinner/Spinner";

const InfiniteScrollData = ({ url, MapComponent, axiosInstance }) => {
  const [data, setData] = useState([]);
  const [dataPage, setDataPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getFetchUrl = () => {
    return `${url}?page=${dataPage}`;
  };

  const getValidJson = (o) => {
    if (typeof o === "string") {
      return JSON.parse(o);
    } else {
      return o;
    }
  };

  const fetchData = async () => {
    const response = await axiosInstance.get(getFetchUrl());
    setData((state) => [...state, ...getValidJson(response.data.result)]);
    setDataPage((state) => state + 1);
    setHasMore(response.data.hasNext);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InfiniteScroll
      className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4"
      dataLength={data.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<Spinner />}
    >
      {data.map((item, index) => (
        <MapComponent key={index} data={item} />
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollData;
