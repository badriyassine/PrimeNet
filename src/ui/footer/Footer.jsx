import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#053750] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-[#27b4e0] pb-6 mb-8">
          {/* Logo + text */}
          <div>
            <a href="/">
              <img
                src="/logo/Dark_logo.png"
                className="w-32 mb-2"
                alt="PrimeNet"
              />
            </a>
            <p className="text-blue-200 text-sm">
              Fast. Reliable. Prime.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <Facebook className="cursor-pointer hover:text-[#27b4e0] transition" />

            <Twitter className="cursor-pointer hover:text-[#27b4e0] transition" />

            <Youtube className="cursor-pointer hover:text-[#27b4e0] transition" />

            <Instagram className="cursor-pointer hover:text-[#27b4e0] transition" />

            <Linkedin className="cursor-pointer hover:text-[#27b4e0] transition" />
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {/* Mobile */}
          <div>
            <h3 className="font-semibold mb-3">Mobile Offers</h3>

            <ul className="space-y-2 text-sm text-blue-200">
              <li className="hover:text-white cursor-pointer"><a href="/mobile">Recharge</a></li>

              <li className="hover:text-white cursor-pointer"><a href="/price">Plans</a></li>

              <li className="hover:text-white cursor-pointer">Smartphones</li>

              <li className="hover:text-white cursor-pointer">Portability</li>

              <li className="hover:text-white cursor-pointer">Roaming</li>
            </ul>
          </div>

          {/* Internet */}
          <div>
            <h3 className="font-semibold mb-3">Internet Offers</h3>

            <ul className="space-y-2 text-sm text-blue-200">
              <li className="hover:text-white cursor-pointer"><a href="/wifi">Fiber Optic</a></li>

              <li className="hover:text-white cursor-pointer"><a href="/wifi">ADSL</a></li>

              <li className="hover:text-white cursor-pointer"><a href="/mobile">5G Home</a></li>

              <li className="hover:text-white cursor-pointer">Accessories</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>

            <ul className="space-y-2 text-sm text-blue-200">
              <li className="hover:text-white cursor-pointer">About Us</li>

              <li className="hover:text-white cursor-pointer">Careers</li>

              <li className="hover:text-white cursor-pointer">Press</li>

              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold mb-3">My Account</h3>

            <ul className="space-y-2 text-sm text-blue-200">
              <li className="hover:text-white cursor-pointer">Pay Bill</li>

              <li className="hover:text-white cursor-pointer">My Space</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>

            <ul className="space-y-2 text-sm text-blue-200">
              <li className="hover:text-white cursor-pointer"><a href="/faq">FAQ</a></li>

              <li className="hover:text-white cursor-pointer"><a href="/support">Contact</a></li>

              <li className="hover:text-white cursor-pointer">Stores</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-white border-t border-[#27b4e0]  pt-6">
          <p>© 2026 PrimeNet. All rights reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <span className="hover:text-[#27b4e0] cursor-pointer">Cookies</span>

            <span className="hover:text-[#27b4e0] cursor-pointer"><a href="/terms">Terms</a></span>

            <span className="hover:text-[#27b4e0] cursor-pointer">
              Brochure
            </span>

            <span className="hover:text-[#27b4e0] cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
