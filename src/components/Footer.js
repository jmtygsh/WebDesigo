import Link from "next/link";
import Image from "next/image";

import { navItems, ourService, socialLinks, ourPolicy } from "@/data/index";
import { Button } from "@/components/Button";

export const Footer = () => {
  return (
    <footer className="relative border-t border-gray-800 py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent z-0"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
          {/* Left Section: Logo, Socials, & CTA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-xs border-r-1 border-gray-800/30">
            <Link
              href="/"
              aria-label="Home"
              className="mb-4"
            >
              <Image
                src="/websigo.svg"
                height={200}
                width={200}
                alt="webdesigo"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Crafting digital, one solution at a time.
            </p>
            <p className="text-gray-400 mb-6">
              WebDesigo LLC, 30 N Gould St Ste R Sheridan, WY, 82801, USA
            </p>
            <p className="text-gray-400 mb-6">+1 307 400 2532</p>
            <p className="text-gray-400 mb-6">webdesigollc@gmail.com</p>

            <div className="flex space-x-3 mb-8">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-colors duration-300 ${link.hoverClass}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <Button url="/contact" text="Contact Us" />
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-8 md:gap-20">
            <div>
              <h3 className="text-base font-semibold text-white mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-5">
                Company
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {ourService.map((service) => (
                  <li key={service.id}>
                    {service.url ? (
                      <Link
                        href={service.url}
                        className="hover:text-blue-400 transition-colors duration-200"
                      >
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-5">Legal</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {ourPolicy.map((policy) => (
                  <li key={policy.id}>
                    {policy.url ? (
                      <Link
                        href={policy.url}
                        className="hover:text-blue-400 transition-colors duration-200"
                      >
                        {policy.title}
                      </Link>
                    ) : (
                      policy.title
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-5">
                Our Services
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {ourService.map((service) => (
                  <li key={service.id}>
                    {service.url ? (
                      <Link
                        href={service.url}
                        className="hover:text-blue-400 transition-colors duration-200"
                      >
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="relative z-10 border-t border-gray-800 mt-12 pt-6 text-center md:flex md:justify-between text-gray-500 text-xs">
          <p className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} WebDesigo. All rights reserved.
          </p>
          <p>
            Designed by{" "}
            <Link href="https://github.com/jmtygsh" target="_blank">
              {" "}
              WebDesigo{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};
