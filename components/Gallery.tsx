'use client';

import { useState } from 'react';

export default function Gallery() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [lightboxImage, setLightboxImage] = useState(null);

    const images = [
        {
            url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075',
            alt: 'Chambre principale',
            description: 'Un espace douillet avec literie d\'exception'
        },
        {
            url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
            alt: 'Salon',
            description: 'Coin détente avec télévision'
        },
        {
            url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070',
            alt: 'Coin repas',
            description: 'Espace repas équipé et convivial'
        },
        {
            url: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080',
            alt: 'Mezzanine',
            description: 'Chambre en hauteur au charme unique'
        },
        {
            url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070',
            alt: 'Salle de bain',
            description: 'Salle de bain moderne et épurée'
        },
        {
            url: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2070',
            alt: 'Jardin',
            description: 'Cadre verdoyant et apaisant'
        },
    ];

    // Grouper les images par slide (3 images par slide)
    const imagesPerSlide = 3;
    const slides = [];
    for (let i = 0; i < images.length; i += imagesPerSlide) {
        slides.push(images.slice(i, i + imagesPerSlide));
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const openLightbox = (image) => {
        setLightboxImage(image);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'unset';
        }
    };

    return (
        <>
            <section id="galerie" className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* En-tête */}
                    <div className="mb-12 lg:mb-16">
                        <div className="w-8 h-[1px] bg-stone-400 mb-6"></div>
                        <h2 className="font-playfair text-4xl lg:text-5xl font-light text-stone-900 mb-4">
                            Galerie
                        </h2>
                        <p className="text-stone-600 font-light text-[15px] max-w-2xl">
                            Découvrez l'atmosphère unique de notre chambre d'hôtes à travers ces images
                        </p>
                    </div>

                    {/* Slider */}
                    <div className="relative">

                        {/* Images du slide actuel */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                            {slides[currentSlide].map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => openLightbox(image)}
                                    className="relative overflow-hidden group cursor-pointer h-64 lg:h-80 bg-stone-100"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${image.url}')` }}
                                    />
                                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500" />

                                    {/* Label au hover */}
                                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-sm font-light tracking-wide">{image.alt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center mt-10 space-x-6">
                            {/* Bouton précédent */}
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 flex items-center text-black justify-center border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
                                aria-label="Slide précédent"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Dots */}
                            <div className="flex items-center space-x-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`transition-all duration-300 ${
                                            index === currentSlide
                                                ? 'w-8 h-1 bg-stone-900'
                                                : 'w-1 h-1 bg-stone-300 hover:bg-stone-500'
                                        }`}
                                        aria-label={`Aller au slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Bouton suivant */}
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 flex items-center text-black justify-center border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
                                aria-label="Slide suivant"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                    </div>

                    {/* CTA discret */}
                    <div className="mt-12 text-center">
                        <a
                            href="#contact"
                            className="group inline-flex items-center space-x-2 text-stone-700 hover:text-stone-900 transition-colors text-sm"
                        >
                            <span className="tracking-wider uppercase font-light">Réserver votre visite</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                </div>
            </section>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
                    onClick={closeLightbox}
                >
                    {/* Container blanc */}
                    <div
                        className="relative bg-white max-w-5xl w-full rounded-sm shadow-2xl overflow-hidden animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Bouton fermer */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-stone-900 transition-colors duration-300 group"
                            aria-label="Fermer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image */}
                        <div className="relative w-full h-[60vh] lg:h-[70vh] bg-stone-100">
                            <img
                                src={lightboxImage.url}
                                alt={lightboxImage.alt}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Info en bas */}
                        <div className="p-8 lg:p-10 border-t border-stone-200">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-playfair text-2xl lg:text-3xl font-light text-stone-900 mb-2">
                                        {lightboxImage.alt}
                                    </h3>
                                    <p className="text-stone-600 font-light text-sm">
                                        {lightboxImage.description}
                                    </p>
                                </div>
                                <div className="w-8 h-[1px] bg-stone-300 mt-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
        </>
    );
}