import {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {Menu, X, Search} from "lucide-react";
import {Button} from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    // {name: "Home", href: "/"},
    // {name: "About", href: "/about"},
    {name: "Services", href: "#services"},
    {name: "Blog", href: "/blog"},
    {name: "Contact", href: "/contact"},
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-black border-b-0 border-primary/20"
          : "bg-transparent border-b-0"
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:glow-effect transition-all duration-300 ease-smooth">
              <span className="text-white font-bold text-lg">MA</span>
            </div>
            <span className="text-xl font-bold text-primary hidden sm:block">
              Marketing Agency
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 ease-smooth hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="header-button ">Get Started</button>
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

        {/* Mobile Navigation */}
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
      </nav>
    </header>
  );
};

export default Header;
