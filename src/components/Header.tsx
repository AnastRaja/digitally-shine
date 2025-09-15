import {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {Menu, X, ChevronRight} from "lucide-react";
import {Button} from "./ui/button";
import Logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // mega menu
  const location = useLocation();

  const navigation = [
    {name: "Services", href: "#services", megaMenu: true},
    {name: "Blog", href: "/blog"},
    {name: "Contact", href: "/contact"},
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#151517] border-b-0 border-primary/20"
          : "bg-transparent border-b-0 bg-[#151517]"
      } ${servicesOpen ? "!bg-[#151517]" : ""}`}
    >
      <nav className="container relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={Logo} alt="Logo" className="w-36" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            {navigation.map((item) =>
              item.megaMenu ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    className={`font-medium transition-all duration-300 ease-smooth hover:text-primary ${
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </button>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-all duration-300 ease-smooth hover:text-primary ${
                    isActive(item.href) ? "" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-4 ">
            <button className="header-button !py-3 !px-5">Get Started</button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-all duration-300 ease-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary/20 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-2 transition-all duration-300 ease-smooth hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-primary/20">
                <Button className="btn-primary">Contact Us</Button>
              </div>
            </div>
          </div>
        )}

        {/* Backdrop */}
        <div
          onClick={() => setServicesOpen(false)}
          className={`fixed left-0 right-0 top-16 lg:top-20 bottom-0 z-30 transition-opacity duration-300 ${
            servicesOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } bg-black/10`}
        />

        {/* Mega menu */}
        <div
          className={`fixed left-0 right-0 top-16 lg:top-20 z-40 transition-all duration-300 transform-gpu ${
            servicesOpen
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="w-screen mx-auto header_mega_menu !bg-[#151517]">
            <div className="container">
              <div className="!bg-[#151517] k py-10 grid grid-cols-4 gap-8">
                {/* Column 1 */}
                <div>
                  <h3>Our Services</h3>
                  <p>
                    Our expertise in Web3, AI, and Digital Marketing helps
                    brands stay ahead of the curve.{" "}
                  </p>
                </div>

                {/* Column 2 */}
                <div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <Link
                        to="/services/suitecommerce"
                        className="hover:text-primary block header_nave_link"
                        onClick={() => setServicesOpen(false)}
                      >
                        WEB3 Marketing <ChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/suitecommerce-advanced"
                        className="hover:text-primary block header_nave_link"
                        onClick={() => setServicesOpen(false)}
                      >
                        Digital Marketing
                        <ChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/suitecommerce-advanced"
                        className="hover:text-primary block header_nave_link"
                        onClick={() => setServicesOpen(false)}
                      >
                        AI Marketing
                        <ChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/suitecommerce-advanced"
                        className="hover:text-primary block header_nave_link"
                        onClick={() => setServicesOpen(false)}
                      >
                        Web Development & Web3 Development
                        <ChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/suitecommerce-advanced"
                        className="hover:text-primary block header_nave_link"
                        onClick={() => setServicesOpen(false)}
                      >
                        UI/UX & Graphics Designing
                        <ChevronRight />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <Link
                        to="/services/suitecommerce-advanced"
                        className="hover:text-primary block header_nave_link"
                        onClick={() => setServicesOpen(false)}
                      >
                        Mobile App Design & Development
                        <ChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/suitecommerce-advanced"
                        className="hover:text-primary block header_nave_link"
                        onClick={() => setServicesOpen(false)}
                      >
                        Digital Marketing Course
                        <ChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/suitecommerce-advanced"
                        className="hover:text-primary block header_nave_link"
                        onClick={() => setServicesOpen(false)}
                      >
                        PR & Influencer Marketing
                        <ChevronRight />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <Link
                        to="/services/suitecommerce-advanced"
                        className="hover:text-primary block header_nave_link"
                        onClick={() => setServicesOpen(false)}
                      >
                        Crowd Marketing
                        <ChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/suitecommerce-advanced"
                        className="hover:text-primary block header_nave_link"
                        onClick={() => setServicesOpen(false)}
                      >
                        Google My Business
                        <ChevronRight />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
