'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#accueil' },
        { name: 'Activités', href: '#activites' },
        { name: 'Galerie', href: '#galerie' },
        { name: 'Avis', href: '#avis' },
        { name: 'Tarifs', href: '#tarifs' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-[#f8f6f3]/98 backdrop-blur-sm'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-[80%] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <Link
                        href="#accueil"
                        className="group"
                    >
                        <div className="flex flex-col">
              <span className={`font-playfair text-3xl tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-stone-800' : 'text-white'
              }`}>
                À la Malogne
              </span>
                            <span className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                                isScrolled ? 'text-stone-500' : 'text-white/70'
                            }`}>
                Mons · Wallonie
              </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[13px] tracking-wider uppercase font-light relative group transition-colors duration-300 ${
                                    isScrolled ? 'text-stone-700 hover:text-stone-900' : 'text-white/90 hover:text-white'
                                }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                                    isScrolled ? 'bg-stone-900' : 'bg-white'
                                }`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className={`md:hidden p-2 transition-colors ${
                            isScrolled ? 'text-stone-900' : 'text-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#f8f6f3]/98 backdrop-blur-sm border-t border-stone-200/50">
                    <div className="px-6 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-sm tracking-wider uppercase font-light text-stone-700 hover:text-stone-900 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}