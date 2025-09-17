import React, {useEffect, useState} from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {Link} from "react-router-dom";
import ContactGlobal from "./ContactGlobal";

import {FaSquareFacebook} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import {FaLink} from "react-icons/fa";
import {useParams} from "react-router-dom";
import axios from "axios";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import BlogsDetailsList from "../components/BlogsDetailsList";
import {useSEO, generatePageTitle} from "../utils/seo";

export default function NetSuiteBlogHero() {
  const {slug} = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: blog ? generatePageTitle(blog.title) : "Loading Blog...",
    description:
      blog?.metaDescription ||
      blog?.excerpt ||
      "Read our latest blog from the best digital marketing company.",
    keywords:
      blog?.keywords ||
      "Digital marketing company, top digital marketing company, best digital marketing company, digital marketing services, web3 marketing, web3 marketing service, branding.",
    canonical: window.location.href,
  });

  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    axios
      .get(`https://blogapiadroits.onrender.com/api/blogs/${slug}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <p className="text-center py-20">Loading blog...</p>;
  }

  if (!blog) {
    return <p className="text-center py-20">Blog not found</p>;
  }

  return (
    <div>
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 section-padding py-30 bg-black blog-padding">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="/">Home</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="/blog">Blogs</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="blog_span_titile">
                {blog.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="xxl:max-w-[960px] max-w-[890px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-10">
            {/* Main column */}
            <div className="lg:col-span-12">
              <div className="inline-block mb-4">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full">
                  {blog.category || "Blog"}
                </span>
              </div>

              <h1 className="mt-1 text-4xl sm:text-5xl font-semibold text-white">
                {blog.title}
              </h1>

              <div className="mt-3 flex items-center justify-between sm:space-x-8">
                <time className="text-sm text-white opacity-70 font-medium">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>

                <div className="ml-auto sm:ml-6 flex items-center space-x-3">
                  <span className="text-sm text-white opacity-70 font-medium">
                    Share
                  </span>

                  {/* Social Share */}
                  <a href="#" className="p-2 rounded-md bg-[#2a2a2a]">
                    <FaSquareFacebook />
                  </a>
                  <a href="#" className="p-2 rounded-md bg-[#2a2a2a]">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="p-2 rounded-md bg-[#2a2a2a]">
                    <FaLink />
                  </a>
                </div>
              </div>

              {/* Featured Image */}
              {blog.imageUrl && (
                <div className="mt-8">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                </div>
              )}

              {/* Blog Content */}
              <div className="mt-8 prose prose-slate max-w-none">
                <div
                  className="content-area"
                  dangerouslySetInnerHTML={{__html: blog.body}}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
      <section className="py-32 pt-0 pb-0 bg-[#151517] relative before_class">
        <BlogsDetailsList currentSlug={slug} />
      </section>
      <div>
        <ContactGlobal />{" "}
      </div>
    </div>
  );
}
