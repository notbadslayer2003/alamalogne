'use client';

import { useState } from 'react';

export default function Activities() {
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const categories = [
        {
            name: "Culture & Patrimoine",
            icon: "🏛️",
            activities: [
                {
                    title: "Grand-Place de Mons",
                    description: "Cœur historique de la ville, la Grand-Place est entourée de magnifiques façades baroques et de l'emblématique Hôtel de Ville. Ne manquez pas de caresser le singe du Grand-Garde pour porter chance.",
                    distance: "2 km",
                    duration: "1-2h",
                    image: "https://images.unsplash.com/photo-1555881603-1f353d6e8de4?q=80&w=2070",
                    fullDescription: "La Grand-Place de Mons est le cœur battant de la ville. Cette place majestueuse, entourée d'édifices remarquables datant du XVe au XVIIIe siècle, témoigne de la riche histoire de la cité. L'Hôtel de Ville, avec sa façade gothique du XVe siècle, domine la place. À l'entrée de l'édifice, vous découvrirez le fameux singe du Grand-Garde, une statuette en fer forgé que l'on caresse de la main gauche pour porter bonheur. Cette tradition remonte à plusieurs siècles.",
                    website: "https://www.visitmons.be/grand-place",
                    openingHours: "Accessible 24h/24",
                    price: "Gratuit",
                    contact: "Office du Tourisme: +32 65 33 55 80"
                },
                {
                    title: "Beffroi de Mons (UNESCO)",
                    description: "Classé au patrimoine mondial de l'UNESCO, ce beffroi du 17ème siècle offre une vue panoramique époustouflante sur la ville et ses environs. 365 marches pour une expérience inoubliable.",
                    distance: "2.5 km",
                    duration: "1-2h",
                    image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070",
                    fullDescription: "Le Beffroi de Mons, unique beffroi baroque de Belgique, culmine à 87 mètres. Construit entre 1661 et 1672 par les architectes Vincent Anthony et Louis Ledoux, il est inscrit au patrimoine mondial de l'UNESCO depuis 1999. L'ascension de ses 365 marches (une par jour de l'année) vous récompensera par une vue panoramique à 360° sur Mons et sa région. Le carillon de 47 cloches résonne régulièrement dans toute la ville.",
                    website: "https://www.visitmons.be/beffroi",
                    openingHours: "Mar-Dim: 10h-18h (fermé lundi)",
                    price: "Adulte: 5€ / Réduit: 3€",
                    contact: "beffroi@ville.mons.be"
                },
                {
                    title: "Musée BAM (Beaux-Arts Mons)",
                    description: "Un écrin d'art moderne et contemporain dans un bâtiment à l'architecture remarquable. Collections permanentes et expositions temporaires de renommée internationale.",
                    distance: "2 km",
                    duration: "2-3h",
                    image: "https://images.unsplash.com/photo-1566127444979-b3d2b64c76b7?q=80&w=2071",
                    fullDescription: "Le BAM (Beaux-Arts Mons) est installé dans un magnifique bâtiment réunissant l'ancien Mont-de-Piété et une extension contemporaine signée par le studio d'architecture barcelonais Barozzi Veiga. Ce musée d'exception présente des collections allant de l'art ancien aux créations contemporaines. Ne manquez pas les œuvres de Jean Arp, Pierre Alechinsky, et les expositions temporaires de renommée internationale.",
                    website: "https://www.bam.mons.be",
                    openingHours: "Mar-Dim: 10h-18h",
                    price: "Adulte: 8€ / Gratuit -26 ans",
                    contact: "+32 65 40 53 20"
                }
            ]
        },
        {
            name: "Nature & Détente",
            icon: "🌳",
            activities: [
                {
                    title: "Parc du Waux-Hall",
                    description: "Poumon vert de la ville, ce parc historique offre des sentiers ombragés, un lac paisible et des aires de pique-nique. Idéal pour une promenade matinale ou une pause lecture.",
                    distance: "3 km",
                    duration: "1-3h",
                    image: "https://images.unsplash.com/photo-1587502537745-84b86d8b1a34?q=80&w=2074",
                    fullDescription: "Le Parc du Waux-Hall est un magnifique parc paysager de 13 hectares créé au XVIIIe siècle. Avec son lac romantique, ses sentiers sinueux, ses pelouses vallonnées et sa végétation luxuriante, c'est l'endroit parfait pour une escapade nature en pleine ville. Le parc abrite également un kiosque à musique où se déroulent des concerts en été, ainsi qu'une aire de jeux pour enfants.",
                    website: "https://www.visitmons.be/parc-waux-hall",
                    openingHours: "Accessible 24h/24",
                    price: "Gratuit",
                    contact: "Ville de Mons - Espaces verts"
                },
                {
                    title: "Bois de Colfontaine",
                    description: "Forêt domaniale avec sentiers balisés pour randonnées et VTT. Faune et flore diversifiées, parfait pour les amoureux de nature et les familles.",
                    distance: "8 km",
                    duration: "2-4h",
                    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074",
                    fullDescription: "Le Bois de Colfontaine est une vaste forêt domaniale de plus de 400 hectares offrant de nombreux sentiers balisés pour la randonnée pédestre et le VTT. Cette forêt mixte abrite une biodiversité remarquable avec chevreuils, renards, pics et une flore variée selon les saisons. Plusieurs circuits sont proposés, de 5 à 15 km, adaptés à tous les niveaux. Points d'observation ornithologique et tables de pique-nique jalonnent les parcours.",
                    website: "https://www.wallonie-tourisme.be/bois-colfontaine",
                    openingHours: "Accessible toute l'année",
                    price: "Gratuit",
                    contact: "Département Nature et Forêts"
                },
                {
                    title: "Jardin du Mayeur",
                    description: "Jardin médiéval reconstitué avec plantes médicinales et aromatiques. Un havre de paix au cœur de la vieille ville, parfait pour une pause contemplative.",
                    distance: "2 km",
                    duration: "30min-1h",
                    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2032",
                    fullDescription: "Le Jardin du Mayeur est un charmant jardin médiéval reconstitué selon les plans d'origine. Situé à l'arrière de l'Hôtel de Ville, il présente une collection de plantes médicinales et aromatiques utilisées au Moyen Âge. Organisé en carrés thématiques (plantes tinctoriales, condimentaires, médicinales), ce jardin offre une expérience sensorielle unique. Des panneaux explicatifs détaillent les usages historiques de chaque plante.",
                    website: "https://www.visitmons.be/jardin-mayeur",
                    openingHours: "Avr-Oct: 10h-18h",
                    price: "Gratuit",
                    contact: "Office du Tourisme"
                }
            ]
        },
        {
            name: "Gastronomie",
            icon: "🍽️",
            activities: [
                {
                    title: "Le Comptoir de Maître Kanter",
                    description: "Brasserie traditionnelle wallonne proposant des plats régionaux authentiques. Ambiance chaleureuse et conviviale dans un cadre historique.",
                    distance: "2 km",
                    duration: "1-2h",
                    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
                    fullDescription: "Le Comptoir de Maître Kanter vous accueille dans un cadre chaleureux pour découvrir les saveurs authentiques de la cuisine wallonne. Au menu: carbonades flamandes, boulets sauce lapin, waterzooi, accompagnés d'une sélection de bières belges artisanales. L'établissement privilégie les produits locaux et de saison. La terrasse offre une vue imprenable sur la Grand-Place en été.",
                    website: "https://www.maitrekanter.fr/restaurant/mons",
                    openingHours: "Lun-Dim: 11h30-23h",
                    price: "Plat: 15-25€",
                    contact: "+32 65 84 64 90"
                },
                {
                    title: "Marché du samedi",
                    description: "Marché hebdomadaire sur la Grand-Place avec produits locaux, fromages wallons, charcuteries artisanales et spécialités régionales. Une explosion de saveurs authentiques.",
                    distance: "2 km",
                    duration: "1-2h",
                    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070",
                    fullDescription: "Chaque samedi matin, la Grand-Place de Mons s'anime avec son marché traditionnel. Plus de 80 commerçants proposent des produits frais et locaux: fruits et légumes de saison, fromages artisanaux wallons, charcuteries, viandes fermières, poissons, fleurs, et spécialités régionales. C'est l'occasion idéale de rencontrer les producteurs locaux, goûter les saveurs du terroir et s'immerger dans l'atmosphère authentique montoise.",
                    website: "https://www.visitmons.be/marche",
                    openingHours: "Samedi: 7h-13h",
                    price: "Gratuit (achats variables)",
                    contact: "Service Commerce - Ville de Mons"
                },
                {
                    title: "Route de la Bière Wallonne",
                    description: "Découverte des brasseries artisanales de la région. Visites guidées, dégustations et rencontre avec les maîtres-brasseurs passionnés.",
                    distance: "5-15 km",
                    duration: "Demi-journée",
                    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=2070",
                    fullDescription: "La Route de la Bière Wallonne vous emmène à la découverte des brasseries artisanales de la région montoise. Visitez des brasseries comme la Brasserie du Borinage, découvrez les secrets de fabrication des bières belges, rencontrez des maîtres-brasseurs passionnés et dégustez des créations uniques: bières blondes, brunes, ambrées, IPA et bières de saison. Certaines brasseries proposent également une restauration autour de la bière.",
                    website: "https://www.routedelabiere.be",
                    openingHours: "Sur réservation",
                    price: "Visite+dégustation: 12-20€",
                    contact: "info@routedelabiere.be"
                }
            ]
        },
        {
            name: "Événements & Traditions",
            icon: "🎭",
            activities: [
                {
                    title: "Ducasse de Mons",
                    description: "Festivité exceptionnelle inscrite au patrimoine immatériel de l'UNESCO. Le combat du dragon (Doudou) attire des milliers de visiteurs chaque année en juin.",
                    distance: "2 km",
                    duration: "Journée",
                    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070",
                    fullDescription: "La Ducasse de Mons, inscrite au patrimoine immatériel de l'UNESCO, est l'événement incontournable de la ville. Chaque dimanche de la Trinité (mai-juin), des milliers de personnes se rassemblent pour assister au célèbre 'Combat dit Lumeçon' (Doudou). Cette procession médiévale met en scène Saint Georges combattant le dragon, suivie d'un cortège folklorique spectaculaire avec chevaux, chars et personnages historiques. Une expérience unique mêlant tradition, ferveur populaire et folklore wallon.",
                    website: "https://www.ducassedemons.be",
                    openingHours: "Dimanche de la Trinité (mai-juin)",
                    price: "Gratuit (événement public)",
                    contact: "Office du Tourisme de Mons"
                },
                {
                    title: "Mons Cœur en Neige",
                    description: "Village de Noël féérique avec patinoire, chalets artisanaux, animations et gastronomie. Une ambiance magique durant tout le mois de décembre.",
                    distance: "2 km",
                    duration: "2-4h",
                    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069",
                    fullDescription: "Durant les fêtes de fin d'année, Mons se transforme en un village de Noël féérique. Le marché 'Mons Cœur en Neige' investit la Grand-Place et ses alentours avec une patinoire, des chalets proposant artisanat local et gastronomie, une grande roue, un carrousel vintage et de nombreuses animations pour petits et grands. Illuminations spectaculaires, concerts, spectacles de rue et passage du Père Noël créent une atmosphère magique et chaleureuse.",
                    website: "https://www.monscoeurenneige.be",
                    openingHours: "Décembre: Lun-Jeu 11h-21h, Ven-Dim 11h-22h",
                    price: "Gratuit (consommations payantes)",
                    contact: "Ville de Mons - Événements"
                }
            ]
        }
    ];

    const openModal = (activity) => {
        setSelectedActivity(activity);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Empêche le scroll du body
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedActivity(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <section id="activites" className="py-20 lg:py-28 bg-[#f8f6f3]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* En-tête */}
                    <div className="mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
                        <div className="w-8 h-[1px] bg-stone-400 mb-6 mx-auto"></div>
                        <h2 className="font-playfair text-4xl lg:text-5xl font-light text-stone-900 mb-6 leading-tight">
                            Découvrir la région
                        </h2>
                        <p className="text-stone-600 font-light text-[15px] leading-relaxed">
                            Mons et ses environs regorgent de trésors culturels, naturels et gastronomiques.
                            Laissez-vous guider par nos recommandations pour un séjour riche en découvertes.
                        </p>
                    </div>

                    {/* Catégories d'activités */}
                    {categories.map((category, catIndex) => (
                        <div key={catIndex} className="mb-20 last:mb-0">

                            {/* Titre de catégorie */}
                            <div className="flex items-center space-x-3 mb-10">
                                <span className="text-3xl">{category.icon}</span>
                                <h3 className="font-playfair text-2xl lg:text-3xl font-light text-stone-900">
                                    {category.name}
                                </h3>
                                <div className="flex-1 h-[1px] bg-stone-300 ml-6"></div>
                            </div>

                            {/* Grille d'activités */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                                {category.activities.map((activity, actIndex) => (
                                    <div
                                        key={actIndex}
                                        onClick={() => openModal(activity)}
                                        className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer"
                                    >
                                        {/* Image */}
                                        <div className="relative h-48 lg:h-56 overflow-hidden bg-stone-100">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url('${activity.image}')` }}
                                            />
                                            {/* Badge "En savoir plus" au survol */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                                <span className="text-white text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    En savoir plus →
                                                </span>
                                            </div>
                                        </div>

                                        {/* Contenu */}
                                        <div className="p-6 lg:p-8">
                                            <h4 className="font-playfair text-xl font-light text-stone-900 mb-3">
                                                {activity.title}
                                            </h4>
                                            <p className="text-stone-600 font-light text-sm leading-relaxed mb-4">
                                                {activity.description}
                                            </p>

                                            {/* Infos pratiques */}
                                            <div className="flex items-center space-x-4 pt-4 border-t border-stone-200">
                                                <div className="flex items-center space-x-2 text-stone-500 text-xs">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="font-light">{activity.distance}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-stone-500 text-xs">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="font-light">{activity.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}

                    {/* CTA final */}
                    <div className="mt-16 lg:mt-20 text-center">
                        <div className="bg-white p-10 lg:p-12 max-w-3xl mx-auto">
                            <h3 className="font-playfair text-2xl lg:text-3xl font-light text-stone-900 mb-4">
                                Besoin de conseils personnalisés ?
                            </h3>
                            <p className="text-stone-600 font-light text-sm mb-8 leading-relaxed">
                                Nous connaissons la région comme notre poche et serons ravis de vous orienter
                                selon vos envies et centres d'intérêt.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center space-x-2 px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition-colors duration-300"
                            >
                                <span className="text-sm tracking-wider uppercase font-light">Nous contacter</span>
                                <span>→</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* Modal */}
            {isModalOpen && selectedActivity && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Bouton fermer */}
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white hover:bg-stone-100 transition-colors duration-300 group"
                            aria-label="Fermer"
                        >
                            <svg className="w-5 h-5 text-stone-600 group-hover:text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image en-tête */}
                        <div className="relative h-64 lg:h-80 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url('${selectedActivity.image}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>

                        {/* Contenu */}
                        <div className="p-8 lg:p-12">
                            {/* Titre */}
                            <h3 className="font-playfair text-3xl lg:text-4xl font-light text-stone-900 mb-4">
                                {selectedActivity.title}
                            </h3>

                            {/* Description courte */}
                            <p className="text-stone-600 font-light text-base leading-relaxed mb-6 italic">
                                {selectedActivity.description}
                            </p>

                            {/* Ligne de séparation */}
                            <div className="w-12 h-[1px] bg-stone-300 mb-8"></div>

                            {/* Description complète */}
                            <p className="text-stone-700 font-light text-[15px] leading-relaxed mb-8">
                                {selectedActivity.fullDescription}
                            </p>

                            {/* Informations pratiques */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 p-6 bg-stone-50">
                                <div>
                                    <h4 className="font-playfair text-lg text-stone-900 mb-3">Informations pratiques</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 mt-1 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div>
                                                <span className="font-medium text-stone-800">Horaires:</span>
                                                <span className="text-stone-600 ml-2">{selectedActivity.openingHours}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 mt-1 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div>
                                                <span className="font-medium text-stone-800">Tarif:</span>
                                                <span className="text-stone-600 ml-2">{selectedActivity.price}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 mt-1 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <div>
                                                <span className="font-medium text-stone-800">Distance:</span>
                                                <span className="text-stone-600 ml-2">{selectedActivity.distance}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-playfair text-lg text-stone-900 mb-3">Contact</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 mt-1 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-stone-600">{selectedActivity.contact}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bouton site web */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={selectedActivity.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center space-x-2 px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition-colors duration-300"
                                >
                                    <span className="text-sm tracking-wider uppercase font-light">Visiter le site web</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-8 py-4 border border-stone-300 text-stone-700 hover:bg-stone-50 transition-colors duration-300"
                                >
                                    <span className="text-sm tracking-wider uppercase font-light">Fermer</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}