'use client';

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-white">

            {/* Section principale */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                    {/* Colonne 1 - À propos */}
                    <div className="lg:col-span-2">
                        <h3 className="font-playfair text-2xl font-light mb-6">À la Malogne</h3>
                        <p className="text-stone-400 font-light text-sm leading-relaxed mb-6 max-w-md">
                            Chambre d'hôtes de charme à Mons, reconnue pour son excellence et son authenticité wallonne depuis 2012.
                        </p>
                        <div className="flex items-center space-x-2 text-amber-500/80 mb-6">
                            <span className="text-xs">★★★★</span>
                            <span className="text-stone-400 text-xs">4 Épis - Gîtes de Wallonie</span>
                        </div>
                    </div>

                    {/* Colonne 2 - Navigation */}
                    <div>
                        <h4 className="text-sm tracking-wider uppercase font-light mb-6 text-stone-300">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#accueil" className="text-stone-400 hover:text-white transition-colors text-sm font-light">
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#galerie" className="text-stone-400 hover:text-white transition-colors text-sm font-light">
                                    Galerie
                                </a>
                            </li>
                            <li>
                                <a href="#avis" className="text-stone-400 hover:text-white transition-colors text-sm font-light">
                                    Avis
                                </a>
                            </li>
                            <li>
                                <a href="#tarifs" className="text-stone-400 hover:text-white transition-colors text-sm font-light">
                                    Tarifs
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-stone-400 hover:text-white transition-colors text-sm font-light">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 3 - Contact */}
                    <div>
                        <h4 className="text-sm tracking-wider uppercase font-light mb-6 text-stone-300">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="text-stone-400 font-light">
                                <span className="block text-stone-500 text-xs mb-1">Adresse</span>
                                Mons, Wallonie<br />
                                Belgique
                            </li>
                            <li className="text-stone-400 font-light">
                                <span className="block text-stone-500 text-xs mb-1">Email</span>
                                <a href="mailto:contact@alamalogne.com" className="hover:text-white transition-colors">
                                    contact@alamalogne.com
                                </a>
                            </li>
                            <li className="text-stone-400 font-light">
                                <span className="block text-stone-500 text-xs mb-1">Téléphone</span>
                                <a href="tel:+32123456789" className="hover:text-white transition-colors">
                                    +32 12 34 56 789
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Séparateur */}
            <div className="border-t border-stone-800"></div>

            {/* Section bottom */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                    {/* Copyright */}
                    <p className="text-stone-500 text-xs font-light">
                        © {new Date().getFullYear()} À la Malogne. Tous droits réservés.
                    </p>

                    {/* Réseaux sociaux */}
                    <div className="flex items-center space-x-6">
                        <a
                            href="#"
                            className="text-stone-400 hover:text-white transition-colors"
                            aria-label="Facebook"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-stone-400 hover:text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-stone-400 hover:text-white transition-colors"
                            aria-label="TripAdvisor"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 4.039-10.429L24 6.647h-4.361a13.618 13.618 0 0 0-7.633-2.352zm-6 3.754a6.005 6.005 0 0 0-3.96 10.492A4.5 4.5 0 0 1 6.003 8.05zm-.002 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm12 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6.003-2.999a6.005 6.005 0 0 0-3.96 10.492 4.5 4.5 0 0 1 3.957-10.491zm.002 0a4.5 4.5 0 0 1 3.957 10.491A6.005 6.005 0 0 0 12.01 8.05z"/>
                            </svg>
                        </a>
                    </div>

                    {/* Mentions légales */}
                    <div className="flex items-center space-x-4 text-xs">
                        <a href="#" className="text-stone-500 hover:text-stone-400 transition-colors font-light">
                            Mentions légales
                        </a>
                        <span className="text-stone-700">·</span>
                        <a href="#" className="text-stone-500 hover:text-stone-400 transition-colors font-light">
                            Politique de confidentialité
                        </a>
                    </div>

                </div>
            </div>

        </footer>
    );
}