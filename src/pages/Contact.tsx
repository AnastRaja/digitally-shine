import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useSEO, generatePageTitle } from '../utils/seo';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  useSEO({
    title: generatePageTitle('Contact Us'),
    description: 'Get in touch with our marketing agency team. Free consultation available. Contact us for digital marketing, SEO, and brand development services.',
    keywords: 'contact marketing agency, free consultation, marketing services inquiry, get quote',
    canonical: `${window.location.origin}/contact`,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@marketingagency.com',
      subDetails: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subDetails: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Business Avenue, Suite 100',
      subDetails: 'City, State 12345',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9AM - 6PM',
      subDetails: 'Weekend consultations available',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient section-padding text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Ready to transform your marketing? Let's discuss how we can help your business 
              achieve exceptional growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a 
                    customized solution for your marketing needs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-background border-primary/20 focus:border-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-background border-primary/20 focus:border-primary"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-background border-primary/20 focus:border-primary"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-background border-primary/20 focus:border-primary"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-background border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                      >
                        <option value="">Select a service</option>
                        <option value="digital-marketing">Digital Marketing Strategy</option>
                        <option value="seo">SEO & Performance</option>
                        <option value="social-media">Social Media Marketing</option>
                        <option value="content-marketing">Content Marketing</option>
                        <option value="brand-development">Brand Development</option>
                        <option value="consultation">Free Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-background border-primary/20 focus:border-primary"
                        placeholder="Tell us about your project goals, challenges, and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="btn-primary w-full md:w-auto"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="bg-card border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-muted-foreground font-medium">{info.details}</p>
                          <p className="text-muted-foreground text-sm">{info.subDetails}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Quick Call to Action */}
              <Card className="bg-gradient-primary border-0">
                <CardContent className="p-6 text-center text-white">
                  <h3 className="text-xl font-bold mb-3">Need Immediate Assistance?</h3>
                  <p className="mb-4 opacity-90">
                    Schedule a free 30-minute consultation to discuss your marketing goals.
                  </p>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    Schedule Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1642345678901!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Marketing Agency Location"
        ></iframe>
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </section>
    </>
  );
};

export default Contact;