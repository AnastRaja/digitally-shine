import React from "react";
import {Link, useLocation} from "react-router-dom";

const BlogCard = ({imageSrc, category, title, date, slug}) => {
  return (
    <Link to={`/blogdetails/${slug}`}>
      <div className="group shadow-md overflow-hidden cursor-pointer rounded-lg">
        <div className="overflow-hidden rounded-lg">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover 
                     transform transition-transform duration-300 ease-in-out
                     group-hover:scale-105"
          />
        </div>
        <div className="p-4 px-0">
          <p className="text-sm font-medium text-white opacity-70 mb-2">
            {category}
          </p>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-400 opacity-70">
            {" "}
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
