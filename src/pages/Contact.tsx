import {useState} from "react";
import {Mail, Phone, MapPin, Clock, Send} from "lucide-react";
import {Facebook, Twitter, Linkedin, Instagram} from "lucide-react";
import {Button} from "../components/ui/button";
import {Input} from "../components/ui/input";
import {Textarea} from "../components/ui/textarea";
import {Card, CardContent, CardHeader, CardTitle} from "../components/ui/card";
import {useSEO, generatePageTitle} from "../utils/seo";
import {toast} from "../hooks/use-toast";
import {FaPinterestP} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    country: "",
  });

  useSEO({
    title: generatePageTitle("Contact Us"),
    description:
      "Get in touch with our marketing agency team. Free consultation available. Contact us for digital marketing, SEO, and brand development services.",
    keywords:
      "contact marketing agency, free consultation, marketing services inquiry, get quote",
    canonical: `${window.location.origin}/contact`,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.service ||
      !formData.message
    ) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all the fields before submitting.",
        variant: "destructive", // 🔴 red style if you’re using shadcn/ui
      });
      return;
    }
    try {
      // Map frontend fields to backend schema
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country, // or collect dynamically if you want
        contactMethod: "Email", // or "Phone", based on preference
        requirement: `${formData.service} - ${formData.message}`,
      };

      const resp = await axios.post(
        "https://blogapiadroits.onrender.com/api/contact",
        payload
      );

      if (resp.status === 201) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form after success
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          country: "",
        });
      }
    } catch (error) {
      console.error(
        "Contact form error:",
        error.response?.data || error.message
      );
      toast({
        title: "Something went wrong",
        description:
          error.response?.data?.error ||
          "Please try again later. We'll get back to you within 24 hours.",
      });
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@marketingagency.com",
      subDetails: "We respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 79049 41113",
      subDetails: "Mon-Fri 9AM-6PM ",
    },
    // {
    //   icon: MapPin,
    //   title: 'Visit Us',
    //   details: '123 Business Avenue, Suite 100',
    //   subDetails: 'City, State 12345',
    // },
    // {
    //   icon: Clock,
    //   title: 'Business Hours',
    //   details: 'Monday - Friday: 9AM - 6PM',
    //   subDetails: 'Weekend consultations available',
    // },
  ];
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/adroitsdigital/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/AdroitsDigital",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href:
        "https://www.linkedin.com/company/adroits-digital/about/?viewAsMember=true",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/adroitsdigital/",
    },
    {
      name: "Pinterst",
      icon: FaPinterestP,
      href: "https://www.pinterest.com/adroitsdigital/",
    },
    {
      name: "Whatsapp",
      icon: FaWhatsapp,
      href: "https://wa.me/7904941113/?text=Hi AdroitsDigital",
    },
  ];
  return (
    <>
      {/* Contact Form & Info Section */}
      <section className="section-padding bg-black pt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="space-y-6 lg:col-span-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl lg:text-1xl text-white/90 leading-relaxed">
                Ready to transform your marketing? Let's discuss how we can help
                your business achieve exceptional growth and success.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card
                      key={index}
                      className=" !border-none lg:col-span-12 bg-transparent p-0"
                    >
                      <CardContent className="p-6 px-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-[#a100ff] rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {info.title}
                            </h3>
                            <p className="text-muted-foreground font-medium">
                              {info.details}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {info.subDetails}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
                <div className="lg:col-span-12">
                  <h3 className="font-semibold text-foreground mb-1">
                    Connect With Us
                  </h3>
                  <div className="flex items-center space-x-4 mt-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-[#a100ff] hover:text-primary-foreground transition-all duration-300 ease-smooth"
                          aria-label={social.name}
                        >
                          <IconComponent className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Quick Call to Action */}
            </div>

            <div className="lg:col-span-6">
              <Card className="bg-card !border-none p-4">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24
                    hours with a customized solution for your marketing needs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-background  focus:border-primary !border-none"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-background !border-none focus:border-primary"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Country *
                        </label>
                        <select
                          id="country"
                          name="country"
                          required
                          value={formData.country || ""}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-background border !border-none rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                        >
                          <option value="">Select your country</option>
                          <option value="AF">Afghanistan (+93)</option>
                          <option value="AL">Albania (+355)</option>
                          <option value="DZ">Algeria (+213)</option>
                          <option value="AS">American Samoa (+1684)</option>
                          <option value="AD">Andorra (+376)</option>
                          <option value="AO">Angola (+244)</option>
                          <option value="AI">Anguilla (+1264)</option>
                          <option value="AG">
                            Antigua and Barbuda (+1268)
                          </option>
                          <option value="AR">Argentina (+54)</option>
                          <option value="AM">Armenia (+374)</option>
                          <option value="AW">Aruba (+297)</option>
                          <option value="AU">Australia (+61)</option>
                          <option value="AT">Austria (+43)</option>
                          <option value="AZ">Azerbaijan (+994)</option>
                          <option value="BS">Bahamas (+1242)</option>
                          <option value="BH">Bahrain (+973)</option>
                          <option value="BD">Bangladesh (+880)</option>
                          <option value="BB">Barbados (+1246)</option>
                          <option value="BY">Belarus (+375)</option>
                          <option value="BE">Belgium (+32)</option>
                          <option value="BZ">Belize (+501)</option>
                          <option value="BJ">Benin (+229)</option>
                          <option value="BM">Bermuda (+1441)</option>
                          <option value="BT">Bhutan (+975)</option>
                          <option value="BO">Bolivia (+591)</option>
                          <option value="BA">
                            Bosnia and Herzegovina (+387)
                          </option>
                          <option value="BW">Botswana (+267)</option>
                          <option value="BR">Brazil (+55)</option>
                          <option value="BN">Brunei (+673)</option>
                          <option value="BG">Bulgaria (+359)</option>
                          <option value="BF">Burkina Faso (+226)</option>
                          <option value="BI">Burundi (+257)</option>
                          <option value="KH">Cambodia (+855)</option>
                          <option value="CM">Cameroon (+237)</option>
                          <option value="CA">Canada (+1)</option>
                          <option value="CV">Cape Verde (+238)</option>
                          <option value="KY">Cayman Islands (+1345)</option>
                          <option value="CF">
                            Central African Republic (+236)
                          </option>
                          <option value="TD">Chad (+235)</option>
                          <option value="CL">Chile (+56)</option>
                          <option value="CN">China (+86)</option>
                          <option value="CO">Colombia (+57)</option>
                          <option value="KM">Comoros (+269)</option>
                          <option value="CG">Congo (+242)</option>
                          <option value="CR">Costa Rica (+506)</option>
                          <option value="HR">Croatia (+385)</option>
                          <option value="CU">Cuba (+53)</option>
                          <option value="CY">Cyprus (+357)</option>
                          <option value="CZ">Czech Republic (+420)</option>
                          <option value="DK">Denmark (+45)</option>
                          <option value="DJ">Djibouti (+253)</option>
                          <option value="DM">Dominica (+1767)</option>
                          <option value="DO">Dominican Republic (+1809)</option>
                          <option value="EC">Ecuador (+593)</option>
                          <option value="EG">Egypt (+20)</option>
                          <option value="SV">El Salvador (+503)</option>
                          <option value="GQ">Equatorial Guinea (+240)</option>
                          <option value="ER">Eritrea (+291)</option>
                          <option value="EE">Estonia (+372)</option>
                          <option value="ET">Ethiopia (+251)</option>
                          <option value="FJ">Fiji (+679)</option>
                          <option value="FI">Finland (+358)</option>
                          <option value="FR">France (+33)</option>
                          <option value="GF">French Guiana (+594)</option>
                          <option value="PF">French Polynesia (+689)</option>
                          <option value="GA">Gabon (+241)</option>
                          <option value="GM">Gambia (+220)</option>
                          <option value="GE">Georgia (+995)</option>
                          <option value="DE">Germany (+49)</option>
                          <option value="GH">Ghana (+233)</option>
                          <option value="GI">Gibraltar (+350)</option>
                          <option value="GR">Greece (+30)</option>
                          <option value="GL">Greenland (+299)</option>
                          <option value="GD">Grenada (+1473)</option>
                          <option value="GP">Guadeloupe (+590)</option>
                          <option value="GU">Guam (+1671)</option>
                          <option value="GT">Guatemala (+502)</option>
                          <option value="GN">Guinea (+224)</option>
                          <option value="GW">Guinea-Bissau (+245)</option>
                          <option value="GY">Guyana (+592)</option>
                          <option value="HT">Haiti (+509)</option>
                          <option value="HN">Honduras (+504)</option>
                          <option value="HK">Hong Kong (+852)</option>
                          <option value="HU">Hungary (+36)</option>
                          <option value="IS">Iceland (+354)</option>
                          <option value="IN">India (+91)</option>
                          <option value="ID">Indonesia (+62)</option>
                          <option value="IR">Iran (+98)</option>
                          <option value="IQ">Iraq (+964)</option>
                          <option value="IE">Ireland (+353)</option>
                          <option value="IL">Israel (+972)</option>
                          <option value="IT">Italy (+39)</option>
                          <option value="JM">Jamaica (+1876)</option>
                          <option value="JP">Japan (+81)</option>
                          <option value="JO">Jordan (+962)</option>
                          <option value="KZ">Kazakhstan (+7)</option>
                          <option value="KE">Kenya (+254)</option>
                          <option value="KI">Kiribati (+686)</option>
                          <option value="KR">South Korea (+82)</option>
                          <option value="KW">Kuwait (+965)</option>
                          <option value="KG">Kyrgyzstan (+996)</option>
                          <option value="LA">Laos (+856)</option>
                          <option value="LV">Latvia (+371)</option>
                          <option value="LB">Lebanon (+961)</option>
                          <option value="LS">Lesotho (+266)</option>
                          <option value="LR">Liberia (+231)</option>
                          <option value="LY">Libya (+218)</option>
                          <option value="LI">Liechtenstein (+423)</option>
                          <option value="LT">Lithuania (+370)</option>
                          <option value="LU">Luxembourg (+352)</option>
                          <option value="MO">Macao (+853)</option>
                          <option value="MK">North Macedonia (+389)</option>
                          <option value="MG">Madagascar (+261)</option>
                          <option value="MW">Malawi (+265)</option>
                          <option value="MY">Malaysia (+60)</option>
                          <option value="MV">Maldives (+960)</option>
                          <option value="ML">Mali (+223)</option>
                          <option value="MT">Malta (+356)</option>
                          <option value="MH">Marshall Islands (+692)</option>
                          <option value="MQ">Martinique (+596)</option>
                          <option value="MR">Mauritania (+222)</option>
                          <option value="MU">Mauritius (+230)</option>
                          <option value="MX">Mexico (+52)</option>
                          <option value="FM">Micronesia (+691)</option>
                          <option value="MD">Moldova (+373)</option>
                          <option value="MC">Monaco (+377)</option>
                          <option value="MN">Mongolia (+976)</option>
                          <option value="ME">Montenegro (+382)</option>
                          <option value="MA">Morocco (+212)</option>
                          <option value="MZ">Mozambique (+258)</option>
                          <option value="MM">Myanmar (+95)</option>
                          <option value="NA">Namibia (+264)</option>
                          <option value="NP">Nepal (+977)</option>
                          <option value="NL">Netherlands (+31)</option>
                          <option value="NZ">New Zealand (+64)</option>
                          <option value="NI">Nicaragua (+505)</option>
                          <option value="NE">Niger (+227)</option>
                          <option value="NG">Nigeria (+234)</option>
                          <option value="NO">Norway (+47)</option>
                          <option value="OM">Oman (+968)</option>
                          <option value="PK">Pakistan (+92)</option>
                          <option value="PA">Panama (+507)</option>
                          <option value="PG">Papua New Guinea (+675)</option>
                          <option value="PY">Paraguay (+595)</option>
                          <option value="PE">Peru (+51)</option>
                          <option value="PH">Philippines (+63)</option>
                          <option value="PL">Poland (+48)</option>
                          <option value="PT">Portugal (+351)</option>
                          <option value="PR">Puerto Rico (+1787)</option>
                          <option value="QA">Qatar (+974)</option>
                          <option value="RE">Reunion (+262)</option>
                          <option value="RO">Romania (+40)</option>
                          <option value="RU">Russia (+7)</option>
                          <option value="RW">Rwanda (+250)</option>
                          <option value="SA">Saudi Arabia (+966)</option>
                          <option value="SN">Senegal (+221)</option>
                          <option value="RS">Serbia (+381)</option>
                          <option value="SC">Seychelles (+248)</option>
                          <option value="SL">Sierra Leone (+232)</option>
                          <option value="SG">Singapore (+65)</option>
                          <option value="SK">Slovakia (+421)</option>
                          <option value="SI">Slovenia (+386)</option>
                          <option value="SB">Solomon Islands (+677)</option>
                          <option value="SO">Somalia (+252)</option>
                          <option value="ZA">South Africa (+27)</option>
                          <option value="ES">Spain (+34)</option>
                          <option value="LK">Sri Lanka (+94)</option>
                          <option value="SD">Sudan (+249)</option>
                          <option value="SR">Suriname (+597)</option>
                          <option value="SE">Sweden (+46)</option>
                          <option value="CH">Switzerland (+41)</option>
                          <option value="SY">Syria (+963)</option>
                          <option value="TW">Taiwan (+886)</option>
                          <option value="TJ">Tajikistan (+992)</option>
                          <option value="TZ">Tanzania (+255)</option>
                          <option value="TH">Thailand (+66)</option>
                          <option value="TG">Togo (+228)</option>
                          <option value="TO">Tonga (+676)</option>
                          <option value="TT">
                            Trinidad and Tobago (+1868)
                          </option>
                          <option value="TN">Tunisia (+216)</option>
                          <option value="TR">Turkey (+90)</option>
                          <option value="TM">Turkmenistan (+993)</option>
                          <option value="UG">Uganda (+256)</option>
                          <option value="UA">Ukraine (+380)</option>
                          <option value="AE">
                            United Arab Emirates (+971)
                          </option>
                          <option value="GB">United Kingdom (+44)</option>
                          <option value="US">United States (+1)</option>
                          <option value="UY">Uruguay (+598)</option>
                          <option value="UZ">Uzbekistan (+998)</option>
                          <option value="VU">Vanuatu (+678)</option>
                          <option value="VE">Venezuela (+58)</option>
                          <option value="VN">Vietnam (+84)</option>
                          <option value="YE">Yemen (+967)</option>
                          <option value="ZM">Zambia (+260)</option>
                          <option value="ZW">Zimbabwe (+263)</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-background !border-none focus:border-primary"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-background border !border-none rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                      >
                        <option value="">Select a Service</option>
                        <option value="digital-marketing">
                          Digital Marketing
                        </option>
                        <option value="web3-design-development">
                          Web3 Design and Development
                        </option>
                        <option value="ai-development">AI Development</option>
                        <option value="seo-social-branding">
                          SEO / Social Media / Branding
                        </option>
                        <option value="graphics-design">Graphics Design</option>
                        <option value="web-design-development">
                          Web Design / Web Development
                        </option>
                        <option value="course">Course</option>
                        <option value="career">Career</option>
                        <option value="UI/UX">UI/UX</option>

                        <option value="consultation">Free Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-background !border-none focus:border-primary"
                        placeholder="Tell us about your project goals, challenges, and how we can help..."
                      />
                    </div>

                    <div className=" flex justify-end">
                      <Button
                        type="submit"
                        size="lg"
                        onClick={handleSubmit}
                        className="btn-primary w-full md:w-auto bg-[#a100ff] hover:bg-[#a100ff]"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="h-96 relative">
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
      </section> */}
    </>
  );
};

export default Contact;
