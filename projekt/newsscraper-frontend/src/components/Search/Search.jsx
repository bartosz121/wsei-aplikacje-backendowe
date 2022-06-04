import React, { useState, useEffect } from "react";
import axios from "axios";

import Article from "../Article/Article";
import Spinner from "../Spinner/Spinner";
import { useDebounce } from "use-debounce";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [debouncedUserInput] = useDebounce(userInput, 700);

  const fetchNews = async () => {
    setLoading(true);
    const API_BASE_URL = import.meta.env.VITE_NEWSSCRAPER_API_URL;
    const url = `${API_BASE_URL}?search=${debouncedUserInput}`;
    const response = await axios.get(url);
    setNews([...JSON.parse(response.data.result)]);
    setLoading(false);
  };

  useEffect(() => {
    if (debouncedUserInput.trim() !== "") {
      fetchNews();
    }
  }, [debouncedUserInput]);

  return (
    <>
      <div className="mt-6 flex flex-col items-center justify-center">
        <input
          type="text"
          onDoubleClick={(e) => {
            news.forEach((n) => console.log(n));
          }}
          onChange={(e) => setUserInput((state) => (state = e.target.value))}
          placeholder="Type here"
          className="input md:input-lg input-bordered input-secondary w-4/5 sm:w-full max-w-md"
        />
        <div className="my-4 flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4">
          {loading ? (
            <Spinner />
          ) : news.length > 0 ? (
            news.map((article, index) => {
              return <Article key={index} data={article} />;
            })
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
