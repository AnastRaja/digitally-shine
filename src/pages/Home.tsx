import {Link} from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import {Button} from "../components/ui/button";
import {Card, CardContent} from "../components/ui/card";
import {useSEO, generatePageTitle} from "../utils/seo";
import HeroSlider from "../components/HeroSlider";
import chart from "../assets/chart.svg";
import rocket from "../assets/rocket.svg";
import piechart from "../assets/customer-service.svg";
import about from "../assets/about-us.png";
import why from "../assets/why.png";
import CountUp from "react-countup";
import Blogsection from "../components/BlogsectionHome";
import TestimonialSection from "@/components/TestimonialSection";

const Home = () => {
  useSEO({
    title: generatePageTitle("Home"),
    description:
      "Professional marketing agency driving growth through innovative strategies. SEO, social media, content marketing, and brand development services.",
    keywords:
      "marketing agency, digital marketing, SEO, social media marketing, brand development, content marketing",
    canonical: window.location.origin,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
      text:
        "Working with this team transformed our online presence. Our leads increased by 300% in just 6 months.",
    },
    {
      name: "Michael Chen",
      company: "GrowthCorp",
      rating: 5,
      text:
        "The most professional marketing team we've worked with. Their strategic approach delivered exceptional results.",
    },
    {
      name: "Emily Rodriguez",
      company: "Innovate Solutions",
      rating: 5,
      text:
        "Outstanding service and incredible ROI. They truly understand modern marketing and deliver on their promises.",
    },
  ];

  const stats = [
    {number: "500+", label: "Projects Completed"},
    {number: "98%", label: "Client Satisfaction"},
    {number: "250%", label: "Average ROI Increase"},
    {number: "24/7", label: "Support Available"},
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSlider />
      {/* <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Where Innovation Meets
              <span className="text-gradient block mt-2">Possibilities</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              We provide future-ready marketing solutions that align with your business goals. 
              Drive growth, build brand authority, and achieve measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-background text-lg px-8 py-4">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-32 bg-black ">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-6xl font-medium text-white mb-2">
                <CountUp end={100} duration={2.75} suffix=" +" />
              </div>
              <div className="text-primary-foreground/80 text-[18px]">
                Customers globally
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-6xl font-medium text-white mb-2">
                <CountUp end={52} duration={2.75} suffix=" +" />
              </div>
              <div className="text-primary-foreground/80 text-[18px]">
                Experts on team
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-6xl font-medium text-white mb-2">
                <CountUp end={10} duration={2.75} suffix=" +" />
              </div>
              <div className="text-primary-foreground/80 text-[18px]">
                Countries served
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-6xl font-medium text-white mb-2">
                <CountUp end={7} duration={2.75} suffix=" +" />
              </div>
              <div className="text-primary-foreground/80 text-[18px]">
                Years of experience
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 pt-0 pb-0 bg-black ">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-11">
            <div>
              <img src={about} alt="about us" />
            </div>
            <div className="content-about">
              <span>About Us</span>
              <h2>We Are The Best Marketing Agency</h2>
              <p>
                We provide future-ready solutions aligning with your business
                goals. Oracle NetSuite, the #1 cloud ERP solution; we implement,
                customize, and integrate seamlessly.
              </p>
              <button className="">Know More About Us</button>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="card-about">
              <img src={chart} alt="chart" />
              <h3>Future Vision</h3>
              <p>
                We are Adroits Digital, the marketing masters you need. We help
                you grow your business with web3 and digital marketing
                solutions.
              </p>
            </div>
            <div className="card-about">
              <img src={rocket} alt="chart" />
              <h3>Strategic Planning</h3>
              <p>
                We plan strategies for your business growth. We not only make
                you visible online but also drive traffic and lead to your
                business.
              </p>
            </div>
            <div className="card-about">
              <img src={piechart} alt="chart" />
              <h3>Web3 Solution</h3>
              <p>
                We are specialized in web3 marketing services. We brand your
                web3 business including blockchain marketing, crypto token
                listing, blockchain and Ai product marketing.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding  bg-black">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 items-center">
            <div className="content-about">
              <span>Our Solutions</span>
              <h2>Web3 and Digital Marketing Solutions for You</h2>
            </div>
            <div className="content-about">
              <p>
                We provide future-ready solutions aligning with your business
                goals. Oracle NetSuite, the #1 cloud ERP solution; we implement,
                customize, and integrate seamlessly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-primary/20 hover:border-primary/40 transition-smooth group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:glow-effect transition-smooth">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })} */}
            <div className="card-service bg-image type1">
              <div className="content-service">
                <h3>SEO Service </h3>
                <p>
                  We are Adroits Digital, the marketing masters you need. We
                  help you grow your business with web3 and digital marketing
                  solutions.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type2">
              <div className="content-service">
                <h3>WEB3 Marketing </h3>
                <p>
                  We are Adroits Digital, the marketing masters you need. We
                  help you grow your business with web3 and digital marketing
                  solutions.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type3">
              <div className="content-service">
                <h3>Branding </h3>
                <p>
                  We are Adroits Digital, the marketing masters you need. We
                  help you grow your business with web3 and digital marketing
                  solutions.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type4">
              <div className="content-service">
                <h3>Google My Business </h3>
                <p>
                  We are Adroits Digital, the marketing masters you need. We
                  help you grow your business with web3 and digital marketing
                  solutions.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type5">
              <div className="content-service">
                <h3>Social Media Marketing</h3>
                <p>
                  We are Adroits Digital, the marketing masters you need. We
                  help you grow your business with web3 and digital marketing
                  solutions.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type6">
              <div className="content-service">
                <h3>Content Marketing</h3>
                <p>
                  We are Adroits Digital, the marketing masters you need. We
                  help you grow your business with web3 and digital marketing
                  solutions.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type7">
              <div className="content-service">
                <h3>Influencer Marketing </h3>
                <p>
                  We are Adroits Digital, the marketing masters you need. We
                  help you grow your business with web3 and digital marketing
                  solutions.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type8">
              <div className="content-service">
                <h3>Web Designing and Development </h3>
                <p>
                  We are Adroits Digital, the marketing masters you need. We
                  help you grow your business with web3 and digital marketing
                  solutions.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type9">
              <div className="content-service">
                <h3>Digital Marketing Course and Internship </h3>
                <p>
                  We are Adroits Digital, the marketing masters you need. We
                  help you grow your business with web3 and digital marketing
                  solutions.
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 pt-0 pb-0 bg-black ">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-11">
            <div className="content-about">
              <span>Why Us</span>
              <h2>Best Digital Marketing Company for Your Business</h2>
              <p>
                Adroits Digital is a growing digital marketing company with the
                best strategic planning and offering value to your businesses.
                Our purpose is to provide you with a high ROI (return on
                investment) for any business. We offer various online services
                including Web3 marketing, graphics designing, web design and
                development. Join us in this digital journey.
              </p>
              {/* <button className="">Know More About Us</button> */}
            </div>
            <div>
              <img src={why} alt="about us" />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-14 mt-24">
            <div className="card-about">
              <img src={chart} alt="chart" />
              <h3>Smart Strategic Solution</h3>
              <p>
                We analyze your business goals, target audience, and competitors
                to craft a smart strategic solution that suits your needs.
              </p>
            </div>
            <div className="card-about">
              <img src={rocket} alt="chart" />
              <h3>Increase Traffic</h3>
              <p>
                We use proven techniques such as SEO, SMO, content marketing,
                and web3 marketing to increase your website traffic and reach
                more potential customers.
              </p>
            </div>
            <div className="card-about">
              <img src={piechart} alt="chart" />
              <h3>24/7 Support</h3>
              <p>
                We are always available to assist you with any questions,
                issues, or feedback you may have. We provide 24/7 support via
                phone, email, chat, and social media.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-0 pt-10 bg-black overflow-hidden">
        <TestimonialSection />
      </section>

      <section className="py-32 pt-0 bg-black ">
        <Blogsection />
      </section>

      {/* Testimonials Section */}
      {/* <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-primary fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="section-padding bg-gradient-primary text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join hundreds of successful businesses that have transformed their
              marketing with our proven strategies and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 text-lg px-8 py-4"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
