// LatestInsights.jsx
import React, {useEffect, useState} from "react";
import {ArrowRight, ArrowUpRight} from "lucide-react";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";

export default function LatestInsights({currentSlug}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllblogs();
  }, [currentSlug]);

  const getAllblogs = async () => {
    const resp = await axios.get(
      "https://blogapiadroits.onrender.com/api/blogs"
    );

    // Filter out the current blog
    const filtered = resp.data.filter((post) => post.slug !== currentSlug);

    // Take only the first 4 after filtering
    setBlogs(filtered.slice(0, 4));
  };

  return (
    <section className="py-16 pb-1 container mx-auto px-6 relative">
      <div className="grid lg:grid-cols-2 lg:gap-16 items-start">
        {/* Left Side */}
        <div className="lg:col-span-1 flex flex-col items-start">
          {/* <div className="content-about">
            <span>Our Blog</span>
          </div> */}
          <h2 className=" font-bold  mb-6 blog-text_ text-white">
            Recent insights
          </h2>
          <p className="text-[1rem]">
            Our blog delivers fresh perspectives on business growth, innovation,
            leadership, and operational efficiency.
          </p>
        </div>

        {/* Right Side - Blog List */}
      </div>
      <div className="grid lg:grid-cols-2 gap-3 items-start mt-14">
        {blogs.map((post) => (
          <Link to={`/blogdetails/${post.slug}`} key={post.id}>
            <div className="flex flex-col sm:flex-row gap-11 p-3 rounded-md bg-black blog_card_section">
              {/* Image */}
              <div className="sm:w-1/3">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-30 sm:h-[130px] object-cover rounded-md"
                />
              </div>

              {/* Content */}
              <div className="sm:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 blog_lable_span">
                    {post.category}
                  </span>
                  <p className="text-[12px] text-white font-normal opacity-70">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <h3 className="text-lg font-medium text-white mt-1 mb-2 text-[1.5rem] linehight-blog">
                  {post.title}
                </h3>
                <div className="text-white flex flex-end  justify-end items-center ">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
