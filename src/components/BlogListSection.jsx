import React from 'react';
import BlogCard from './BlogCard';

// Sample data for the blog posts
const blogPosts = [
  {
    imageSrc: 'https://picsum.photos/400/200?random=1',
    category: 'Blogs',
    title: 'The Future of AI in Modern Business',
    date: 'September 10, 2025'
  },
  {
    imageSrc: 'https://picsum.photos/400/200?random=2',
    category: 'Technology',
    title: 'A Deep Dive into Cloud Computing Security',
    date: 'September 05, 2025'
  },
  {
    imageSrc: 'https://picsum.photos/400/200?random=3',
    category: 'Marketing',
    title: 'Content Strategy for a Digital-First World',
    date: 'August 28, 2025'
  },
  {
    imageSrc: 'https://picsum.photos/400/200?random=4',
    category: 'Finance',
    title: 'Blockchain and Its Impact on Global Transactions',
    date: 'August 20, 2025'
  },
  {
    imageSrc: 'https://picsum.photos/400/200?random=5',
    category: 'Productivity',
    title: 'Top 5 Tools to Boost Your Remote Work Efficiency',
    date: 'August 15, 2025'
  },
  {
    imageSrc: 'https://picsum.photos/400/200?random=6',
    category: 'Design',
    title: 'Minimalism in UI/UX: Less is More',
    date: 'July 30, 2025'
  },
  {
    imageSrc: 'https://picsum.photos/400/200?random=7',
    category: 'Cybersecurity',
    title: 'Understanding Phishing Scams and How to Avoid Them',
    date: 'July 25, 2025'
  },
  {
    imageSrc: 'https://picsum.photos/400/200?random=8',
    category: 'Innovation',
    title: 'The Role of IoT in Smart Cities',
    date: 'July 18, 2025'
  },
  {
    imageSrc: 'https://picsum.photos/400/200?random=9',
    category: 'Career',
    title: 'Navigating Your Career in the Tech Industry',
    date: 'July 10, 2025'
  },
  {
    imageSrc: 'https://picsum.photos/400/200?random=10',
    category: 'Development',
    title: 'Getting Started with Serverless Architecture',
    date: 'June 25, 2025'
  }
];
const BlogSection = () => {
  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-gray-900 mb-12 text-center sm:text-left">
          Popular Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              imageSrc={post.imageSrc}
              category={post.category}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;