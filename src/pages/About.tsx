import { CheckCircle, Award, Users, TrendingUp, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { useSEO, generatePageTitle } from '../utils/seo';

const About = () => {
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

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient section-padding text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About Our <span className="text-gradient">Agency</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              We're a team of passionate marketing professionals dedicated to helping businesses 
              achieve extraordinary growth through innovative strategies and proven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe every business has the potential to achieve remarkable success. Our mission 
                is to unlock that potential through strategic marketing that drives real, measurable results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Since our founding, we've helped hundreds of businesses transform their marketing 
                approach, build stronger brands, and achieve sustainable growth that lasts.
              </p>
              <div className="space-y-4">
                {[
                  'Data-driven strategies that deliver ROI',
                  'Transparent reporting and communication',
                  'Cutting-edge marketing technologies',
                  'Personalized approach for each client',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <TrendingUp className="w-24 h-24 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Growth-Focused</h3>
                  <p className="text-lg opacity-90">
                    Every decision we make is focused on driving sustainable growth for our clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
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
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding section-gradient">
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
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-primary">
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
      </section>
    </>
  );
};

export default About;