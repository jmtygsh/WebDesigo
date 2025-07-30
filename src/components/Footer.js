import Link from 'next/link';
import Image from 'next/image'; // For optimized image loading in Next.js

import { navItems, ourService, socialLinks, ourExpertise } from "@/data/index"; // Import socialLinks

import { Button } from "@/components/Button";

export const Footer = () => {
    return (
        <footer className="relative border-t border-gray-800 py-12 px-4 md:px-8 lg:px-20 font-sans">
            {/* The background div is now placed first and given a lower z-index. */}
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent z-0'></div>

            {/* All main footer content is wrapped in a container with a higher z-index. */}
            <div className="relative max-w-6xl mx-auto flex justify-between gap-8 z-10">

                {/* Left Section: Logo & Social Media */}
                <div className="relative flex-1 flex flex-col items-start">
                    <div className='absolute top-0 right-50 h-52 w-[1px] bg-gray-800'></div>

                    <div className="mb-6">
                        <Link href="/" aria-label="Home" className='z-2 text-base font-semibold'>
                            WebDesigo
                        </Link>
                    </div>
                    <p className="text-gray-400  mb-6 max-w-xs">
                        Crafting digital, one solution at once.
                    </p>
                    <div className="flex space-x-3">
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

                    <div className='mt-10'>
                        <Button url="/contact-us" text="Contact Us" />
                    </div>
                </div>

                {/* Right Section: Quick Links & Our Expertise */}
                <div className='flex-1 flex justify-between'>
                    <div>
                        <h3 className="text-base font-semibold text-white mb-5">Quick Links</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-white mb-5">Our Expertise</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {ourExpertise.map((service) => (
                                <li key={service.id}>
                                    {service.url ? (
                                        <Link href={service.url} className="hover:text-blue-400 transition-colors duration-200">
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
                        <h3 className="text-base font-semibold text-white mb-5">Our Services</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {ourService.map((service) => (
                                <li key={service.id}>
                                    {service.url ? (
                                        <Link href={service.url} className="hover:text-blue-400 transition-colors duration-200">
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
                <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} WebDesigo. All rights reserved.</p>
                <p>Designed by WebDesigo</p>
            </div>
        </footer>
    );
};