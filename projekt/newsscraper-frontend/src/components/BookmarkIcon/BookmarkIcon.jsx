import React from "react";
import Spinner from "../Spinner/Spinner";

import { BookmarkIconFalse, BookmarkIconTrue } from "./BookmarkSvgs";

const BookmarkIcon = ({ isBookmarked, ...props }) => {
  return (
    <span
      className="text-accent absolute top-3 right-5 sm:top-3 sm:right-4 opacity-40 hover:opacity-100 cursor-pointer"
      {...props}
    >
      {isBookmarked === null ? (
        <Spinner size="small" />
      ) : isBookmarked ? (
        <BookmarkIconTrue />
      ) : (
        <BookmarkIconFalse />
      )}
    </span>
  );
};

export default BookmarkIcon;
