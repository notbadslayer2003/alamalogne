'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
    variant?: 'transparent' | 'solid';
}

export default function Navbar({ variant = 'transparent' }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isLight = variant === 'solid' || isScrolled;

    useEffect(() => {
        if (variant === 'solid') {
            setIsScrolled(true);
            return;
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [variant]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'La chambre', href: '/#decouvrir' },
        { name: 'Photos', href: '/#galerie' },
        { name: 'Aux alentours', href: '/activities' },
        { name: 'Avis', href: '/#avis' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isLight
                        ? 'bg-[#faf9f7]/95 backdrop-blur-md'
                        : 'bg-transparent'
                }`}
            >
                {/* Ligne subtile en bas */}
                <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${
                    isLight ? 'opacity-100 bg-stone-200/50' : 'opacity-0'
                }`} />

                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className={`flex justify-between items-center transition-all duration-500 ${
                        isLight ? 'h-20' : 'h-24'
                    }`}>

                        {/* Logo */}
                        <Link href="/" className="group relative z-10">
                            <span className={`font-playfair text-xl lg:text-2xl tracking-wide transition-colors duration-300 ${
                                isLight ? 'text-stone-800' : 'text-white'
                            }`}>
                                À la Malogne
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-5 py-2 text-[12px] tracking-[0.12em] uppercase font-light 
                                               transition-colors duration-300 group ${
                                        isLight
                                            ? 'text-stone-600 hover:text-stone-900'
                                            : 'text-white/80 hover:text-white'
                                    }`}
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px]
                                                     transition-all duration-300 group-hover:w-3/4 bg-[#c9a962]" />
                                </Link>
                            ))}

                            {/* Séparateur */}
                            <div className={`w-[1px] h-5 mx-4 transition-colors duration-300 ${
                                isLight ? 'bg-stone-300' : 'bg-white/20'
                            }`} />

                            {/* Bouton Réserver */}
                            <Link
                                href="/contact"
                                className={`px-6 py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium
                                           transition-all duration-300 ${
                                    isLight
                                        ? 'bg-stone-900 text-white hover:bg-[#c9a962] hover:text-stone-900'
                                        : 'bg-[#c9a962] text-stone-900 hover:bg-white'
                                }`}
                            >
                                Réserver
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className={`lg:hidden relative z-10 w-10 h-10 flex items-center justify-center 
                                       transition-colors duration-300 ${
                                isMobileMenuOpen
                                    ? 'text-white'
                                    : isLight ? 'text-stone-900' : 'text-white'
                            }`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menu"
                        >
                            <div className="w-6 h-4 relative flex flex-col justify-between">
                                <span className={`w-full h-[1.5px] bg-current transform transition-all duration-300 origin-center ${
                                    isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                                }`} />
                                <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${
                                    isMobileMenuOpen ? 'opacity-0' : ''
                                }`} />
                                <span className={`w-full h-[1.5px] bg-current transform transition-all duration-300 origin-center ${
                                    isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                                }`} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
                isMobileMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
            }`}>
                <div className="absolute inset-0 bg-stone-900" />

                <div className="relative h-full flex flex-col justify-center items-center px-6">
                    <nav className="flex flex-col items-center space-y-2 mb-12">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`group py-3 transition-all duration-500 ${
                                    isMobileMenuOpen
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                }`}
                                style={{ transitionDelay: isMobileMenuOpen ? `${index * 80}ms` : '0ms' }}
                            >
                                <span className="font-playfair text-3xl sm:text-4xl text-white/90 font-light
                                               group-hover:text-[#c9a962] transition-colors duration-300">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className={`transition-all duration-500 ${
                        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`} style={{ transitionDelay: isMobileMenuOpen ? '500ms' : '0ms' }}>
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-block px-10 py-4 bg-[#c9a962] text-stone-900
                                       text-sm tracking-[0.15em] uppercase font-medium
                                       hover:bg-white transition-colors duration-300"
                        >
                            Réserver
                        </Link>
                    </div>

                    {/* Contact en bas */}
                    <div className={`absolute bottom-12 left-0 right-0 px-6 text-center transition-all duration-500 ${
                        isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`} style={{ transitionDelay: isMobileMenuOpen ? '600ms' : '0ms' }}>
                        <a href="tel:+32470123456" className="text-white/40 text-sm hover:text-[#c9a962] transition-colors">
                            +32 470 12 34 56
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}