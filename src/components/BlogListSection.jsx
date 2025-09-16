import React, {useEffect, useState} from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Zap,
  ChevronRight,
} from "lucide-react";
// Sample data for the blog posts

const BlogSection = () => {
  useEffect(() => {
    getAllblogs();
  }, []);

  const [blogs, setblogs] = useState([]);
  const [category, setcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getAllblogs = async () => {
    var resp = await axios.get("https://blogapiadroits.onrender.com/api/blogs");
    setblogs(resp.data);
    var category = [];
    for (let i = 0; i < resp.data.length; i++) {
      const element = resp.data[i];
      category.push(element.category);
    }
    setcategory([...new Set(category)]);
  };

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((post) => post.category === selectedCategory);
  const getBlogs = async (cat) => {
    setSelectedCategory(cat);

    // var arr = [];

    // for (let i = 0; i < blogs.length; i++) {
    //   const element = blogs[i];
    //   if (element.category === cat) {
    //     arr.push(element);
    //   }
    // }
    // setblogs(arr);
  };

  return (
    <div className="bg-black py-16 ">
      <div className="max-w-7xl mx-auto">
        {/* <div className="flex justify-between items-center mb-12 flex-col sm:flex-row gap-6">
          <h2 className="text-6xl font-bold text-gray-900  text-center sm:text-left">
            Popular Blogs
          </h2>
        </div> */}
      </div>
      <div class="row g-3">
        <div className="col-12 col-lg-3 p-3">
          {/* Mobile: Select dropdown */}
          <div className="block lg:hidden">
            <Select
              value={selectedCategory}
              onValueChange={(value) => getBlogs(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                {category.map((cat, i) => (
                  <SelectItem key={i} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop: Button list */}
          <div className="hidden lg:flex flex-col justify-center gap-2 flex-wrap">
            {/* All button */}
            <button
              className={`header-button blog_button_cat blog_button ${
                selectedCategory === "All" ? "active" : ""
              }`}
              onClick={() => getBlogs("All")}
            >
              All <ChevronRight />
            </button>

            {/* Dynamic category buttons */}
            {category.map((cat, i) => (
              <button
                key={i}
                className={`header-button blog_button_cat blog_button !border-none ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => getBlogs(cat)}
              >
                {cat} <ChevronRight />
              </button>
            ))}
          </div>
        </div>

        <div class="col-12 col-lg-9  p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post, index) => (
              <BlogCard
                key={index}
                slug={post.slug}
                imageSrc={post.imageUrl}
                category={post.category}
                title={post.title}
                date={post.createdAt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
