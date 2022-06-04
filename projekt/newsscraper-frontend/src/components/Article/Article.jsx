import React, { useState, useEffect } from "react";

import useAuth from "../../hooks/useAuth/useAuth";
import axiosI from "../../api/axios";

import defaultNewsImg from "../../assets/defaultNewsImg.jpeg";
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon";
import { toast } from "react-toastify";

const Article = (props) => {
  const {
    id,
    title,
    url,
    source_name: sourceName,
    img_url: imgUrl,
    created,
  } = props.data;

  const BOOKMARK_BASE_URL = import.meta.env.VITE_ST_APIDOMAIN;
  const { isLoggedIn } = useAuth();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(null);

  const addBookmark = async () => {
    await axiosI
      .post(`${BOOKMARK_BASE_URL}/bookmark`, { article_id: id })
      .then((response) => {
        setIsBookmarked(true);
        toast.success("Bookmark added!");
      })
      .catch((error) => {
        console.error(error);
        const errorMsg = error.response.data.detail;
        toast.error(errorMsg ? errorMsg : "Error");
      });
  };

  const removeBookmark = async () => {
    await axiosI
      .delete(`${BOOKMARK_BASE_URL}/bookmark`, { data: { article_id: id } })
      .then((response) => {
        setIsBookmarked(false);
        toast.info("Bookmark removed");
      })
      .catch((error) => {
        console.error(error);
        const errorMsg = error.response.data.detail;
        toast.error(errorMsg ? errorMsg : "Error");
      });
  };

  const handleBookmarkBtnClick = async () => {
    if (isBookmarked) {
      await removeBookmark();
    } else {
      await addBookmark();
    }
  };

  const validateImageUrl = (url) => {
    // some of the img urls have `width` parameter specified in them, replace it with some value here (TODO fix in api to not deal with it here)
    if (sourceName === "BBC") {
      return url.replace("{width}", "150");
    }
    return url;
  };

  const getDate = (datetime) => {
    return datetime.split("T")[0];
  };

  return (
    <div
      onClick={() => {
        console.log(props.data);
        console.log(`isBookmarked: ${isBookmarked}`);
      }}
      onMouseEnter={(e) => {
        if (isLoggedIn) {
          setIsMouseOver(true);
          if (isBookmarked === null) {
            axiosI
              .post(`${BOOKMARK_BASE_URL}/bookmark/check`, {
                article_id: id,
              })
              .then((response) => {
                const is_bookmarked = response.data.is_bookmarked;
                setIsBookmarked(is_bookmarked);
              })
              .catch((error) => console.error(error));
          }
        }
      }}
      onMouseLeave={(e) => setIsMouseOver(false)}
      className="card w-full md:w-96 bg-base-100 shadow-xl"
    >
      <div className="card-body px-4 sm:px-8">
        <div className="flex flex-row items-center">
          <div className="flex-none avatar w-12 h-12 sm:w-16 sm:h-16">
            <img
              src={imgUrl ? validateImageUrl(imgUrl) : defaultNewsImg}
              alt="Article image"
              className="rounded-md float-left bg-base-100"
            />
          </div>
          <p className="ml-4 break-words">{title}</p>
          {isLoggedIn && isMouseOver && (
            <span onClick={(e) => handleBookmarkBtnClick()}>
              <BookmarkIcon isBookmarked={isBookmarked} />
            </span>
          )}
        </div>
        <div className="mt-4 py-1 card-actions justify-center">
          <div
            className="tooltip tooltip-bottom tooltip-secondary"
            data-tip={`${getDate(created)} | ${sourceName}`}
          >
            <a
              href={url}
              className="btn btn-secondary btn-outline btn-wide font-bold"
            >
              Read
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
