import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useSEO, generateBlogTitle } from '../utils/seo';
import blogsData from '../data/blogs.json';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (!slug) return;

    const foundBlog = (blogsData as BlogPost[]).find(b => b.slug === slug);
    setBlog(foundBlog || null);

    if (foundBlog) {
      // Get related blogs from same category
      const related = (blogsData as BlogPost[])
        .filter(b => b.category === foundBlog.category && b.id !== foundBlog.id)
        .slice(0, 3);
      setRelatedBlogs(related);
    }
  }, [slug]);

  // SEO setup
  useSEO({
    title: blog ? generateBlogTitle(blog.title) : 'Blog Post | Marketing Agency',
    description: blog?.description || 'Read our latest marketing insights and strategies.',
    keywords: blog ? `${blog.category}, marketing, ${blog.title}` : 'marketing blog',
    canonical: `${window.location.origin}/blog/${slug}`,
    ogType: 'article',
  });

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-8 bg-muted">
        <div className="container-custom">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:text-primary-dark transition-smooth font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Blog Header */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  <Tag className="w-3 h-3 mr-1 inline" />
                  {blog.category}
                </span>
                {blog.featured && (
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {blog.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                {blog.description}
              </p>
              
              <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
              
              <Button 
                onClick={handleShare}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <div 
                  className="prose prose-lg max-w-none text-foreground
                    prose-headings:text-foreground prose-headings:font-bold
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-gradient
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-ul:text-muted-foreground prose-li:mb-2
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                Related <span className="text-gradient">Articles</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Card key={relatedBlog.id} className="bg-card border-primary/20 group hover:border-primary/40 transition-smooth">
                    <CardContent className="p-6">
                      <div className="text-sm text-muted-foreground mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {relatedBlog.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth mb-3 line-clamp-2">
                        <Link to={`/blog/${relatedBlog.slug}`}>
                          {relatedBlog.title}
                        </Link>
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                        {relatedBlog.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(relatedBlog.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{relatedBlog.readTime}</span>
                        </div>
                      </div>
                      
                      <Link to={`/blog/${relatedBlog.slug}`}>
                        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                          Read Article
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Apply These Strategies?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let our expert team help you implement these proven marketing strategies 
              and achieve exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 px-8 py-4">
                  Read More Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;