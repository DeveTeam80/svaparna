import { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, Sparkles } from "lucide-react";
import { NavItem } from "../../types"

interface NavbarProps {
  navItems: NavItem[];
  onBookClick: () => void;
}

export default function Navbar({ navItems, onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Sticky background active after 80px scroll
      if (currentScrollY > 80) {
        setIsSticky(true);
        
        // 2. Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setNavVisible(false); // scrolling down: hide navbar
        } else {
          setNavVisible(true); // scrolling up: show navbar
        }
      } else {
        setIsSticky(false);
        setNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isSticky
          ? "bg-[#fffef7]/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      } ${
        navVisible ? "translate-y-0" : "-translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo Brand Brand Section */}
          <a
            id="nav-logo"
            href="#home"
            className="flex items-center space-x-2 group focus:outline-hidden"
          >
            {/* Custom SVG logo mimicking Svaparna (Self-Leaf / Health Flower) */}
            <div className="relative w-9 h-9 flex items-center justify-center rounded-full bg-primary-brand/10 group-hover:scale-105 transition-transform duration-300">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-primary-brand fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Clean geometric Ayurvedic leaf motif */}
                <path d="M12 2C12 2 15 7 15 11C15 15 12 22 12 22C12 22 9 15 9 11C9 7 12 2 12 2Z" />
                <path
                  d="M2 12C2 12 7 9 11 9C15 9 22 12 22 12C22 12 15 15 11 15C7 15 2 12 2 12Z"
                  opacity="0.8"
                />
              </svg>
              <div className="absolute inset-0 border border-gold-start/30 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-normal text-primary-brand md:text-xl selection:bg-gold-end">
                Svaparna
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-start font-sans font-semibold -mt-1">
                Health
              </span>
            </div>
          </a>

          {/* Desktop Navigation Linkages */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={item.href}
                className="px-3.5 py-2 rounded-full text-sm font-medium text-primary-brand/80 hover:text-primary-brand hover:bg-primary-brand/5 transition-colors"
                referrerPolicy="no-referrer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Accessories (Phone, Book Consultation Button) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Premium Phone Dial Widget */}
            <a
              id="nav-phone-dial"
              href="tel:+919892924914 "
              referrerPolicy="no-referrer"
            >
              <div className="px-2.5 py-2 w-10 h-10 bg-primary-brand/15 hover:bg-primary-brandrounded-full flex items-center justify-center text-primary-brand group-hover:scale-110 transition-transform rounded-full">
                <Phone className="w-4 h-4" />
              </div>
            </a>

            {/* Book Appointment CTA Button */}
            <button
              id="nav-cta-book"
              onClick={onBookClick}
              className="relative overflow-hidden group bg-gradient-to-r from-gold-start to-gold-end text-primary-brand font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary-brand" />
                Consultation
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden gap-2">
            <button
              id="nav-mobile-phone-btn"
              onClick={() => window.location.href = "tel:+919892924914 "}
              className="p-2 text-primary-brand rounded-full bg-primary-brand/5 hover:bg-primary-brand/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </button>
            
            <button
              id="nav-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-primary-brand hover:bg-primary-brand/5 transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-drawer"
        className={`fixed inset-x-0 top-[60px] bg-[#fffef7] shadow-xl border-b border-primary-brand/10 transition-all duration-350 ease-out md:hidden z-40 overflow-hidden ${
          isOpen ? "max-h-[85vh] opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              id={`nav-link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-base font-semibold text-primary-brand/90 hover:bg-primary-brand/5 hover:text-primary-brand rounded-xl transition-all"
              referrerPolicy="no-referrer"
            >
              {item.label}
            </a>
          ))}
          
          <div className="pt-4 border-t border-primary-brand/10 min-y-4 space-y-3">
            <a
              id="nav-mobile-phone-dial"
              href="tel:+919892924914 "
              className="flex items-center justify-between px-4 py-3 bg-primary-brand/5 rounded-xl border border-primary-brand/5"
              referrerPolicy="no-referrer"
            >
              <span className="text-sm font-medium text-primary-brand">Immediate Call Desk</span>
              <span className="text-sm font-semibold font-mono text-primary-brand">(422) 820 820</span>
            </a>
            
            <button
              id="nav-mobile-cta-book"
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-start to-gold-end text-primary-brand font-semibold px-4 py-3.5 rounded-xl text-sm shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
