'use client';

import { useState } from 'react';

export default function Pricing() {
    const [activeTab, setActiveTab] = useState<'tarifs' | 'conditions'>('tarifs');

    return (
        <section id="tarifs" className="py-20 lg:py-28 bg-stone-900">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">

                {/* En-tête */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="w-12 h-[1px] bg-[#c9a962]/60" />
                        <span className="text-xs tracking-[0.25em] uppercase text-[#c9a962] font-light">
                            Séjourner chez nous
                        </span>
                        <div className="w-12 h-[1px] bg-[#c9a962]/60" />
                    </div>

                    <h2 className="font-playfair text-4xl lg:text-5xl font-light text-white mb-6">
                        Tarifs & Informations
                    </h2>

                    {/* Tabs */}
                    <div className="inline-flex bg-white/5 p-1">
                        <button
                            onClick={() => setActiveTab('tarifs')}
                            className={`px-6 py-2.5 text-sm tracking-wide transition-all duration-300 ${
                                activeTab === 'tarifs'
                                    ? 'bg-[#c9a962] text-stone-900'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            Tarifs
                        </button>
                        <button
                            onClick={() => setActiveTab('conditions')}
                            className={`px-6 py-2.5 text-sm tracking-wide transition-all duration-300 ${
                                activeTab === 'conditions'
                                    ? 'bg-[#c9a962] text-stone-900'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            Conditions
                        </button>
                    </div>
                </div>

                {/* Contenu Tarifs */}
                {activeTab === 'tarifs' && (
                    <div className="animate-fadeIn">
                        {/* Grille principale */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">

                            {/* 1 personne */}
                            <div className="bg-white/5 p-6 lg:p-8 text-center group hover:bg-white/[0.07] transition-colors">
                                <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Solo</p>
                                <p className="font-playfair text-5xl text-white mb-2">85€</p>
                                <p className="text-white/50 text-sm font-light mb-6">par nuit</p>
                                <div className="w-8 h-[1px] bg-[#c9a962]/40 mx-auto mb-4" />
                                <p className="text-white/60 text-sm font-light">1 personne · Lit double</p>
                            </div>

                            {/* 2 personnes - Featured */}
                            <div className="bg-[#c9a962]/10 border border-[#c9a962]/30 p-6 lg:p-8 text-center relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-[#c9a962] text-stone-900 text-[10px] tracking-[0.15em] uppercase px-3 py-1">
                                        Populaire
                                    </span>
                                </div>
                                <p className="text-[#c9a962]/70 text-xs tracking-[0.2em] uppercase mb-4">Couple</p>
                                <p className="font-playfair text-5xl text-white mb-2">105€</p>
                                <p className="text-white/50 text-sm font-light mb-6">par nuit</p>
                                <div className="w-8 h-[1px] bg-[#c9a962]/40 mx-auto mb-4" />
                                <p className="text-white/60 text-sm font-light">2 personnes · Lit double</p>
                            </div>

                            {/* 3 personnes */}
                            <div className="bg-white/5 p-6 lg:p-8 text-center group hover:bg-white/[0.07] transition-colors">
                                <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Famille</p>
                                <p className="font-playfair text-5xl text-white mb-2">130€</p>
                                <p className="text-white/50 text-sm font-light mb-6">par nuit</p>
                                <div className="w-8 h-[1px] bg-[#c9a962]/40 mx-auto mb-4" />
                                <p className="text-white/60 text-sm font-light">3 personnes · Lit + appoint</p>
                            </div>
                        </div>

                        {/* Inclus */}
                        <div className="bg-white/5 p-6 mb-8">
                            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/70 text-sm font-light">
                                <span className="flex items-center gap-2">
                                    <span className="text-[#c9a962]">✓</span> Petit-déjeuner
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-[#c9a962]">✓</span> Linge de maison
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-[#c9a962]">✓</span> Wi-Fi Gratuit
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-[#c9a962]">✓</span> Parking
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-[#c9a962]">✓</span> Animaux acceptés
                                </span>
                            </div>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center justify-between bg-white/5 px-6 py-4">
                                <span className="text-white/70 text-sm font-light">Sans petit-déjeuner</span>
                                <span className="text-white font-light">−10€ <span className="text-white/50 text-sm">/ pers. / nuit</span></span>
                            </div>
                            <div className="flex items-center justify-between bg-white/5 px-6 py-4">
                                <span className="text-white/70 text-sm font-light">Lit d'appoint (+12 ans)</span>
                                <span className="text-white font-light">+30€ <span className="text-white/50 text-sm">/ pers. / nuit</span></span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Contenu Conditions */}
                {activeTab === 'conditions' && (
                    <div className="animate-fadeIn space-y-6">

                        {/* Horaires */}
                        <div className="bg-white/5 p-6 lg:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <svg className="w-5 h-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-white font-light text-lg">Horaires</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-white/50 text-sm mb-1">Arrivée</p>
                                    <p className="font-playfair text-2xl text-white">16h – 21h</p>
                                    <p className="text-white/40 text-sm mt-2">Arrivée tardive possible sur demande</p>
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm mb-1">Départ</p>
                                    <p className="font-playfair text-2xl text-white">Avant 10h30</p>
                                </div>
                            </div>
                        </div>

                        {/* Enfants & Lits */}
                        <div className="bg-white/5 p-6 lg:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <svg className="w-5 h-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <h3 className="text-white font-light text-lg">Enfants & lits supplémentaires</h3>
                            </div>

                            <p className="text-white/60 text-sm font-light mb-6">
                                Tous les enfants sont les bienvenus. Les lits d'appoint sont soumis à disponibilité.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between py-3 border-b border-white/10">
                                    <div>
                                        <p className="text-white font-light">0 – 2 ans</p>
                                        <p className="text-white/50 text-sm">Lit bébé ou lit d'appoint</p>
                                    </div>
                                    <span className="text-[#c9a962] text-sm">Gratuit</span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-b border-white/10">
                                    <div>
                                        <p className="text-white font-light">3 – 11 ans</p>
                                        <p className="text-white/50 text-sm">Lit d'appoint</p>
                                    </div>
                                    <span className="text-[#c9a962] text-sm">Gratuit</span>
                                </div>
                                <div className="flex items-center justify-between py-3">
                                    <div>
                                        <p className="text-white font-light">12 ans et plus</p>
                                        <p className="text-white/50 text-sm">Tarif adulte</p>
                                    </div>
                                    <span className="text-white/70 text-sm">30€ / nuit</span>
                                </div>
                            </div>
                        </div>

                        {/* Autres infos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/5 p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <svg className="w-5 h-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <h3 className="text-white font-light">Animaux</h3>
                                </div>
                                <p className="text-white/60 text-sm font-light">
                                    Vos compagnons à quatre pattes sont les bienvenus, sans supplément.
                                </p>
                            </div>

                            <div className="bg-white/5 p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <svg className="w-5 h-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                    <h3 className="text-white font-light">Non-fumeurs</h3>
                                </div>
                                <p className="text-white/60 text-sm font-light">
                                    L'établissement est entièrement non-fumeurs.
                                </p>
                            </div>
                        </div>

                        {/* Paiement & Annulation */}
                        <div className="bg-[#c9a962]/10 border border-[#c9a962]/20 p-6">
                            <div className="flex items-start gap-4">
                                <svg className="w-5 h-5 text-[#c9a962] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h3 className="text-white font-light mb-2">Paiement & Annulation</h3>
                                    <p className="text-white/60 text-sm font-light">
                                        Le paiement est géré par Booking.com. Les conditions d'annulation varient selon l'option choisie.
                                        Prévoyez des espèces pour les éventuels suppléments sur place.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                    href="https://www.booking.com/hotel/be/a-la-malogne.fr.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-[#c9a962] text-stone-900
                    hover:bg-white transition-colors duration-300"
                    >
                    <span className="text-sm tracking-[0.15em] uppercase font-medium">
                            Réserver sur Booking.com
                        </span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                <p className="text-white/40 text-sm font-light mt-4">
                    Ou contactez-nous directement pour toute question
                </p>
            </div>

        </div>
</section>
);
}