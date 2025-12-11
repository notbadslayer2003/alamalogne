'use client';

import {Wheat} from "lucide-react";

export default function Hero() {
    return (
        <section id="decouvrir" className="bg-[#f8f6f3] py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Image principale avec cadre */}
                    <div className="lg:col-span-6 order-1">
                        <div className="relative">
                            {/* Cadre décoratif décalé */}
                            <div className="absolute -top-4 -left-4 w-full h-full border border-[#c9a962]/30 pointer-events-none" />

                            {/* Image */}
                            <div className="relative h-[420px] lg:h-[540px] overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                    style={{
                                        backgroundImage: "url('/index1.jpg')",
                                    }}
                                />
                            </div>

                            {/* Badge flottant */}
                            <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white px-6 py-4 shadow-xl">
                                <div className="flex items-center space-x-3">
                                    <div className="flex text-[#c9a962] text-xs space-x-0.5">
                                        {[...Array(4)].map((_, i) => <Wheat key={`wheat_${i}`} className="size-3" />)}
                                    </div>
                                    <span className="text-[10px] tracking-widest uppercase text-stone-300">4 Épis</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contenu texte */}
                    <div className="lg:col-span-6 order-2 lg:pl-8">

                        {/* Label */}
                        <div className="mb-8">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-[1px] bg-gradient-to-r from-[#c9a962] to-transparent"></div>
                                <p className="text-stone-500 text-[11px] tracking-[0.25em] uppercase font-light">
                                    Notre histoire
                                </p>
                            </div>
                        </div>

                        {/* Titre */}
                        <h2 className="font-playfair text-4xl lg:text-5xl xl:text-[3.5rem] text-stone-900 mb-8 leading-[1.15]">
                            Une maison,<br />
                            <span className="text-stone-500 italic">une passion</span>
                        </h2>

                        {/* Description personnelle */}
                        <p className="text-stone-600 font-light leading-[1.9] mb-6 text-[15px] lg:text-base max-w-lg">
                            Depuis 2012, Micheline et Francis accueillent les voyageurs dans leur
                            maison de caractère. Ce qui a commencé comme une envie de partager
                            leur coin de Wallonie est devenu une belle aventure humaine.
                        </p>

                        <p className="text-stone-600 font-light leading-[1.9] mb-10 text-[15px] lg:text-base max-w-lg">
                            Labellisée <span className="text-stone-800">Wallonie Destination Qualité</span>,
                            leur chambre d'hôtes a reçu la distinction 4 épis — une reconnaissance
                            de leur engagement pour un accueil authentique et soigné.
                        </p>

                        {/* Points clés */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12">
                            {[
                                'Literie haut de gamme',
                                'Entrée indépendante',
                                'Salon & mezzanine',
                                'Cadre verdoyant'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="w-5 h-[1px] bg-[#c9a962]"></div>
                                    <p className="text-stone-700 font-light text-sm">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="#galerie"
                            className="group inline-flex items-center space-x-4"
                        >
                            <span className="text-stone-800 tracking-[0.15em] uppercase text-xs font-normal
                                           border-b border-stone-300 pb-1 group-hover:border-stone-800 transition-colors">
                                Voir les photos
                            </span>
                            <span className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center
                                           group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white
                                           transition-all duration-300">
                                <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>

                    </div>

                </div>

                {/* Section petit-déjeuner */}
                <div className="mt-20 lg:mt-28 pt-16 border-t border-stone-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                        {/* Texte */}
                        <div className="lg:col-span-5">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-[1px] bg-gradient-to-r from-[#c9a962] to-transparent"></div>
                                <p className="text-stone-500 text-[11px] tracking-[0.25em] uppercase font-light">
                                    Inclus dans votre séjour
                                </p>
                            </div>

                            <h3 className="font-playfair text-3xl lg:text-4xl text-stone-900 mb-6 leading-tight">
                                Le petit-déjeuner<br />
                                <span className="text-stone-500 italic">de Micheline</span>
                            </h3>

                            <p className="text-stone-600 font-light leading-relaxed mb-6">
                                Chaque matin, Micheline prépare un petit-déjeuner complet avec
                                des produits locaux et ses fameuses confitures maison. Pain frais
                                du boulanger, fromages de la région, œufs fermiers, fruits de saison...
                            </p>

                            <div className="flex items-center space-x-6 text-stone-500 text-sm">
                                <span className="flex items-center space-x-2">
                                    <svg className="w-4 h-4 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>8h30 – 10h00</span>
                                </span>
                                <span className="flex items-center space-x-2">
                                    <svg className="w-4 h-4 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span>Fait maison</span>
                                </span>
                            </div>
                        </div>

                        {/* Images */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                        style={{ backgroundImage: "url('/breakfast2.jpg')" }}
                                    />
                                </div>
                                <div className="aspect-[4/5] overflow-hidden mt-8">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                        style={{ backgroundImage: "url('/breakfast1.jpg')" }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}