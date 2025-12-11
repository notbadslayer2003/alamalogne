'use client';

import { useState, useEffect, useCallback } from 'react';

export default function Gallery() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const images = [
        {
            url: '/index1.jpg',
            alt: 'La chambre',
            description: 'Un lit king size avec une literie de qualité, des draps en coton et une vue sur le jardin. Le genre de lit où on dort vraiment bien.',
            category: 'Intérieur'
        },
        {
            url: '/index2.jpg',
            alt: 'Le salon',
            description: 'Votre coin détente avec canapé confortable, télévision et une sélection de livres sur la région. Parfait pour les soirées tranquilles.',
            category: 'Intérieur'
        },
        {
            url: '/header3.jpg',
            alt: 'Le coin repas',
            description: 'Une petite table pour prendre votre café ou grignoter. Réfrigérateur et bouilloire à disposition.',
            category: 'Intérieur'
        },
        {
            url: '/gal2.jpg',
            alt: 'La mezzanine',
            description: 'Un espace en hauteur avec deux lits simples — idéal si vous venez avec des enfants ou comme coin lecture au calme.',
            category: 'Intérieur'
        },
        {
            url: '/gal3.jpg',
            alt: 'La salle de bain',
            description: 'Douche à l\'italienne, produits d\'accueil bio et serviettes moelleuses. Simple et fonctionnel.',
            category: 'Intérieur'
        },
        {
            url: '/gal4.jpg',
            alt: 'La terrasse',
            description: 'Votre coin en plein air pour le petit-déjeuner quand il fait beau, ou un verre en fin de journée.',
            category: 'Extérieur'
        },
        {
            url: '/gal5.jpg',
            alt: 'Le jardin',
            description: 'Un grand jardin arboré où vous pouvez vous balader. Les chênes ont plus de cent ans.',
            category: 'Extérieur'
        },
        {
            url: '/gal6.jpg',
            alt: 'La maison',
            description: 'La propriété vue du jardin. Votre entrée est indépendante, sur le côté.',
            category: 'Extérieur'
        },
        {
            url: '/gal7.jpg',
            alt: 'Le petit-déjeuner',
            description: 'Ce qui vous attend chaque matin : produits frais, confitures maison de Micheline, pain du boulanger...',
            category: 'Séjour'
        },
        {
            url: '/gal8.jpg',
            alt: 'Les détails',
            description: 'On a essayé de soigner chaque détail pour que vous vous sentiez bien.',
            category: 'Intérieur'
        },
    ];

    // Navigation clavier
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (lightboxIndex === null) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    }, [lightboxIndex]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Grouper les images par slide
    const imagesPerSlide = 3;
    const slides: typeof images[] = [];
    for (let i = 0; i < images.length; i += imagesPerSlide) {
        slides.push(images.slice(i, i + imagesPerSlide));
    }

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    const openLightbox = (globalIndex: number) => {
        setLightboxIndex(globalIndex);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((prev) => (prev! + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length);
        }
    };

    const getGlobalIndex = (slideIndex: number, imageIndex: number) => {
        return slideIndex * imagesPerSlide + imageIndex;
    };

    return (
        <>
            <section id="galerie" className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* En-tête */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 lg:mb-20">
                        <div>
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-[1px] bg-gradient-to-r from-[#c9a962] to-transparent"></div>
                                <p className="text-stone-500 text-[11px] tracking-[0.25em] uppercase font-light">
                                    En images
                                </p>
                            </div>
                            <h2 className="font-playfair text-4xl lg:text-5xl xl:text-[3.5rem] text-stone-900 leading-tight">
                                La chambre<br />
                                <span className="text-stone-500 italic">et ses recoins</span>
                            </h2>
                        </div>
                        <p className="text-stone-500 font-light text-[15px] max-w-sm mt-6 lg:mt-0 lg:text-right">
                            De la chambre au jardin, en passant par le petit-déjeuner —
                            voici ce qui vous attend.
                        </p>
                    </div>

                    {/* Grille d'images */}
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
                            {slides[currentSlide].map((image, index) => {
                                const isLarge = index === 0;
                                return (
                                    <div
                                        key={index}
                                        onClick={() => openLightbox(getGlobalIndex(currentSlide, index))}
                                        className={`relative overflow-hidden group cursor-pointer bg-stone-100
                                            ${isLarge ? 'md:row-span-2 h-72 md:h-auto' : 'h-56 lg:h-64'}`}
                                    >
                                        {/* Image */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700
                                                       group-hover:scale-105"
                                            style={{ backgroundImage: `url('${image.url}')` }}
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0
                                                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Contenu au hover */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-6
                                                        opacity-0 group-hover:opacity-100 transition-all duration-500
                                                        translate-y-4 group-hover:translate-y-0">
                                            <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase mb-2">
                                                {image.category}
                                            </p>
                                            <p className="text-white font-playfair text-xl lg:text-2xl font-light">
                                                {image.alt}
                                            </p>
                                        </div>

                                        {/* Icône zoom */}
                                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/0 group-hover:bg-white/90
                                                        flex items-center justify-center transition-all duration-300
                                                        opacity-0 group-hover:opacity-100">
                                            <svg className="w-4 h-4 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                            </svg>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-10">
                            {/* Compteur */}
                            <div className="flex items-baseline space-x-1">
                                <span className="font-playfair text-3xl text-stone-900">
                                    {String(currentSlide + 1).padStart(2, '0')}
                                </span>
                                <span className="text-stone-400 text-sm">/</span>
                                <span className="text-stone-400 text-sm">
                                    {String(slides.length).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Progress + boutons */}
                            <div className="flex items-center space-x-6">
                                <div className="hidden sm:flex items-center space-x-1 w-32">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className="flex-1 h-0.5 transition-all duration-500"
                                            aria-label={`Aller au slide ${index + 1}`}
                                        >
                                            <div className={`h-full transition-all duration-500 ${
                                                index === currentSlide ? 'bg-stone-900' : 'bg-stone-300'
                                            }`} />
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={prevSlide}
                                        className="w-12 h-12 flex items-center justify-center border border-stone-200
                                                   text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white
                                                   transition-all duration-300"
                                        aria-label="Précédent"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="w-12 h-12 flex items-center justify-center border border-stone-200
                                                   text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white
                                                   transition-all duration-300"
                                        aria-label="Suivant"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hint */}
                    <div className="mt-12 flex items-center justify-center space-x-3 text-stone-400">
                        <div className="w-8 h-[1px] bg-stone-300"></div>
                        <p className="text-[10px] tracking-[0.2em] uppercase">
                            Cliquez pour agrandir
                        </p>
                        <div className="w-8 h-[1px] bg-stone-300"></div>
                    </div>

                </div>
            </section>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-sm"
                    onClick={closeLightbox}
                >
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 z-20 p-6 flex items-center justify-between">
                        <span className="text-white/50 text-sm font-light">
                            {String(lightboxIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                        </span>
                        <button
                            onClick={closeLightbox}
                            className="w-12 h-12 flex items-center justify-center text-white/70 hover:text-white
                                       border border-white/20 hover:border-white/50 transition-all duration-300"
                            aria-label="Fermer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Contenu */}
                    <div className="h-full flex flex-col lg:flex-row" onClick={(e) => e.stopPropagation()}>

                        {/* Image */}
                        <div className="flex-1 relative flex items-center justify-center p-4 lg:p-12">
                            <button
                                onClick={prevImage}
                                className="absolute left-4 lg:left-8 z-10 w-12 h-12 flex items-center justify-center
                                           text-white/50 hover:text-white border border-white/20 hover:border-white/50
                                           bg-black/20 hover:bg-black/40 transition-all duration-300"
                                aria-label="Précédente"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div className="relative max-w-4xl max-h-[70vh] lg:max-h-[80vh]">
                                <img
                                    src={images[lightboxIndex].url}
                                    alt={images[lightboxIndex].alt}
                                    className="max-w-full max-h-[70vh] lg:max-h-[80vh] object-contain shadow-2xl"
                                />
                            </div>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 lg:right-8 z-10 w-12 h-12 flex items-center justify-center
                                           text-white/50 hover:text-white border border-white/20 hover:border-white/50
                                           bg-black/20 hover:bg-black/40 transition-all duration-300"
                                aria-label="Suivante"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Panneau infos - simplifié */}
                        <div className="w-full lg:w-80 bg-white p-8 flex flex-col justify-between
                                        max-h-[35vh] lg:max-h-none overflow-y-auto">
                            <div>
                                <p className="text-[#c9a962] text-[10px] tracking-[0.2em] uppercase mb-4">
                                    {images[lightboxIndex].category}
                                </p>

                                <h3 className="font-playfair text-2xl lg:text-3xl font-light text-stone-900 mb-4">
                                    {images[lightboxIndex].alt}
                                </h3>

                                <p className="text-stone-600 font-light leading-relaxed text-sm">
                                    {images[lightboxIndex].description}
                                </p>
                            </div>

                            {/* Navigation clavier */}
                            <div className="hidden lg:flex items-center space-x-4 mt-8 pt-6 border-t border-stone-100 text-stone-400">
                                <div className="flex items-center space-x-2">
                                    <kbd className="px-2 py-1 bg-stone-100 text-stone-500 text-[10px] rounded">←</kbd>
                                    <kbd className="px-2 py-1 bg-stone-100 text-stone-500 text-[10px] rounded">→</kbd>
                                    <span className="text-[10px]">naviguer</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <kbd className="px-2 py-1 bg-stone-100 text-stone-500 text-[10px] rounded">esc</kbd>
                                    <span className="text-[10px]">fermer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="absolute bottom-0 left-0 right-0 lg:right-80 p-4 bg-gradient-to-t from-black/50 to-transparent">
                        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLightboxIndex(index);
                                    }}
                                    className={`flex-shrink-0 w-14 h-10 bg-cover bg-center transition-all duration-300
                                        ${index === lightboxIndex
                                        ? 'ring-2 ring-white opacity-100'
                                        : 'opacity-40 hover:opacity-70'}`}
                                    style={{ backgroundImage: `url('${img.url}')` }}
                                    aria-label={`Voir ${img.alt}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}