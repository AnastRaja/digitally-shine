// LatestInsights.jsx
import React from "react";
import {ArrowRight} from "lucide-react";

const posts = [
  {
    id: 1,
    image: "https://picsum.photos/400/200?random=1",
    category: "Blogs",
    title:
      "New in NetSuite 2025.2: Smarter Planning and Decision-Making with AI",
    date: "02 September 2025",
  },
  {
    id: 2,
    image: "https://picsum.photos/400/200?random=2",
    category: "Blogs",
    title: "Unlocking Business Agility and Innovation with the NetSuite AI...",
    date: "29 August 2025",
  },
  {
    id: 3,
    image: "https://picsum.photos/400/200?random=3",
    category: "Blogs",
    title: "Top SuiteCommerce Features that Boost Online Sales",
    date: "07 August 2025",
  },
];

export default function LatestInsights() {
  return (
    <section className="py-16 container mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-16 items-start">
        {/* Left Side */}
        <div className="lg:col-span-1 flex flex-col items-start">
          <h2 className=" font-bold  mb-6 blog-text_ text-white">
            Latest insights
          </h2>
          <button className="inline-flex items-center px-5 py-3 border rounded-md font-medium text-gray-700 hero-button transition">
            See All Insights
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Right Side - Blog List */}
        <div className="lg:col-span-2 space-y-10 blog-list cursor-pointer">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col sm:flex-row gap-6 pb-8 border-b"
            >
              {/* Image */}
              <div className="sm:w-1/3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 sm:h-[160px] object-cover rounded-md"
                />
              </div>

              {/* Content */}
              <div className="sm:w-2/3 flex flex-col justify-center">
                <span className="text-sm text-gray-500">{post.category}</span>
                <h3 className="text-lg font-medium text-gray-800 mt-1 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
