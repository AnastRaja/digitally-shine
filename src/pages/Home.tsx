import {Link} from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Zap,
  ChevronRight,
} from "lucide-react";
import {Button} from "../components/ui/button";
import {Card, CardContent} from "../components/ui/card";
import {useSEO, generatePageTitle} from "../utils/seo";
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
import web3 from "../assets/icon/web3.png";
import digitalmarketing from "../assets/icon/digitalmarketing.png";
import ai from "../assets/icon/AI.png";
import webdev from "../assets/icon/webdev.png";
import UIUX from "../assets/icon/UIUX.png";
import influncer from "../assets/icon/influncer.png";
import crowd from "../assets/icon/crowd.png";

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

      <section className="py-32 pb-0 bg-black ">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-11">
            <div>
              <img
                src={about}
                alt="about us"
                className="image_sidebar  rounded-lg"
              />
            </div>
            <div className="content-about">
              <span className="text-sm">About Us</span>
              <h2 className="">We Don’t Just Market. We Redefine Growth.</h2>
              <p className="font-light">
                Are you tired of the same old marketing strategies that just
                don't work anymore? The digital world is evolving at a breakneck
                pace, and you need a partner who can keep up. At Adroits
                Digital, we don't just follow trends. We create them. We're a
                team of innovative strategists, designers, and developers
                dedicated to helping your business thrive in the next generation
                of the internet.
              </p>
              <p>
                At Adroits Digital, we believe marketing isn’t about shouting
                the loudest; it’s about speaking the smartest.{" "}
              </p>
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
              <h2>Our Services That Power Your Growth</h2>
            </div>
            <div className="content-about h-full flex justify-end items-center">
              <p>
                Our expertise in{" "}
                <strong>Web3, AI, and Digital Marketing</strong> helps brands
                stay ahead of the curve. Step into the future with services that
                blend <strong>innovation, intelligence, and creativity.</strong>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
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
                <img src={web3} alt="" />
                <div>
                  <h3>WEB3 Marketing </h3>
                </div>
                <div>
                  <p>NFT, Metaverse, DAO & Blockchain growth hacks.</p>
                  <button className="flex items-center gap-2">
                    Learn More <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-service bg-image type1">
              <div className="content-service">
                <img src={digitalmarketing} alt="" />

                <div>
                  <h3>Digital Marketing</h3>
                </div>
                <div>
                  <p>SEO, PPC, Social, Content & Conversion Optimization.</p>
                  <button className="flex items-center gap-2">
                    Learn More <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-service bg-image typeai">
              <div className="content-service">
                <img src={ai} alt="" />

                <div>
                  <h3>AI Marketing</h3>
                </div>
                <div>
                  <p>
                    Smart automation, predictive campaigns &
                    hyper-personalization.
                  </p>
                  <button className="flex items-center gap-2">
                    Learn More <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-service bg-image type8">
              <div className="content-service">
                <img src={webdev} alt="" />

                <div>
                  <h3>Web Development & Web3 Development </h3>
                </div>
                <div>
                  <p>Custom websites, blockchain platforms, smart contracts.</p>
                  <button className="flex items-center gap-2">
                    Learn More <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-service bg-image type8">
              <div className="content-service">
                <img src={UIUX} alt="" />

                <div>
                  <h3>UI/UX & Graphics Designing </h3>
                </div>
                <div>
                  <p>
                    We design intuitive user interfaces and seamless user
                    experiences that keep your audience engaged.
                  </p>
                  <button className="flex items-center gap-2">
                    Learn More <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-service bg-image typemobile">
              <div className="content-service">
                <img src={influncer} alt="" />

                <div>
                  <h3>Mobile App Design & Development </h3>
                </div>
                <div>
                  <p>
                    We design and develop powerful mobile apps for both iOS and
                    Android.
                  </p>
                  <button className="flex items-center gap-2">
                    Learn More <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-service bg-image type9">
              <div className="content-service">
                <img src={digitalmarketing} alt="" />

                <div>
                  <h3>Digital Marketing Course </h3>
                </div>
                <div>
                  <p>
                    Learn from our industry experts and master the skills you
                    need to succeed in the digital landscape.
                  </p>
                  <button className="flex items-center gap-2">
                    Learn More <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-service bg-image type7">
              <div className="content-service">
                <img src={influncer} alt="" />

                <div>
                  <h3>PR & Influencer Marketing</h3>
                </div>
                <div>
                  <p>
                    Build authority, create trust, and amplify your brand
                    through strategic media coverage and influencer
                    collaborations.
                  </p>
                  <button className="flex items-center gap-2">
                    Learn More <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-service bg-image typecrowd">
              <div className="content-service">
                <img src={crowd} alt="" />

                <div>
                  <h3>Crowd Marketing</h3>
                </div>
                <div>
                  <p>
                    Drive organic buzz and community-driven engagement across
                    forums, blogs, and niche platforms.
                  </p>
                  <button className="flex items-center gap-2">
                    Learn More <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24  bg-[#151517] ">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-11">
            <div>
              <img
                src={why}
                alt="about us"
                className="image_sidebar why_image rounded-lg"
              />
            </div>
            <div className="content-about">
              <span>Why Us</span>
              <h2>
                {" "}
                What Makes Us <br />
                Different?
              </h2>
              <p className="text-18 font-secondary font-normal leading-[1.5] text-white opacity-[0.7] ">
                At <strong>Adroits Digital,</strong> we stand apart by blending
                the power of <strong>AI, Web3, and digital innovation</strong>{" "}
                into strategies that are built for tomorrow. Our approach is
                rooted in <strong>creativity and technology</strong>, delivering
                campaigns that are not only impactful but measurable and
                scalable. We go beyond automation by keeping the{" "}
                <strong>human connection alive</strong>, ensuring every
                interaction resonates with real people. From{" "}
                <strong>vision to execution</strong>, we transform bold ideas
                into{" "}
                <strong>
                  digital experiences that spark influence, drive growth, and
                  create lasting impact
                </strong>
                .
              </p>
              {/* <button className="">Know More About Us</button> */}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-14 mt-9">
            <div className="card-about">
              <div>
                <h3 className="!text-2xl">
                  Scalable Growth <br />
                  Strategies
                </h3>
                <p className="font-secondary text-secondary text-base leading-[1.5] -tracking-[.02em]  mb-8">
                  We design data-driven strategies that align with your goals,
                  helping you achieve consistent and sustainable business
                  growth. Every plan is built for measurable results.
                </p>
              </div>
              <img src={chart} alt="chart" className="!w-10 " />
            </div>
            <div className="card-about">
              <div>
                <h3 className="!text-2xl">
                  Expand Reach &<br /> Visibility
                </h3>
                <p className="font-secondary text-secondary text-base leading-[1.5] -tracking-[.02em]  mb-8">
                  With the right mix of SEO, PR, influencer marketing, and Web3
                  tactics, we increase your digital presence, attract qualified
                  traffic, and connect you with new audiences.
                </p>
              </div>
              <img src={rocket} alt="chart" className="!w-10 " />
            </div>
            <div className="card-about">
              <div>
                <h3 className="!text-2xl">Innovation That Delivers Impact</h3>
                <p className="font-secondary text-secondary text-base leading-[1.5] -tracking-[.02em]  mb-8">
                  Our team merges AI, creativity, and technology to craft
                  solutions that don’t just look good; but deliver real,
                  trackable outcomes for your brand.
                </p>
              </div>
              <img src={piechart} alt="chart" className="!w-10 " />
            </div>
          </div>
        </div>
      </section>
      <section className="py-32  pb-0 bg-black ">
        <div className="container bg_new py-16 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-11">
            <div className="content-about flex flex-col items-center text-center">
              <span className="border !bg-transparent border-1solid">
                Our Process
              </span>
              <h2> How We Make It Happen</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 ">
            <div className="card-about  !p-6 rounded-md">
              <div>
                <h3 className="!mb-0">Discover </h3>
                <p>Understand your brand, audience & goals.</p>
              </div>
              <div className="flex  mt-6">
                <img src={discover} alt="chart" className="!w-10" />
              </div>
            </div>
            <div className="card-about  !p-6 rounded-md">
              <div>
                <h3 className="!mb-0">Design </h3>
                <p>Craft strategies & visuals tailored for impact.</p>
              </div>
              <div className="flex  mt-6">
                <img src={design} alt="chart" className="!w-10" />
              </div>
            </div>
            <div className="card-about  !p-6 rounded-md">
              <div>
                <h3 className="!mb-0">Deploy </h3>
                <p>Execute with precision using the latest tools.</p>
              </div>
              <div className="flex  mt-6">
                <img src={rocket} alt="chart" className="!w-10" />
              </div>
            </div>
            <div className="card-about  !p-6 rounded-md ">
              <div>
                <h3 className="!mb-0">Dominate </h3>
                <p>Optimize, scale, and maximize ROI.</p>
              </div>
              <div className="flex  mt-6">
                <img src={growth} alt="chart" className="!w-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-0 pt-10 bg-black overflow-hidden">
        <TestimonialSection />
      </section>

      <section className="py-32 pt-0 bg-[#151517] ">
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
                <button className="inline-flex items-center px-3 py-3 !mt-0 border rounded-md font-medium text-gray-700 hero-button transition">
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
