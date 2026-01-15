import React, { useState, useEffect } from 'react';
import { CheckCircle, Award, Users, TrendingUp, Heart, Target, Cpu, MousePointerClick, BarChart3, UserRound } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { useSEO, generatePageTitle } from '../utils/seo';
import VideoClip from "../assets/service/clip_about.webm";
import LOGO1 from "../assets/goggle.png";
import LOGO2 from "../assets/web3.png";
import LOGO3 from "../assets/branding.png";
import LOGO4 from "../assets/social.png";
import kmedit from "../assets/testi/KM-EDIT.png";
import infograph from "../assets/testi/ifography.png";
import lawblovks from "../assets/testi/lawblovks.png";
import { PenTool, FileText } from 'lucide-react';
import { Link } from 'react-router-dom'
import ContactGlobal from './ContactGlobal';
import TextFill from '../components/Textfill';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useSEO({
    title: generatePageTitle('About Us'),
    description: 'Learn about our professional marketing agency team, mission, and commitment to driving business growth through innovative marketing strategies.',
    keywords: 'about marketing agency, marketing team, company mission, professional marketers, marketing expertise',
    canonical: `${window.location.origin}/about`,
  });

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy we implement is designed to deliver measurable results and ROI for our clients.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships based on trust and transparency.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation First',
      description: 'We stay ahead of marketing trends to ensure our clients always have a competitive advantage.',
    },
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO & Founder',
      bio: 'With 15+ years in marketing, Sarah leads our strategic vision and client relationships.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'David Chen',
      role: 'Head of Digital Strategy',
      bio: 'David specializes in data-driven marketing strategies that deliver exceptional ROI.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      bio: 'Emily brings brands to life through compelling creative campaigns and visual storytelling.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Marcus Johnson',
      role: 'SEO Specialist',
      bio: 'Marcus ensures our clients dominate search results through cutting-edge SEO techniques.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
  ];

  const achievements = [
    { icon: Award, stat: '50+', label: 'Industry Awards' },
    { icon: Users, stat: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, stat: '250%', label: 'Average Growth' },
    { icon: CheckCircle, stat: '98%', label: 'Success Rate' },
  ];
  const features = [
    {
      title: "Built Around You",
      description: "We start with your goals, challenges, and users — not templates. Every strategy, system, and experience is tailored to how your business actually operates and scales.",
      icon: <PenTool className="w-8 h-8 text-[#a100ff]" />,
    },
    {
      title: "True Partnership, Not Hand-Offs",
      description: "You work directly with strategists, designers, and engineers as one team. Clear communication, fast iteration, and shared ownership keep execution aligned and efficient.",
      icon: <Users className="w-8 h-8 text-[#a100ff]" />,
    },
    {
      title: "Your Growth, Our Responsibility",
      description: "We track what matters — performance, impact, and ROI. Insights guide every decision so you can move faster, adapt smarter, and grow with confidence.",
      icon: <FileText className="w-8 h-8 text-[#a100ff]" />,
    },
  ];
  const milestones = [
    {
      title: "Strategy Before Execution",
      icon: <Target className="w-8 h-8 text-[#a100ff]" />,
      description: "Create, assign, and manage tasks with a drag-and-drop interface or calendar views. An intuitive interface means can quickly."
    },
    {
      title: "Technology as an Advantage",
      icon: <Cpu className="w-8 h-8 text-[#a100ff]" />,
      description: "AI, Web3, and automation aren’t add-ons for us. They’re embedded into how we plan, build, and scale digital solutions that stay ahead of change."
    },
    {
      title: "Design That Drives Action",
      icon: <MousePointerClick className="w-8 h-8 text-[#a100ff]" />,
      description: "Great design isn’t decoration. Our UI/UX decisions are grounded in behavior, usability, and conversion — ensuring every experience moves users forward."
    },
    {
      title: "Performance You Can Measure",
      icon: <BarChart3 className="w-8 h-8 text-[#a100ff]" />,
      description: "We define success with data, not opinions. From traffic and engagement to conversion and ROI, every initiative is tracked and optimized continuously."
    },
    {
      title: "Scalable by Design",
      icon: <TrendingUp className="w-8 h-8 text-[#a100ff]" />,
      description: "What we build today is engineered to scale tomorrow. Our strategies and systems evolve with your business, not against it."
    },
    {
      title: "Human-Centered Execution",
      icon: <UserRound className="w-8 h-8 text-[#a100ff]" />,
      description: "Automation improves efficiency — people create impact. We balance intelligent systems with human insight to keep your brand authentic and relatable."
    }
  ];
  const testimonials = [
    {
      quote: "Adroits Digital helped Infography.in boost visibility and drive higher profits with their smart marketing strategies. They are a team you can truly rely on for growth.",
      name: "Manoj",
      role: "CEO of Infography.in",
      company: "Infography.in",
      image: lawblovks
    },
    {
      quote: "We’ve partnered with Adroits Digital on several projects, and their expertise in social media posters and handling has always stood out. Their creative approach consistently takes our projects to the next level.",
      name: "Senthil",
      role: "Founder KM Edit",
      company: "KM Edit",
      image: kmedit
    },
    {
      quote: "Adroits Digital has done an outstanding job with the UI, providing timely assistance and delivering the project right on schedule.",
      name: "Dhriti Misra",
      role: "Project & Investment Manager",
      company: "lawblocks.io",
      image: infograph
    }
  ];

  // Auto-slide logic: changes slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  return (
    <>
      {/* Hero Section */}
      <section className="about">
        <div className="container-custom h-full">
          <div className="about-wrap">
            <div className="hero-header-wrap flex flex-col items-center">
              <span className="pill softshadow bg-white/5 backdrop-blur-sm mx-auto block">About Us</span>
              <div className="hero-text-wrap pt-4 pb-4">
                <div className="hero-heading-wrap">
                  <h1 className="text-center text-white text-3xl md:text-5xl lg:text-6xl">Building the Future of Digital Growth</h1>
                </div>
              </div>
              <div className="content-about relative z-40">
                <Link to="/contact">
                  <button>Book your Consultation</button>
                </Link>
              </div>
            </div>

            {/* <div className="hero-partners-wrap">
              <p>Partnering with the world's leading enterprises</p>
              <div className="partners-grid">
                <img src={LOGO1} alt="Partner" className="partner-logo" />
                <img src={LOGO2} alt="Partner" className="partner-logo" />
                <img src={LOGO3} alt="Partner" className="partner-logo" />
                <img src={LOGO4} alt="Partner" className="partner-logo" />
                <img src={LOGO1} alt="Partner" className="partner-logo" />
              </div>
            </div> */}
          </div>
        </div>
        <div className="about-video-wrap">
          <div className="w-background-video">
            <video
              id="about-video"
              autoPlay
              loop
              muted
              playsInline
              className="about-video"
              poster="https://cdn.prod.website-files.com/68b6ff99deb8a7b82b41a88b/68bc675d296bcb32b8c2cf30_About%20Video-poster-00001.jpg"
            >
              <source src="https://cdn.prod.website-files.com/68b6ff99deb8a7b82b41a88b/68bc675d296bcb32b8c2cf30_About%20Video-transcode.mp4" type="video/mp4" />
              <source src={VideoClip} type="video/webm" />
            </video>
          </div>
          <div className="about-video-cover"></div>
          <div className="about-video-shadow"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-transparent text-white py-10 md:py-20 px-6 md:px-12 lg:px-24 mt-0 md:mt-[-100px] relative z-20">
        <div className="max-w-7xl mx-auto">

          <div className="">
            <h2 className='text-3xl md:text-4xl text-center font-medium leading-tight tracking-tight'>
              Collaboration That <br />Turns Vision Into Results
            </h2>


          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col space-y-6 ">
                <div className="mb-1">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-2 ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0a0a0a] text-white py-12 md:py-24 px-6 md:px-12 lg:px-24 pt-16 md:pt-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">

          {/* Left Side: Sticky Heading */}
          <div className="md:w-1/3 md:sticky md:top-24 ">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight">
              Clarity, Control, and Growth—Built Into Everything We Do
            </h2>
          </div>

          {/* Right Side: Scrolling Milestones */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {milestones.map((item, index) => (
              <div key={index} className="flex flex-col space-y-4">
                {/* Icon rendering */}
                <div className="mb-2">
                  {item.icon}
                </div>

                <h3 className="text-[#fff] text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
      <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight text-center mb-8 md:mb-16">
            Supported by many <br /> companies around the world
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Main Testimonial Card with Auto-Slider */}
            <div className="lg:col-span-2 bg-[#141414] rounded-3xl p-6 md:p-12 flex flex-col justify-between md:min-h-[450px] relative overflow-hidden">

              {/* Slide Content */}
              <div className="relative h-full flex flex-col justify-between">
                <div key={activeIndex} className="animate-in fade-in slide-in-from-right-4 duration-700">
                  <span className="inline-block bg-[#a100ff] text-white text-sm font-bold px-3 py-1 rounded-md mb-8">
                    {testimonials[activeIndex].role}
                  </span>
                  <p className="text-2xl md:text-3xl font-medium text-gray-300 leading-relaxed italic">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between mt-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden ring-2 ring-[#d4ff3f]/20">
                      <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                      <p className="text-gray-500 text-sm">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xl font-bold italic text-white">
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === idx ? 'w-8 bg-[#a100ff]' : 'w-2 bg-gray-600'}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column Stats (Same as before) */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#141414] rounded-3xl p-8 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-6xl font-bold">8+</span>
                  <span className="bg-[#a100ff] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Years of experiences</span>
                </div>
                <p className="text-gray-400 mt-4">Delivering timeless, functional spaces through innovation and precision.</p>
              </div>

              <div className="bg-[#141414] rounded-3xl p-8 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-6xl font-bold">98%</span>
                  <span className="bg-[#a100ff] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Client satisfaction</span>
                </div>
                <p className="text-gray-400 mt-4">Reflected in the high satisfaction and repeat business of every client.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <TextFill />
      <section className="py-20 md:py-40 pt-0    relative ">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            {/* LEFT – Content */}
            <div className="col-span-12 md:col-span-12 lg:col-span-12">
              <div className='card_CTA'>
                <div className="content-about flex flex-col items-center">
                  <h2 className='text-center'>
                    Turn your idea into a production-ready decentralized system<br />  with Adroits Digital

                  </h2>

                  <p className="font-light text-center mb-4">
                    Whether you’re launching a Web3 startup, integrating blockchain into your business, or exploring decentralized innovation, <br />Adroits Digital is your trusted Web3 development partner.

                  </p>



                  <Link to="/contact">
                    <button>Talk to our Web3 experts
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <ContactGlobal />
      {/* Values Section */}
      {/* <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our clients every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-card border-primary/20 text-center group hover:border-primary/40 transition-smooth">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:glow-effect transition-smooth">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section id="team" className="section-padding section-gradient">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced team of marketing professionals brings diverse expertise and
              a shared commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-primary/20 text-center group hover:border-primary/40 transition-smooth">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements Section */}
      {/* <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{achievement.stat}</div>
                  <div className="text-primary-foreground/80">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;