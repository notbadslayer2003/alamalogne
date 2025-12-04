'use client';

import { useState } from 'react';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            text: "Un séjour exceptionnel dans un cadre qui allie élégance et authenticité. Le petit déjeuner maison reste un moment dont on se souvient.",
            author: "Marie & Thomas",
            location: "Bruxelles",
            rating: 5
        },
        {
            text: "L'attention portée aux détails, le calme absolu et la qualité de l'accueil font de cette adresse une référence en Wallonie.",
            author: "Sophie Laurent",
            location: "Paris",
            rating: 5
        },
        {
            text: "Une expérience inoubliable. La mezzanine ajoute un charme fou et l'accueil avec le verre de bienvenue donne le ton d'un séjour parfait.",
            author: "Jean-Marc D.",
            location: "Lyon",
            rating: 5
        },
        {
            text: "Le cadre verdoyant et le calme absolu offrent une véritable parenthèse de sérénité. Nous y retournerons sans hésiter.",
            author: "Isabelle & Pierre",
            location: "Namur",
            rating: 5
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="avis" className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Colonne gauche - Titre & Stats */}
                    <div>
                        <div className="mb-8">
                            <div className="w-8 h-[1px] bg-stone-400 mb-6"></div>
                            <h2 className="font-playfair text-4xl lg:text-5xl font-light text-stone-900 mb-6 leading-tight">
                                Ce que nos hôtes en disent
                            </h2>
                            <p className="text-stone-600 font-light text-[15px] leading-relaxed max-w-md">
                                Chaque témoignage reflète notre engagement à offrir une expérience d'exception
                            </p>
                        </div>

                        {/* Stats élégantes */}
                        <div className="space-y-8 mt-12">
                            <div>
                                <div className="flex items-baseline space-x-3 mb-2">
                                    <span className="font-playfair text-5xl font-light text-stone-900">4.9</span>
                                    <span className="text-stone-500 text-sm font-light">/ 5</span>
                                </div>
                                <div className="flex space-x-1 text-amber-500 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-stone-500 text-xs tracking-wider uppercase font-light">
                                    Basé sur 47 avis certifiés
                                </p>
                            </div>

                            <div className="pt-6 border-t border-stone-200">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-stone-700 text-sm font-light">Accueil</span>
                                        <div className="flex space-x-1 text-amber-500 text-xs">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-stone-700 text-sm font-light">Confort</span>
                                        <div className="flex space-x-1 text-amber-500 text-xs">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-stone-700 text-sm font-light">Propreté</span>
                                        <div className="flex space-x-1 text-amber-500 text-xs">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite - Slider de témoignages */}
                    <div className="relative">

                        {/* Testimonial card */}
                        <div className="bg-[#f8f6f3] p-8 lg:p-10 relative min-h-[320px] flex flex-col justify-between">
                            {/* Ornement */}
                            <div className="absolute top-8 right-8 text-stone-200 opacity-50">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                                    <path d="M12 8C12 3.58172 8.41828 0 4 0V8H0V24H16V8H12ZM36 8C36 3.58172 32.4183 0 28 0V8H24V24H40V8H36Z"/>
                                </svg>
                            </div>

                            {/* Contenu avec transition */}
                            <div className="relative">
                                <p className="text-stone-700 font-light leading-relaxed mb-6 text-base italic transition-opacity duration-500">
                                    {testimonials[currentIndex].text}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-stone-300">
                                    <div>
                                        <p className="text-stone-900 font-light text-sm mb-1">
                                            {testimonials[currentIndex].author}
                                        </p>
                                        <p className="text-stone-500 font-light text-xs tracking-wider uppercase">
                                            {testimonials[currentIndex].location}
                                        </p>
                                    </div>
                                    <div className="flex space-x-1 text-amber-500 text-sm">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-6">
                            {/* Boutons prev/next */}
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 flex items-center text-black justify-center border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 group"
                                    aria-label="Avis précédent"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 flex items-center text-black justify-center border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 group"
                                    aria-label="Avis suivant"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Indicateurs (dots) */}
                            <div className="flex items-center space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`transition-all duration-300 ${
                                            index === currentIndex
                                                ? 'w-8 h-1 bg-stone-900'
                                                : 'w-1 h-1 bg-stone-300 hover:bg-stone-500'
                                        }`}
                                        aria-label={`Aller à l'avis ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Label certification */}
                        <div className="flex items-center space-x-3 pt-8">
                            <div className="flex-1 h-[1px] bg-stone-200"></div>
                            <p className="text-stone-400 text-[10px] tracking-[0.3em] uppercase font-light">
                                Avis vérifiés
                            </p>
                            <div className="flex-1 h-[1px] bg-stone-200"></div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}