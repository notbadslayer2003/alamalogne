'use client';

import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import {Wheat} from "lucide-react";

export default function Header() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <header id="accueil" className="relative h-screen w-full overflow-hidden">

            {/* Background Image avec effet Ken Burns subtil */}
            <div className="absolute inset-0">
                <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(/header1.jpg)] 
                                transition-transform duration-[20s] ease-out
                                ${isLoaded ? 'scale-105' : 'scale-100'}`}
                />
                {/* Overlay dégradé */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/60" />
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Contenu principal */}
            <div className="relative h-full flex items-center px-6">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="max-w-2xl">

                        {/* Petit label discret */}
                        <div className={`flex items-center space-x-3 mb-8 transition-all duration-1000 delay-300 
                                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="flex space-x-1">
                                {[...Array(4)].map((_, i) => (
                                    <Wheat key={i} className="size-3 text-[#c9a962]" />
                                ))}
                            </div>
                            <span className="text-white/60 text-xs tracking-[0.2em] uppercase">
                                Chambre d'hôtes · 4 Épis
                            </span>
                        </div>

                        {/* Titre principal */}
                        <h1 className={`font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white 
                                       mb-6 leading-[1.05]
                                       transition-all duration-1000 delay-500
                                       ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            Bienvenue<br />
                            <span className="italic text-white/90">à la Malogne</span>
                        </h1>

                        {/* Sous-titre personnel */}
                        <p className={`text-lg sm:text-xl text-white/80 mb-10 font-light leading-relaxed max-w-lg
                                      transition-all duration-1000 delay-700
                                      ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Micheline et Francis vous ouvrent les portes de leur maison,
                            pour une escapade au calme aux portes de Mons.
                        </p>

                        {/* CTAs */}
                        <div className={`flex flex-col sm:flex-row gap-4 mb-16
                                        transition-all duration-1000 delay-900
                                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <a
                                href="/contact"
                                className="group flex items-center relative px-10 py-4 bg-[#c9a962] text-stone-900
                                           overflow-hidden transition-all duration-500"
                            >
                                <div className="absolute flex items-center inset-0 bg-white transform -translate-x-full
                                                group-hover:translate-x-0 transition-transform duration-500" />
                                <span className="relative flex items-center justify-center space-x-2 text-sm tracking-[0.15em] uppercase font-medium">
                                    <span>Réserver</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </a>

                            <a
                                href="#decouvrir"
                                className="group px-10 py-4 text-white border border-white/30
                                           hover:bg-white/10 transition-all duration-300"
                            >
                                <span className="text-sm tracking-[0.15em] uppercase font-light">
                                    Découvrir
                                </span>
                            </a>
                        </div>

                        {/* Features discrets */}
                        <div className={`flex flex-wrap gap-x-8 gap-y-3 text-white/50 text-sm
                                        transition-all duration-1000 delay-[1100ms]
                                        ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="flex items-center space-x-2">
                                <span className="w-1 h-1 bg-[#c9a962] rounded-full"></span>
                                <span>Entrée indépendante</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <span className="w-1 h-1 bg-[#c9a962] rounded-full"></span>
                                <span>Petit-déjeuner inclus</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <span className="w-1 h-1 bg-[#c9a962] rounded-full"></span>
                                <span>Animaux bienvenus</span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2
                            transition-all duration-1000 delay-[1300ms]
                            ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <a href="#decouvrir" className="group flex flex-col items-center text-white/40
                                               hover:text-white/70 transition-colors duration-300">
                    <div className="w-5 h-8 border border-current rounded-full flex justify-center pt-1.5 mb-2">
                        <div className="w-0.5 h-1.5 bg-current rounded-full animate-bounce"></div>
                    </div>
                    <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                </a>
            </div>

            {/* Localisation en bas à droite */}
            <div className={`absolute bottom-8 right-8 hidden lg:block
                            transition-all duration-1000 delay-[1200ms]
                            ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-white/40 text-xs tracking-[0.15em] uppercase">
                    Mons · Wallonie · Belgique
                </p>
            </div>

        </header>
    );
}