'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from "next/image";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');

    // Structure adaptée à Booking.com
    const testimonials = [
        {
            text: "Accueil chaleureux de Micheline et Francis, confort exceptionnel de la chambre et literie. Le petit-déjeuner était fantastique et varié, entièrement composé de produits belges et faits maison. Nous reviendrons avec plaisir !",
            author: "Jenny",
            location: "Belgique",
            date: "Octobre 2025",
            rating: 10,
            tripType: "Séjour en couple",
            highlight: "Petit-déjeuner"
        },
        {
            text: "Très agréablement surpris par l'accueil chaleureux, la petite soupe de bienvenue, le frigo garni et l'extraordinaire petit-déjeuner. Merci pour ces très sympathiques moments !",
            author: "Luc",
            location: "Suisse",
            date: "Novembre 2024",
            rating: 10,
            tripType: "Séjour en couple",
            highlight: "Soupe de bienvenue"
        },
        {
            text: "Francis et Micheline font de la VRAIE chambre d'hôtes. Tout y est bien, bon, intelligemment pensé. Une halte tout confort aux pieds des Terrils, sur le GR 412 pour les randonneurs !",
            author: "Andre",
            location: "Belgique",
            date: "Décembre 2024",
            rating: 9.0,
            tripType: "Voyageur Individuel",
            highlight: "Idéal randonneurs"
        },
        {
            text: "Literie très confortable, maison au calme, hôtes parfaits. Plein de petites attentions : thés, cafés, gaufres et jus de fruits. Il fait bon malgré les températures négatives dehors.",
            author: "Michèle",
            location: "France",
            date: "Janvier 2025",
            rating: 10,
            tripType: "Voyageur Individuel",
            highlight: "Petites attentions"
        },
        {
            text: "Hôtes exceptionnels, séjour parfait. Le petit-déjeuner était vraiment incroyable ! Hébergement à recommander.",
            author: "Sophie",
            location: "France",
            date: "Novembre 2023",
            rating: 10,
            tripType: "Séjour en famille",
            highlight: "Produits locaux"
        },
        {
            text: "Hôtes très sympathiques, lit très confortable, excellent et copieux petit-déjeuner, petits encas dans le frigo.",
            author: "Ariane",
            location: "Belgique",
            date: "Août 2024",
            rating: 9.0,
            tripType: "Voyageur Individuel",
            highlight: "Literie confortable"
        },
        {
            text: "Accueil très chaleureux, nous pensions être chez des amis de longue date. Appartement fonctionnel et confortable, décoré pour découvrir l'histoire de la région.",
            author: "Sidibe",
            location: "Chine",
            date: "Avril 2023",
            rating: 10,
            tripType: "Séjour en couple",
            highlight: "Accueil familial"
        },
        {
            text: "L'accueil, la diversité du petit-déjeuner, la gentillesse des hôtes, le jardin et le réveil avec le chant des oiseaux le matin.",
            author: "Lysiane",
            location: "Belgique",
            date: "Mars 2023",
            rating: 10,
            tripType: "Séjour en famille",
            highlight: "Cadre paisible"
        },
    ];

    // Stats calculées dynamiquement
    const averageRating = 9.8;
    const totalReviews = 77; // Nombre total sur Booking

    // Catégories de notes (style Booking)
    const categories = [
        { name: 'Personnel', score: 10 },
        { name: 'Équipements', score: 9.9 },
        { name: 'Propreté', score: 10 },
        { name: 'Confort', score: 9.8 },
        { name: 'Rapport qualité/prix', score: 9.8 },
        { name: 'Emplacement', score: 9.7 },
        { name: 'Connexion Wi-Fi gratuite', score: 10 },
    ];

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setDirection('next');
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 'next' : 'prev');
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const nextSlide = () => {
        setDirection('next');
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setDirection('prev');
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    // Fonction pour obtenir la couleur selon la note
    const getRatingColor = (rating: number) => {
        if (rating >= 9.5) return 'bg-emerald-600';
        if (rating >= 9.0) return 'bg-emerald-500';
        if (rating >= 8.5) return 'bg-lime-500';
        return 'bg-yellow-500';
    };

    const getRatingLabel = (rating: number) => {
        if (rating >= 9.5) return 'Exceptionnel';
        if (rating >= 9.0) return 'Superbe';
        if (rating >= 8.5) return 'Très bien';
        return 'Bien';
    };

    return (
        <section id="avis" className="py-20 lg:py-28 bg-[#f8f6f3]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* En-tête */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
                    <div>
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-[#c9a962] to-transparent"></div>
                            <p className="text-stone-500 text-[11px] tracking-[0.25em] uppercase font-light">
                                Témoignages
                            </p>
                        </div>
                        <h2 className="font-playfair text-4xl lg:text-5xl xl:text-[3.5rem] text-stone-900 leading-tight">
                            L'avis de nos hôtes
                        </h2>
                    </div>

                    {/* Badge Booking */}
                    <div className="mt-8 lg:mt-0 flex items-center space-x-4">
                        <div className="flex items-center space-x-3 px-5 py-3 bg-white border border-stone-200">
                            <Image src="/logos/booking.png" alt="" width={32} height={32} />
                            <div>
                                <p className="text-[10px] text-stone-500 uppercase tracking-wider">Noté sur</p>
                                <p className="text-sm font-medium text-[#003580]">Booking.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                    {/* Colonne gauche - Score global & catégories */}
                    <div className="lg:col-span-4">

                        {/* Score principal */}
                        <div className="bg-white p-8 mb-6">
                            <div className="flex items-start space-x-5">
                                <div className={`${getRatingColor(averageRating)} text-white px-4 py-3 
                                                flex flex-col items-center justify-center min-w-[80px]`}>
                                    <span className="text-3xl font-semibold">{averageRating}</span>
                                    <span className="text-[10px] uppercase tracking-wider opacity-90">/10</span>
                                </div>
                                <div>
                                    <p className="text-xl text-stone-900 font-light mb-1">
                                        {getRatingLabel(averageRating)}
                                    </p>
                                    <p className="text-stone-500 text-sm font-light">
                                        {totalReviews} avis vérifiés
                                    </p>
                                    <div className="flex items-center mt-3 space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 text-[#c9a962]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Catégories de notes */}
                        <div className="bg-white p-8">
                            <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-6">
                                Notes par catégorie
                            </p>
                            <div className="space-y-4">
                                {categories.map((cat, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-stone-700 text-sm font-light">{cat.name}</span>
                                            <span className="text-stone-900 text-sm font-medium">{cat.score}</span>
                                        </div>
                                        <div className="h-1.5 bg-stone-100 overflow-hidden">
                                            <div
                                                className="h-full bg-[#c9a962] transition-all duration-1000"
                                                style={{ width: `${cat.score * 10}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Lien vers Booking */}
                        <a
                            href="https://www.booking.com/hotel/be/a-la-malogne.fr.html#tab-reviews"
                            target="_blank"
                            className="mt-6 flex items-center justify-between p-4 bg-white border border-stone-200
                                       hover:border-stone-400 transition-colors group"
                        >
                            <span className="text-stone-600 text-sm font-light">Voir tous les avis</span>
                            <svg className="w-4 h-4 text-stone-400 group-hover:text-stone-600
                                            transform group-hover:translate-x-1 transition-all"
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    {/* Colonne droite - Slider témoignages */}
                    <div className="lg:col-span-8">

                        {/* Card témoignage principale */}
                        <div className="relative bg-white p-8 lg:p-12 min-h-[400px] flex flex-col">

                            {/* Guillemets décoratifs */}
                            <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
                                <svg className="w-16 h-16 text-stone-100" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                </svg>
                            </div>

                            {/* Badge note */}
                            <div className="flex items-center space-x-4 mb-8">
                                <div className={`${getRatingColor(testimonials[currentIndex].rating)} 
                                                text-white px-3 py-1.5 text-sm font-medium`}>
                                    {testimonials[currentIndex].rating}
                                </div>
                                <span className="text-stone-500 text-sm font-light">
                                    {getRatingLabel(testimonials[currentIndex].rating)}
                                </span>
                                <span className="text-stone-300">·</span>
                                <span className="text-stone-400 text-sm font-light">
                                    {testimonials[currentIndex].date}
                                </span>
                            </div>

                            {/* Texte du témoignage */}
                            <blockquote className="flex-1">
                                <p className="font-playfair text-xl lg:text-2xl text-stone-800 leading-relaxed font-light italic">
                                    "{testimonials[currentIndex].text}"
                                </p>
                            </blockquote>

                            {/* Ce qu'ils ont aimé */}
                            <div className="mt-8 pt-6 border-t border-stone-100">
                                <div className="flex items-center space-x-2 mb-6">
                                    <svg className="w-4 h-4 text-[#c9a962]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-stone-500 text-xs uppercase tracking-wider">
                                        Coup de cœur : {testimonials[currentIndex].highlight}
                                    </span>
                                </div>

                                {/* Auteur */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        {/* Avatar initiales */}
                                        <div className="w-12 h-12 bg-stone-100 flex items-center justify-center">
                                            <span className="text-stone-600 font-light text-lg">
                                                {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-stone-900 font-light">
                                                {testimonials[currentIndex].author}
                                            </p>
                                            <div className="flex items-center space-x-2 text-stone-500 text-sm">
                                                <span className="font-light">{testimonials[currentIndex].location}</span>
                                                <span className="text-stone-300">·</span>
                                                <span className="font-light">{testimonials[currentIndex].tripType}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Badge vérifié */}
                                    <div className="hidden sm:flex items-center space-x-1 text-emerald-600">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-xs font-light">Vérifié</span>
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
                                    className="w-12 h-12 flex items-center justify-center border border-stone-200
                                               text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white
                                               transition-all duration-300"
                                    aria-label="Avis précédent"
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
                                    aria-label="Avis suivant"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Bouton play/pause */}
                                <button
                                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                    className="w-12 h-12 flex items-center justify-center border border-stone-200
                                               text-stone-400 hover:text-stone-600 hover:border-stone-400
                                               transition-all duration-300"
                                    aria-label={isAutoPlaying ? "Pause" : "Play"}
                                >
                                    {isAutoPlaying ? (
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {/* Compteur + dots */}
                            <div className="flex items-center space-x-6">
                                <span className="text-stone-400 text-sm font-light">
                                    {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                                </span>
                                <div className="hidden sm:flex items-center space-x-1.5">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`h-1.5 transition-all duration-500 ${
                                                index === currentIndex
                                                    ? 'w-8 bg-stone-900'
                                                    : 'w-1.5 bg-stone-300 hover:bg-stone-400'
                                            }`}
                                            aria-label={`Aller à l'avis ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}