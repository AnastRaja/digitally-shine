import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useSEO, generatePageTitle } from "../utils/seo";
import HeroSlider from "../components/HeroSlider";
import chart from "../assets/chart.svg";
import rocket from "../assets/rocket.svg";
import piechart from "../assets/innovation.svg";
import discover from "../assets/descover.svg";
import growth from "../assets/growth.svg";
import design from "../assets/design.svg";
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
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "250%", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSlider />


      {/* Stats Section */}
      {/* <section className="py-32 bg-black ">
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
      </section> */}
      <section className="py-32 pb-0 bg-black ">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-11">
            <div>
              <img src={about} alt="about us" />
            </div>
            <div className="content-about">
              <span>About Us</span>
              <h2>We Don’t Just Market. We Redefine Growth.</h2>
              <p className="font-light">
                Are you tired of the same old marketing strategies that just don't work anymore? The digital world is evolving at a breakneck pace, and you need a partner who can keep up. At Adroits Digital, we don't just follow trends. We create them. We're a team of innovative strategists, designers, and developers dedicated to helping your business thrive in the next generation of the internet.
              </p>
              <p>At Adroits Digital, we believe marketing isn’t about shouting the loudest; it’s about speaking the smartest. </p>
              <button className="">Know More About Us</button>
            </div>
          </div>


        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding  bg-black">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 items-center">
            <div className="content-about">
              <span>Our Solutions</span>
              <h2>Our Services That Power Your Growth
              </h2>
            </div>
            <div className="content-about">
              <p>
                Our expertise in <strong>Web3, AI, and Digital Marketing</strong> helps brands stay ahead of the curve. Step into the future with services that blend <strong>innovation, intelligence, and creativity.</strong>
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
            <div className="card-service bg-image type2">
              <div className="content-service">
                <h3>WEB3 Marketing </h3>
                <p>
                  NFT, Metaverse, DAO & Blockchain growth hacks.

                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type1">
              <div className="content-service">
                <h3>Digital Marketing</h3>
                <p>
                  SEO, PPC, Social, Content & Conversion Optimization.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image typeai">
              <div className="content-service">
                <h3>AI Marketing</h3>
                <p>
                  Smart automation, predictive campaigns & hyper-personalization.

                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type8">
              <div className="content-service">
                <h3>Web Development & Web3 Development </h3>
                <p>
                  Custom websites, blockchain platforms, smart contracts.

                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type8">
              <div className="content-service">
                <h3>UI/UX & Graphics Designing </h3>
                <p>
                  We design intuitive user interfaces and seamless user experiences that keep your audience engaged.

                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image typemobile">
              <div className="content-service">
                <h3>Mobile App Design & Development  </h3>
                <p>
                  We design and develop powerful mobile apps for both iOS and Android.

                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type9">
              <div className="content-service">
                <h3>Digital Marketing Course  </h3>
                <p>
                  Learn from our industry experts and master the skills you need to succeed in the digital landscape.

                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image type7">
              <div className="content-service">
                <h3>PR & Influencer Marketing</h3>
                <p>
                  Build authority, create trust, and amplify your brand through strategic media coverage and influencer collaborations.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="card-service bg-image typecrowd">
              <div className="content-service">
                <h3>Crowd Marketing</h3>
                <p>
                  Drive organic buzz and community-driven engagement across forums, blogs, and niche platforms.

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





          </div>
        </div>
      </section>
      <section className="py-32  pt-0 bg-black ">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-11">

            <div className="content-about">
              <span>Our Process</span>
              <h2> How We Make It Happen
              </h2>

            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 ">
            <div className="card-about">
              <img src={discover} alt="chart" />
              <h3>Discover </h3>
              <p>
                Understand your brand, audience & goals.
              </p>
            </div>
            <div className="card-about">
              <img src={design} alt="chart" />
              <h3>Design
              </h3>
              <p>
                Craft strategies & visuals tailored for impact.
              </p>
            </div>
            <div className="card-about">
              <img src={rocket} alt="chart" />
              <h3>Deploy
              </h3>
              <p>
                Execute with precision using the latest tools.

              </p>
            </div>
            <div className="card-about">
              <img src={growth} alt="chart" />
              <h3>Dominate
              </h3>
              <p>
                Optimize, scale, and maximize ROI.

              </p>
            </div>
          </div>

        </div>
      </section>
      <section className="py-32 pt-0 pb-0 bg-black ">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-11">
             <div>
              <img src={why} alt="about us" />
            </div>
            <div className="content-about">
              <span>Why Us</span>
              <h2> What Makes Us <br />Different?</h2>
              <p>
                At <strong>Adroits Digital,</strong> we stand apart by blending the power of <strong>AI, Web3, and digital innovation</strong> into strategies that are built for tomorrow. Our approach is rooted in <strong>creativity and technology</strong>, delivering campaigns that are not only impactful but measurable and scalable. We go beyond automation by keeping the <strong>human connection alive</strong>, ensuring every interaction resonates with real people. From <strong>vision to execution</strong>, we transform bold ideas into <strong>digital experiences that spark influence, drive growth, and create lasting impact</strong>.

              </p>
              {/* <button className="">Know More About Us</button> */}
            </div>
           
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-14 mt-24">
            <div className="card-about">
              <img src={chart} alt="chart" />
              <h3>Scalable Growth Strategies</h3>
              <p>
                We design data-driven strategies that align with your goals, helping you achieve consistent and sustainable business growth. Every plan is built for measurable results.

              </p>
            </div>
            <div className="card-about">
              <img src={rocket} alt="chart" />
              <h3>Expand Reach & Visibility
              </h3>
              <p>
                With the right mix of SEO, PR, influencer marketing, and Web3 tactics, we increase your digital presence, attract qualified traffic, and connect you with new audiences.

              </p>
            </div>
            <div className="card-about">
              <img src={piechart} alt="chart" />
              <h3>Innovation That Delivers Impact
              </h3>
              <p>
                Our team merges AI, creativity, and technology to craft solutions that don’t just look good; but deliver real, trackable outcomes for your brand.

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

      

      {/* CTA Section */}
      <section className="section-padding  text-center CTA_section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
             From Ideas to Impact

            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We transform your vision into digital experiences that scale.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                {/* <Button
                  size="lg"
                  variant="default"
                  className="inline-flex items-center px-5 py-3 border rounded-md font-medium text-gray-700 hero-button transition hover:bg-primary"
                >
                  Turn My Idea Into Reality

                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button> */}
                 <button className="inline-flex items-center px-5 py-3 !mt-0 border rounded-md font-medium text-gray-700 hero-button transition">
                             Turn My Idea Into Reality
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
