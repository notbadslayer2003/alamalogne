'use client';

import Navbar from './Navbar';

export default function Header() {
    return (
        <header id="accueil" className="relative h-screen w-full overflow-hidden">
            {/* Background Image avec overlay subtil */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(/header1.jpg)] brightness-120 saturate-120"
                />
                {/* Overlay très subtil */}
                <div className="absolute inset-0 bg-black/75" />
            </div>

            {/* Navbar intégrée */}
            <Navbar />

            {/* Contenu du header */}
            <div className="relative h-full flex items-center justify-center px-6">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Ornement supérieur */}
                    <div className="mb-12">
                        <div className="w-16 h-[1px] bg-white/40 mx-auto mb-8"></div>
                        <p className="text-white/70 text-xs tracking-[0.3em] uppercase font-light mb-2">
                            Chambre d'hôtes
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-amber-200/80">
                            <span className="text-xs">✦</span>
                            <span className="text-xs tracking-widest uppercase">4 Épis</span>
                            <span className="text-xs">✦</span>
                        </div>
                    </div>

                    {/* Titre principal avec plus d'élégance */}
                    <h1 className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-8 leading-[1.1] tracking-tight">
                        À la Malogne
                    </h1>

                    {/* Sous-titre raffiné */}
                    <p className="text-xl sm:text-2xl text-white/80 mb-16 font-light tracking-wide max-w-2xl mx-auto">
                        Une invitation au calme et à l'authenticité
                    </p>

                    {/* Description élégante */}
                    <div className="max-w-3xl mx-auto mb-16">
                        <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light">
                            Nichée dans un cadre verdoyant, notre chambre d'hôtes célèbre l'art de recevoir
                            avec raffinement. Un lieu où le confort rencontre l'élégance,
                            où chaque détail est pensé pour votre bien-être.
                        </p>
                    </div>

                    {/* CTA discret et élégant */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
                        <a
                            href="#contact"
                            className="group px-10 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30
                       hover:bg-white hover:text-stone-900 transition-all duration-500 tracking-wider text-sm uppercase"
                        >
              <span className="flex items-center space-x-2">
                <span>Réserver votre séjour</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
                        </a>
                    </div>

                    {/* Détails raffinés sans icônes enfantines */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-12 h-[1px] bg-white/30 mx-auto mb-4"></div>
                            <p className="text-white/80 font-light text-sm tracking-wide">Accès privatif</p>
                            <p className="text-white/50 text-xs mt-2 font-light">Votre indépendance préservée</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-[1px] bg-white/30 mx-auto mb-4"></div>
                            <p className="text-white/80 font-light text-sm tracking-wide">Table d'hôtes</p>
                            <p className="text-white/50 text-xs mt-2 font-light">Produits locaux & maison</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-[1px] bg-white/30 mx-auto mb-4"></div>
                            <p className="text-white/80 font-light text-sm tracking-wide">Compagnons bienvenus</p>
                            <p className="text-white/50 text-xs mt-2 font-light">Vos animaux sont les nôtres</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Indicateur de scroll minimaliste */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <a href="#activites" className="flex flex-col items-center text-white/60 hover:text-white/90 transition-colors duration-300">
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent mb-3"></div>
                    <span className="text-[10px] tracking-[0.2em] uppercase">Découvrir</span>
                </a>
            </div>
        </header>
    );
}