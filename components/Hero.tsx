'use client';

export default function Hero() {
    return (
        <section className="bg-[#f8f6f3] py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Image à gauche */}
                    <div className="relative h-[400px] lg:h-[480px] order-1 lg:order-1">
                        <div className="absolute inset-0 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                style={{
                                    backgroundImage: "url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070')",
                                }}
                            />
                        </div>
                    </div>

                    {/* Contenu à droite */}
                    <div className="order-2 lg:order-2">

                        {/* Petit badge */}
                        <div className="mb-6">
                            <div className="w-8 h-[1px] bg-stone-400 mb-4"></div>
                            <p className="text-stone-500 text-[10px] tracking-[0.3em] uppercase font-light">
                                Depuis 2012
                            </p>
                        </div>

                        {/* Titre */}
                        <h2 className="font-playfair text-3xl lg:text-4xl font-light text-stone-900 mb-4 leading-tight">
                            L'art de l'accueil
                        </h2>

                        {/* Description */}
                        <p className="text-stone-600 font-light leading-relaxed mb-8 text-[15px]">
                            Notre chambre d'hôtes fait l'unanimité depuis son inauguration.
                            Reconnue par le Commissariat Général au Tourisme et labellisée
                            Wallonie Destination Qualité, elle incarne notre passion pour l'hospitalité.
                        </p>

                        {/* Points clés - ultra minimalistes */}
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-1 h-1 bg-stone-400 rounded-full"></div>
                                <p className="text-stone-700 font-light text-sm">Literie d'exception</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-1 h-1 bg-stone-400 rounded-full"></div>
                                <p className="text-stone-700 font-light text-sm">Coin salon · Coin repas · Mezzanine</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div class="w-1 h-1 bg-stone-400 rounded-full"></div>
                                <p className="text-stone-700 font-light text-sm">Entrée indépendante</p>
                            </div>
                        </div>

                        {/* CTA minimaliste */}
                        <a
                            href="#galerie"
                            className="group inline-flex items-center space-x-2 text-stone-700 hover:text-stone-900 transition-colors text-sm"
                        >
                            <span className="tracking-wider uppercase font-light">Découvrir</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </a>

                    </div>

                </div>
            </div>
        </section>
    );
}