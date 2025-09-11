// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
// import { Button } from '../components/ui/button';
// import { useSEO, generatePageTitle } from '../utils/seo';
// import blogsData from '../data/blogs.json';

// interface BlogPost {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
//   content: string;
//   date: string;
//   readTime: string;
//   category: string;
//   featured: boolean;
// }

// const BlogList = () => {
//   const [blogs, setBlogs] = useState<BlogPost[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('All');

//   useSEO({
//     title: generatePageTitle('Marketing Blog'),
//     description: 'Stay updated with the latest marketing trends, strategies, and insights. Expert tips on digital marketing, SEO, social media, and brand development.',
//     keywords: 'marketing blog, digital marketing tips, SEO strategies, social media marketing, content marketing, brand development',
//     canonical: `${window.location.origin}/blog`,
//   });

//   useEffect(() => {
//     setBlogs(blogsData as BlogPost[]);
//   }, []);

//   const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category)))];

//   const filteredBlogs = selectedCategory === 'All' 
//     ? blogs 
//     : blogs.filter(blog => blog.category === selectedCategory);

//   const featuredBlogs = blogs.filter(blog => blog.featured);
//   const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="hero-gradient section-padding text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="container-custom relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
//               Marketing <span className="text-gradient">Insights</span>
//             </h1>
//             <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
//               Stay ahead with expert insights, proven strategies, and the latest trends 
//               in digital marketing, SEO, and brand development.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section className="py-8 bg-muted">
//         <div className="container-custom">
//           <div className="flex flex-wrap gap-3 justify-center">
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 onClick={() => setSelectedCategory(category)}
//                 className={selectedCategory === category 
//                   ? "btn-primary" 
//                   : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
//                 }
//               >
//                 <Tag className="w-4 h-4 mr-2" />
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       {selectedCategory === 'All' && featuredBlogs.length > 0 && (
//         <section className="section-padding section-gradient">
//           <div className="container-custom">
//             <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
//               Featured <span className="text-gradient">Articles</span>
//             </h2>
            
//             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//               {featuredBlogs.map((blog) => (
//                 <Card key={blog.id} className="bg-card border-primary/20 group hover:border-primary/40 transition-smooth">
//                   <CardHeader>
//                     <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
//                       <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
//                         {blog.category}
//                       </span>
//                       <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
//                         Featured
//                       </span>
//                     </div>
//                     <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
//                       <Link to={`/blog/${blog.slug}`}>
//                         {blog.title}
//                       </Link>
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
//                       {blog.description}
//                     </p>
                    
//                     <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
//                       <div className="flex items-center space-x-4">
//                         <div className="flex items-center space-x-1">
//                           <Calendar className="w-4 h-4" />
//                           <span>{formatDate(blog.date)}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <Clock className="w-4 h-4" />
//                           <span>{blog.readTime}</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <Link to={`/blog/${blog.slug}`}>
//                       <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full group">
//                         Read More
//                         <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Regular Blog Posts */}
//       <section className="section-padding bg-muted">
//         <div className="container-custom">
//           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
//             {selectedCategory === 'All' ? 'Latest' : selectedCategory} <span className="text-gradient">Articles</span>
//           </h2>
          
//           {regularBlogs.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//               {regularBlogs.map((blog) => (
//                 <Card key={blog.id} className="bg-card border-primary/20 group hover:border-primary/40 transition-smooth">
//                   <CardHeader>
//                     <div className="text-sm text-muted-foreground mb-3">
//                       <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
//                         {blog.category}
//                       </span>
//                     </div>
//                     <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
//                       <Link to={`/blog/${blog.slug}`}>
//                         {blog.title}
//                       </Link>
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
//                       {blog.description}
//                     </p>
                    
//                     <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
//                       <div className="flex items-center space-x-4">
//                         <div className="flex items-center space-x-1">
//                           <Calendar className="w-4 h-4" />
//                           <span>{formatDate(blog.date)}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <Clock className="w-4 h-4" />
//                           <span>{blog.readTime}</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <Link to={`/blog/${blog.slug}`}>
//                       <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full group">
//                         Read More
//                         <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-16">
//               <p className="text-xl text-muted-foreground mb-4">
//                 No articles found in the "{selectedCategory}" category.
//               </p>
//               <Button 
//                 onClick={() => setSelectedCategory('All')}
//                 className="btn-primary"
//               >
//                 View All Articles
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Newsletter CTA */}
//       <section className="section-padding bg-gradient-primary text-center">
//         <div className="container-custom">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//               Stay Updated
//             </h2>
//             <p className="text-xl text-white/90 mb-8 leading-relaxed">
//               Subscribe to our newsletter and never miss the latest marketing insights, 
//               strategies, and industry trends delivered straight to your inbox.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow"
//               />
//               <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BlogList;

import React from 'react'
import BlogListSection from "../components/BlogListSection"
import { useSEO, generatePageTitle } from '../utils/seo';

function BlogList() {
  useSEO({
    title: generatePageTitle('Marketing Blog'),
    description: 'Stay updated with the latest marketing trends, strategies, and insights. Expert tips on digital marketing, SEO, social media, and brand development.',
    keywords: 'marketing blog, digital marketing tips, SEO strategies, social media marketing, content marketing, brand development',
    canonical: `${window.location.origin}/blog`,
  });
  return (
     <main className=" mx-auto px-4 sm:px-6 lg:px-8 section-padding py-30 bg-black">
      <div className='container'>
<BlogListSection/>
      </div>
     </main>
  )
}

export default BlogList