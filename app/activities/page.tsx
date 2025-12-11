'use client';

import { useState, useEffect, useCallback } from 'react';
import Navbar from "@/components/Navbar";

interface Activity {
    title: string;
    description: string;
    distance: string;
    duration: string;
    image: string;
    fullDescription: string;
    website: string;
    openingHours: string;
    price: string;
    address: string;
    highlight: string;
    badge?: string;
}

interface Category {
    id: string;
    name: string;
    icon: JSX.Element;
    description: string;
    activities: Activity[];
}

export default function Activities() {
    const [selectedActivityIndex, setSelectedActivityIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState(0);

    const categories: Category[] = [
        {
            id: "patrimoine",
            name: "Patrimoine UNESCO",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            description: "Mons compte 4 sites classés UNESCO",
            activities: [
                {
                    title: "Beffroi de Mons",
                    description: "Unique beffroi baroque de Belgique, 87 mètres de haut et 49 cloches pour une vue panoramique exceptionnelle sur la ville.",
                    distance: "4 km",
                    duration: "1h30",
                    image: "/beffroi.jpg",
                    fullDescription: "Le Beffroi de Mons, seul beffroi baroque de Belgique, est reconnu au patrimoine mondial de l'UNESCO depuis 1999. Érigé entre 1661 et 1672, il culmine à 87 mètres et abrite un carillon de 49 cloches qui jouent des airs folkloriques montois tous les quarts d'heure. Depuis 2016, le savoir-faire des carillonneurs est également inscrit au patrimoine immatériel de l'UNESCO. Un centre d'interprétation moderne retrace son histoire. L'ascenseur panoramique vous mène au sommet pour une vue à 360° sur Mons et le Borinage.",
                    website: "https://www.visitmons.be/decouvrir/incontournables/beffroi",
                    openingHours: "Mar-Dim : 10h-18h (fermé lundi)",
                    price: "Adulte : 9€ · -12 ans : gratuit",
                    address: "Parc du Château, 7000 Mons",
                    highlight: "Vue 360° sur Mons",
                    badge: "UNESCO"
                },
                {
                    title: "Collégiale Sainte-Waudru",
                    description: "Chef-d'œuvre gothique brabançon abritant le Car d'Or de la Ducasse et l'un des plus beaux trésors d'orfèvrerie de Belgique.",
                    distance: "4 km",
                    duration: "1h",
                    image: "/stwaudru.jpg",
                    fullDescription: "Cette impressionnante collégiale de style gothique brabançon, construite entre 1450 et 1621, est dédiée à Sainte Waudru, patronne de la ville. Elle abrite le célèbre Car d'Or utilisé lors de la Ducasse, des statues d'albâtre remarquables de Jacques Du Broeucq, de magnifiques vitraux du XVIe siècle et l'un des plus beaux ensembles d'orfèvrerie religieuse de Belgique. Le trésor présente des pièces exceptionnelles du XIIe au XIXe siècle. C'est d'ici que part la montée du Car d'Or lors du Doudou.",
                    website: "https://www.visitmons.be/decouvrir/incontournables/collegiale-sainte-waudru",
                    openingHours: "Tous les jours : 9h-18h30",
                    price: "Gratuit · Trésor : 3€",
                    address: "Place du Chapitre, 7000 Mons",
                    highlight: "Trésor & Car d'Or",
                    badge: "2★ Michelin"
                },
                {
                    title: "Cimetière de Saint-Symphorien",
                    description: "Site unique où reposent soldats britanniques et allemands, symbole de paix et de réconciliation. Premier et dernier soldats de la Grande Guerre.",
                    distance: "4 km",
                    duration: "1h",
                    image: "/cimetiere.jpg",
                    fullDescription: "Inscrit au patrimoine mondial de l'UNESCO en septembre 2023, ce cimetière militaire est un lieu unique au monde. Créé en 1916 par les Allemands sur un terrain offert par Jean Houzeau de Lehaie à condition d'y enterrer soldats britanniques et allemands côte à côte. Ici reposent 229 soldats du Commonwealth et 284 soldats allemands. Par un hasard de l'histoire, on y trouve les tombes du premier (John Parr, 21 août 1914) et du dernier (George Ellison, 11 novembre 1918) soldats britanniques tombés au combat. Un jardin de paix à deux étoiles au Guide Michelin.",
                    website: "https://www.visitmons.be/a-voir-a-faire/sites-et-musees/cimetiere-militaire-de-saint-symphorien",
                    openingHours: "Accessible tous les jours",
                    price: "Gratuit",
                    address: "Avenue de la Shangri, 7030 Saint-Symphorien",
                    highlight: "The First & The Last",
                    badge: "UNESCO 2023"
                },
                {
                    title: "Grand-Hornu (MACS)",
                    description: "Ancien complexe minier du XIXe siècle transformé en musée d'art contemporain. Architecture industrielle exceptionnelle.",
                    distance: "12 km",
                    duration: "2-3h",
                    image: "/macs.webp",
                    fullDescription: "Le Grand-Hornu est un chef-d'œuvre d'architecture industrielle du XIXe siècle, classé au patrimoine mondial de l'UNESCO. Cet ancien complexe minier a été transformé en centre d'art contemporain (MACS) présentant plus de 450 œuvres. L'ensemble architectural, avec sa cour elliptique et ses façades néoclassiques, est unique en Europe. Les expositions temporaires sont de niveau international. Le site abrite également le CID (Centre d'Innovation et de Design) qui présente le design contemporain.",
                    website: "https://www.grand-hornu.eu",
                    openingHours: "Mar-Dim : 10h-18h",
                    price: "Adulte : 10€ · Réduit : 6€",
                    address: "Rue Sainte-Louise 82, 7301 Hornu",
                    highlight: "Art & Architecture",
                    badge: "UNESCO"
                }
            ]
        },
        {
            id: "culture",
            name: "Culture & Musées",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            description: "Capitale européenne de la Culture 2015",
            activities: [
                {
                    title: "Musée du Doudou",
                    description: "Plongez dans l'univers de la Ducasse de Mons, patrimoine UNESCO. Le combat légendaire de Saint Georges contre le Dragon.",
                    distance: "4 km",
                    duration: "1h30",
                    image: "/doudou.jpg",
                    fullDescription: "Situé dans le Jardin du Mayeur, le musée du Doudou vous fait découvrir la Ducasse rituelle de Mons, reconnue par l'UNESCO comme patrimoine immatériel de l'humanité depuis 2005. Grâce à des dispositifs interactifs et immersifs, revivez le combat légendaire entre Saint Georges et le Dragon qui a lieu chaque année le dimanche de la Trinité. Découvrez les origines de cette tradition séculaire qui mêle ferveur populaire et folklore wallon, et comprenez pourquoi tout Mons vibre au rythme du Doudou.",
                    website: "https://www.museedudoudou.mons.be",
                    openingHours: "Mar-Dim : 10h-18h",
                    price: "Adulte : 8€ · Réduit : 5€",
                    address: "Jardin du Mayeur, 7000 Mons",
                    highlight: "Patrimoine UNESCO",
                    badge: "Incontournable"
                },
                {
                    title: "Musée François Duesberg",
                    description: "Collection unique au monde de pendules et d'arts décoratifs (1775-1825). 6 étoiles au Guide Michelin pour ses collections.",
                    distance: "4 km",
                    duration: "2h",
                    image: "/duesberg.webp",
                    fullDescription: "Face à la Collégiale Sainte-Waudru, ce musée exceptionnel présente une collection unique au monde de pendules à sujets exotiques de l'époque Consulat et Empire, les fameuses horloges « au bon sauvage » en bronze doré. Vous y découvrirez également de majestueux bronzes dorés français, de superbes porcelaines de Paris et Bruxelles, de somptueuses orfèvreries dont le réputé poinçon montois, et de rares bijoux. Le Baron Duesberg, créateur passionné de ce musée, vous accueille parfois personnellement. Un record : 3 × 2 étoiles au Guide Michelin !",
                    website: "https://www.duesberg.mons.be",
                    openingHours: "Mar, Jeu, Sam, Dim : 15h-18h",
                    price: "Adulte : 8€",
                    address: "Square F. Roosevelt 12, 7000 Mons",
                    highlight: "Pendules uniques",
                    badge: "6★ Michelin"
                },
                {
                    title: "CAP - Culture, Art et Patrimoine",
                    description: "Musée d'art moderne et contemporain dans un écrin architectural alliant Mont-de-Piété historique et extension contemporaine.",
                    distance: "4 km",
                    duration: "2h",
                    image: "/cap.avif",
                    fullDescription: "Le BAM (Beaux-Arts Mons) est installé dans un bâtiment remarquable réunissant l'ancien Mont-de-Piété et une extension contemporaine primée. Ce musée d'exception présente des collections allant de l'art ancien aux créations contemporaines, avec des œuvres de Jean Arp, Pierre Alechinsky et des expositions temporaires de renommée internationale. L'architecture elle-même, signée par le studio barcelonais Barozzi Veiga, vaut le détour. L'entrée est gratuite pour les moins de 26 ans.",
                    website: "https://musees-expos.mons.be/fr/nos-lieux/cap/cap",
                    openingHours: "Mar-Dim : 10h-18h",
                    price: "Adulte : 10€ · -26 ans : gratuit",
                    address: "Rue Neuve 8, 7000 Mons",
                    highlight: "Architecture primée"
                },
                {
                    title: "Mundaneum",
                    description: "Le « Google de papier » : 12 millions de fiches bibliographiques, ancêtre d'Internet et de Wikipédia.",
                    distance: "4 km",
                    duration: "1h30",
                    image: "/Mundaneum.jpg",
                    fullDescription: "Surnommé le « Google de papier » par Le Monde, le Mundaneum est un centre d'archives exceptionnel créé en 1910 par Paul Otlet et Henri La Fontaine, pionniers de la documentation et prix Nobel de la Paix. Il abrite 12 millions de fiches bibliographiques classées selon la Classification Décimale Universelle sur 6 km de documents. Ce projet visionnaire, ancêtre d'Internet et de Wikipédia, visait à rassembler toutes les connaissances du monde. Un lieu fascinant qui témoigne de l'utopie de la connaissance universelle.",
                    website: "https://www.mundaneum.org",
                    openingHours: "Mar-Ven : 13h-17h · Sam-Dim : 11h-18h",
                    price: "Adulte : 8€ · Réduit : 5€",
                    address: "Rue de Nimy 76, 7000 Mons",
                    highlight: "Ancêtre d'Internet"
                },
                {
                    title: "Maison Van Gogh",
                    description: "Découvrez où Vincent van Gogh vécut et trouva sa vocation artistique au contact des mineurs du Borinage.",
                    distance: "6 km",
                    duration: "1h",
                    image: "/vangogh.jpg",
                    fullDescription: "Située à Cuesmes, cette maison est le lieu où Vincent van Gogh vécut d'août 1879 à octobre 1880. C'est ici, au contact des mineurs du Borinage, qu'il trouva sa vocation artistique et réalisa ses premiers dessins. Ce petit musée émouvant retrace cette période décisive de sa vie, son travail d'évangéliste parmi les mineurs et sa transformation en l'un des plus grands peintres de l'histoire. Une étape essentielle pour comprendre les origines de son art.",
                    website: "https://www.visitmons.be/decouvrir/musees/maison-van-gogh",
                    openingHours: "Mar-Dim : 10h-18h",
                    price: "Adulte : 5€ · Réduit : 3€",
                    address: "Rue du Pavillon 3, 7033 Cuesmes",
                    highlight: "Origines de l'artiste"
                }
            ]
        },
        {
            id: "nature",
            name: "Nature & Escapades",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            description: "Terrils, parcs et grands espaces",
            activities: [
                {
                    title: "Terril de l'Héribus",
                    description: "Ascension du plus beau point de vue sur Mons. Roches rouges et bleues, fumerolles, nature sauvage sur le GR412.",
                    distance: "3,5 km",
                    duration: "1-2h",
                    image: "/heribus.jpg",
                    fullDescription: "Le Terril de l'Héribus, surnommé Mont Héribus, offre le plus beau panorama de la région montoise. Culminant à 137 mètres, ce témoignage de l'activité minière du Borinage se caractérise par ses roches rouges d'un côté et bleues de l'autre. Des fumerolles s'échappent encore du versant sud-ouest, signe d'une combustion interne. L'ascension traverse un sous-bois de bouleaux avant d'atteindre le sommet où un wagonnet témoigne du passé minier. Vue imprenable sur le beffroi, la collégiale et la chaîne des terrils. Le site est traversé par le GR412, sentier de Grande Randonnée des terrils.",
                    website: "https://www.visitmons.be/a-voir-a-faire/parcs-et-jardins/terril-de-l-heribus",
                    openingHours: "Accessible 24h/24",
                    price: "Gratuit",
                    address: "Chemin de Bavay, 7033 Cuesmes",
                    highlight: "Panorama 360°",
                    badge: "GR412"
                },
                {
                    title: "SPARKOH!",
                    description: "Le plus grand science center de Belgique sur un ancien site minier. 12 000m² d'expériences ludiques pour petits et grands.",
                    distance: "5 km",
                    duration: "Journée",
                    image: "/SPARKOH-1.jpg",
                    fullDescription: "SPARKOH! (anciennement le PASS) est le plus grand science center de Belgique, installé sur l'ancien site minier du Crachet-Picquery réhabilité par l'architecte Jean Nouvel. Sur 12 000m² d'espaces interactifs, explorez 17 expositions thématiques : chimie, numérique, sport, nature, corps humain... Cinéma 4D, parcours acrobatique indoor sur 3 étages, plaine de jeux extérieure de 3 000m², jardin de la biodiversité et terril à escalader. Des ateliers scientifiques sont proposés pendant les congés scolaires. Une journée entière d'émerveillement pour toute la famille !",
                    website: "https://www.sparkoh.be",
                    openingHours: "Dim : 10h-18h · Vacances : tous les jours",
                    price: "Adulte : 25€ · Enfant : 15€ · Senior : 17€",
                    address: "Rue de Mons 3, 7080 Frameries",
                    highlight: "17 expositions",
                    badge: "En famille"
                },
                {
                    title: "Pairi Daiza",
                    description: "Élu meilleur zoo d'Europe à plusieurs reprises. 7 500 animaux, 9 mondes à thème et la possibilité de dormir près des animaux.",
                    distance: "20 km",
                    duration: "Journée",
                    image: "/pairidaiza.jpg",
                    fullDescription: "Pairi Daiza, élu « Meilleur Zoo d'Europe » à plusieurs reprises et certifié 3 étoiles au Guide Vert Michelin, vous fait voyager sur les cinq continents. Plus de 7 500 animaux de 800 espèces vous attendent : pandas géants (les seuls de Belgique !), éléphants, ours blancs, orangs-outans, gorilles, morses... Les 9 mondes thématiques reconstituent fidèlement les environnements naturels avec temples indonésiens authentiques, jardins chinois, toundra arctique. Possibilité de séjourner dans des lodges au plus près des animaux pour une expérience inoubliable.",
                    website: "https://www.pairidaiza.eu",
                    openingHours: "10h-18h (19h en été)",
                    price: "Adulte : 44€ · Enfant 3-11 ans : 38€",
                    address: "Domaine de Cambron, 7940 Brugelette",
                    highlight: "Pandas géants",
                    badge: "3★ Michelin"
                },
                {
                    title: "Château de Beloeil",
                    description: "Le « Versailles belge » et ses jardins à la française de 25 hectares. Résidence des Princes de Ligne depuis le XIVe siècle.",
                    distance: "25 km",
                    duration: "Demi-journée",
                    image: "/beloeil.webp",
                    fullDescription: "Surnommé le « Versailles belge », le Château de Beloeil est la résidence des Princes de Ligne depuis le XIVe siècle. Cette demeure seigneuriale, d'abord forteresse médiévale, s'est transformée au fil des siècles en château de plaisance. La bibliothèque abrite 20 000 volumes anciens. Le jardin à la française de 25 hectares, dessiné par un élève de Le Nôtre, offre une alternance harmonieuse d'eau et de verdure. La pièce d'eau principale s'étend sur 6 hectares. Des événements prestigieux y sont organisés toute l'année.",
                    website: "https://www.chateaudebeloeil.be",
                    openingHours: "Week-ends et fériés : 13h-18h (Avr-Sept)",
                    price: "Adulte : 16€ · Senior : 15€",
                    address: "Rue du Château 11, 7970 Beloeil",
                    highlight: "Jardins Le Nôtre"
                },
                {
                    title: "Parc du Waux-Hall",
                    description: "Magnifique parc paysager de 5 hectares au cœur de Mons. Sculptures, lac romantique et kiosque à musique.",
                    distance: "3 km",
                    duration: "1h",
                    image: "/wauxhall.jpg",
                    fullDescription: "Le Waux-Hall est un magnifique parc paysager de 5 hectares situé au cœur de Mons. Créé au XVIIIe siècle, il est ponctué de sculptures en plein air datant du XIXe et XXe siècle. Son lac romantique, ses sentiers sinueux et sa végétation luxuriante en font l'endroit idéal pour une pause nature en ville. Le kiosque à musique accueille des concerts en été. Parfait pour une promenade matinale, un pique-nique en famille ou une pause lecture à l'ombre des arbres centenaires.",
                    website: "https://www.visitmons.be/decouvrir/parcs-et-jardins/parc-du-waux-hall",
                    openingHours: "Accessible 24h/24",
                    price: "Gratuit",
                    address: "Avenue du Waux-Hall, 7000 Mons",
                    highlight: "Kiosque à musique"
                }
            ]
        },
        {
            id: "ville",
            name: "Vie Montoise",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            description: "L'âme de la cité du Doudou",
            activities: [
                {
                    title: "Grand-Place & Singe du Grand-Garde",
                    description: "Cœur historique de Mons avec ses façades baroques. Caressez la tête du singe de la main gauche pour un an de bonheur !",
                    distance: "4 km",
                    duration: "1h",
                    image: "/singe.jpg",
                    fullDescription: "La Grand-Place de Mons, entièrement pavée, est bordée de façades élégantes des XVe au XVIIIe siècle. L'Hôtel de Ville gothique du XVe siècle domine la place avec son horloge astronomique. À l'entrée se trouve le célèbre singe du Grand-Garde, probablement le plus vieux Montois : la tradition veut qu'on lui caresse la tête de la main gauche pour un an de bonheur. Son crâne poli témoigne de la ferveur des visiteurs ! Derrière l'Hôtel de Ville, le Jardin du Mayeur offre un havre de paix avec sa fontaine du Ropieur, gamin facétieux symbole de l'esprit montois.",
                    website: "https://www.visitmons.be/decouvrir/incontournables/grand-place",
                    openingHours: "Accessible 24h/24",
                    price: "Gratuit",
                    address: "Grand-Place, 7000 Mons",
                    highlight: "Singe porte-bonheur",
                    badge: "Incontournable"
                },
                {
                    title: "Marché du samedi",
                    description: "Plus de 80 commerçants sur la Grand-Place. Fromages wallons, charcuteries artisanales et rencontre avec les producteurs.",
                    distance: "4 km",
                    duration: "1-2h",
                    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070",
                    fullDescription: "Chaque samedi matin, la Grand-Place de Mons s'anime avec son marché traditionnel. Plus de 80 commerçants proposent des produits frais et locaux : fruits et légumes de saison, fromages artisanaux wallons comme le Herve, charcuteries, viandes fermières, poissons, fleurs et spécialités régionales. C'est l'occasion idéale de rencontrer les producteurs locaux, de goûter les saveurs du terroir et de vous immerger dans l'atmosphère authentique de la vie montoise. Ambiance conviviale garantie !",
                    website: "https://www.visitmons.be/pratique/marches",
                    openingHours: "Samedi : 7h-13h",
                    price: "Gratuit",
                    address: "Grand-Place, 7000 Mons",
                    highlight: "Produits du terroir"
                },
                {
                    title: "Jardin du Mayeur",
                    description: "Havre de paix derrière l'Hôtel de Ville avec la fontaine du Ropieur, gamin facétieux symbole de l'esprit montois.",
                    distance: "4 km",
                    duration: "30min",
                    image: "/jardindumayeur.jpg",
                    fullDescription: "Ce petit coin de verdure se cache derrière le porche de l'Hôtel de Ville. Il faut passer un petit tunnel au bout de la cour intérieure pour y accéder. C'est un véritable havre de paix à côté du brouhaha de la Grand-Place ! La fontaine du Ropieur, représentant un gamin facétieux, est devenue l'un des symboles de l'esprit montois. Le spot idéal pour se poser sur un banc afin de se reposer ou manger son pique-nique. C'est aussi l'entrée du Musée du Doudou.",
                    website: "https://www.visitmons.be",
                    openingHours: "Accessible aux heures d'ouverture de l'Hôtel de Ville",
                    price: "Gratuit",
                    address: "Derrière l'Hôtel de Ville, Grand-Place, 7000 Mons",
                    highlight: "Fontaine du Ropieur"
                }
            ]
        },
        {
            id: "gastronomie",
            name: "Gastronomie",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            description: "Savourez le terroir wallon",
            activities: [
                {
                    title: "Route de la Bière",
                    description: "Découverte des brasseries artisanales wallonnes. Visites guidées, dégustations et rencontres avec les maîtres-brasseurs.",
                    distance: "5-20 km",
                    duration: "Demi-journée",
                    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=2070",
                    fullDescription: "La Belgique est le pays de la bière, et la région de Mons ne fait pas exception. Plusieurs brasseries artisanales vous ouvrent leurs portes pour des visites guidées passionnantes. Découvrez les secrets de fabrication, rencontrez des maîtres-brasseurs passionnés et dégustez des créations uniques : blondes, brunes, ambrées, IPA et bières de saison. Certaines brasseries proposent également une restauration autour de la bière avec des accords mets-boissons surprenants. Une expérience 100% belge !",
                    website: "https://www.visitwallonia.be/fr/bieres",
                    openingHours: "Sur réservation",
                    price: "Visite + dégustation : 12-20€",
                    address: "Diverses brasseries régionales",
                    highlight: "Bières artisanales"
                },
                {
                    title: "Domaine Chant d'Éole",
                    description: "Vignoble wallon produisant d'excellents vins mousseux. Visite du domaine et dégustation de bulles belges.",
                    distance: "18 km",
                    duration: "2h",
                    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070",
                    fullDescription: "Né d'une rencontre entre un vigneron champenois et une famille d'exploitants agricoles belges, le domaine Chant d'Éole produit des vins mousseux d'exception fidèles au terroir belge. La visite guidée vous emmène au cœur de l'histoire du vignoble : plantation, choix des cépages, entretien de la vigne et vinification selon la méthode traditionnelle. La dégustation comprend le Brut Blanc de Blancs, le Brut Rosé et l'Elixir Saint Georges. Une belle découverte pour les amateurs de bulles !",
                    website: "https://www.chantdeole.be",
                    openingHours: "Sur réservation",
                    price: "Visite + dégustation : 18€",
                    address: "Rue de la Bruyère, 7040 Quévy",
                    highlight: "Bulles belges"
                }
            ]
        }
    ];

    // Flatten activities for modal navigation
    const allActivities = categories.flatMap((cat, catIndex) =>
        cat.activities.map((act, actIndex) => ({ ...act, catIndex, actIndex, categoryName: cat.name }))
    );

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (selectedActivityIndex === null) return;

        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextActivity();
        if (e.key === 'ArrowLeft') prevActivity();
    }, [selectedActivityIndex]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const openModal = (catIndex: number, actIndex: number) => {
        const globalIndex = allActivities.findIndex(a => a.catIndex === catIndex && a.actIndex === actIndex);
        setSelectedActivityIndex(globalIndex);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedActivityIndex(null);
        document.body.style.overflow = 'unset';
    };

    const nextActivity = () => {
        if (selectedActivityIndex !== null) {
            setSelectedActivityIndex((prev) => (prev! + 1) % allActivities.length);
        }
    };

    const prevActivity = () => {
        if (selectedActivityIndex !== null) {
            setSelectedActivityIndex((prev) => (prev! - 1 + allActivities.length) % allActivities.length);
        }
    };

    const currentActivity = selectedActivityIndex !== null ? allActivities[selectedActivityIndex] : null;

    return (
        <>
            <Navbar variant="solid"/>
            <section className="min-h-screen bg-[#faf9f7]">

                {/* Hero compact */}
                <div className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-stone-900 text-white">
                    <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
                        <div className="inline-flex items-center space-x-4 mb-6">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c9a962]"></div>
                            <p className="text-[#c9a962] text-[11px] tracking-[0.3em] uppercase">
                                Aux alentours
                            </p>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c9a962]"></div>
                        </div>

                        <h1 className="font-playfair text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
                            Découvrir la région
                        </h1>

                        <p className="text-white/60 font-light text-base max-w-2xl mx-auto leading-relaxed">
                            Mons et ses environs regorgent de trésors. Patrimoine UNESCO, nature préservée,
                            art contemporain et gastronomie — Francis et Micheline vous guident vers les meilleures adresses.
                        </p>
                    </div>
                </div>

                {/* Navigation catégories - sticky */}
                <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200">
                    <div className="max-w-6xl mx-auto px-6 lg:px-12">
                        <div className="flex overflow-x-auto scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0 lg:justify-center">
                            <div className="flex space-x-1 py-4">
                                {categories.map((category, index) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(index)}
                                        className={`flex items-center space-x-2 px-4 lg:px-6 py-2.5 text-sm whitespace-nowrap
                                                    transition-all duration-300 ${
                                            activeCategory === index
                                                ? 'bg-stone-900 text-white'
                                                : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                                        }`}
                                    >
                                        <span className={activeCategory === index ? 'text-[#c9a962]' : ''}>
                                            {category.icon}
                                        </span>
                                        <span>{category.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenu principal */}
                <div className="py-12 lg:py-16">
                    <div className="max-w-6xl mx-auto px-6 lg:px-12">

                        {/* En-tête catégorie */}
                        <div className="mb-10 lg:mb-12">
                            <div className="flex items-center space-x-3 mb-3">
                                <span className="text-[#c9a962]">{categories[activeCategory].icon}</span>
                                <h2 className="font-playfair text-2xl lg:text-3xl text-stone-900">
                                    {categories[activeCategory].name}
                                </h2>
                            </div>
                            <p className="text-stone-500 font-light">
                                {categories[activeCategory].description}
                            </p>
                        </div>

                        {/* Grille d'activités */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {categories[activeCategory].activities.map((activity, index) => (
                                <article
                                    key={index}
                                    onClick={() => openModal(activeCategory, index)}
                                    className="group cursor-pointer bg-white border border-stone-200
                                               hover:border-stone-300 hover:shadow-lg transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 lg:h-56 overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700
                                                       group-hover:scale-105"
                                            style={{ backgroundImage: `url('${activity.image}')` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                        {/* Badges */}
                                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                            {activity.badge && (
                                                <span className="px-2.5 py-1 bg-[#c9a962] text-stone-900 text-[10px]
                                                               tracking-wider uppercase font-medium">
                                                    {activity.badge}
                                                </span>
                                            )}
                                        </div>

                                        {/* Distance & Durée */}
                                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                            <div className="flex items-center space-x-3 text-white/90 text-xs">
                                                <span className="flex items-center space-x-1">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    </svg>
                                                    <span>{activity.distance}</span>
                                                </span>
                                                <span className="flex items-center space-x-1">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{activity.duration}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contenu */}
                                    <div className="p-5 lg:p-6">
                                        <h3 className="font-playfair text-lg lg:text-xl text-stone-900 mb-2
                                                       group-hover:text-[#c9a962] transition-colors duration-300">
                                            {activity.title}
                                        </h3>
                                        <p className="text-stone-500 font-light text-sm leading-relaxed line-clamp-2 mb-4">
                                            {activity.description}
                                        </p>

                                        {/* Highlight */}
                                        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                                            <span className="flex items-center space-x-2 text-stone-400 text-xs">
                                                <svg className="w-4 h-4 text-[#c9a962]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                                                </svg>
                                                <span>{activity.highlight}</span>
                                            </span>
                                            <span className="text-[#c9a962] text-xs tracking-wide uppercase
                                                           opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Découvrir →
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Francis & Micheline */}
                <div className="py-16 lg:py-20 bg-stone-900">
                    <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                        <div className="inline-flex items-center space-x-4 mb-6">
                            <div className="w-8 h-[1px] bg-[#c9a962]/40"></div>
                            <svg className="w-6 h-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <div className="w-8 h-[1px] bg-[#c9a962]/40"></div>
                        </div>

                        <h3 className="font-playfair text-2xl lg:text-3xl text-white mb-4">
                            Besoin de conseils personnalisés ?
                        </h3>
                        <p className="text-white/60 font-light mb-8 max-w-xl mx-auto">
                            Francis et Micheline connaissent la région sur le bout des doigts.
                            N'hésitez pas à leur demander leurs bonnes adresses et coups de cœur.
                        </p>

                        <a
                            href="/contact"
                            className="inline-flex items-center space-x-3 px-8 py-4 bg-[#c9a962] text-stone-900
                                       hover:bg-white transition-colors duration-300"
                        >
                            <span className="text-sm tracking-[0.15em] uppercase font-medium">
                                Nous contacter
                            </span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

            </section>

            {/* Modal */}
            {currentActivity && (
                <div
                    className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 z-20 p-4 lg:p-6 flex items-center justify-between">
                        <span className="text-white/40 text-sm font-light">
                            {String(selectedActivityIndex! + 1).padStart(2, '0')} / {String(allActivities.length).padStart(2, '0')}
                        </span>
                        <button
                            onClick={closeModal}
                            className="w-11 h-11 flex items-center justify-center text-white/60 hover:text-white
                                       border border-white/20 hover:border-white/50 transition-all duration-300"
                            aria-label="Fermer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Content */}
                    <div
                        className="h-full flex flex-col lg:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="flex-1 relative flex items-center justify-center p-4 lg:p-12">
                            <button
                                onClick={prevActivity}
                                className="absolute left-4 lg:left-8 z-10 w-11 h-11 flex items-center justify-center
                                           text-white/40 hover:text-white border border-white/20 hover:border-white/50
                                           bg-black/30 hover:bg-black/50 transition-all duration-300"
                                aria-label="Précédent"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div className="relative w-full max-w-3xl aspect-[4/3] lg:aspect-[16/10]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${currentActivity.image}')` }}
                                />
                                {currentActivity.badge && (
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1.5 bg-[#c9a962] text-stone-900 text-[10px]
                                                       tracking-wider uppercase font-medium">
                                            {currentActivity.badge}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={nextActivity}
                                className="absolute right-4 lg:right-8 z-10 w-11 h-11 flex items-center justify-center
                                           text-white/40 hover:text-white border border-white/20 hover:border-white/50
                                           bg-black/30 hover:bg-black/50 transition-all duration-300"
                                aria-label="Suivant"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Info panel */}
                        <div className="w-full lg:w-[400px] bg-white p-6 lg:p-8 flex flex-col
                                        max-h-[50vh] lg:max-h-none overflow-y-auto">

                            {/* Category */}
                            <div className="flex items-center space-x-3 mb-5">
                                <div className="w-6 h-[1px] bg-[#c9a962]"></div>
                                <span className="text-[#c9a962] text-[10px] tracking-[0.2em] uppercase">
                                    {currentActivity.categoryName}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-playfair text-2xl lg:text-3xl font-light text-stone-900 mb-3 leading-tight">
                                {currentActivity.title}
                            </h3>

                            {/* Highlight */}
                            <div className="flex items-center space-x-2 mb-5 text-stone-500 text-sm">
                                <svg className="w-4 h-4 text-[#c9a962]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                                </svg>
                                <span>{currentActivity.highlight}</span>
                            </div>

                            {/* Description */}
                            <p className="text-stone-600 font-light text-[15px] leading-relaxed mb-6 flex-1">
                                {currentActivity.fullDescription}
                            </p>

                            {/* Infos pratiques */}
                            <div className="space-y-2.5 py-5 border-y border-stone-200 mb-5 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-stone-400">Distance</span>
                                    <span className="text-stone-700">{currentActivity.distance}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-stone-400">Durée</span>
                                    <span className="text-stone-700">{currentActivity.duration}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-stone-400">Horaires</span>
                                    <span className="text-stone-700 text-right">{currentActivity.openingHours}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-stone-400">Tarif</span>
                                    <span className="text-stone-700 text-right">{currentActivity.price}</span>
                                </div>
                            </div>

                            {/* Adresse */}
                            <p className="text-stone-500 text-sm mb-6 flex items-start space-x-2">
                                <svg className="w-4 h-4 text-[#c9a962] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                <span>{currentActivity.address}</span>
                            </p>

                            {/* CTA */}
                            <a
                                href={currentActivity.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full py-3.5 px-5
                                           bg-stone-900 text-white hover:bg-[#c9a962] hover:text-stone-900
                                           transition-colors duration-300"
                            >
                                <span className="text-xs tracking-[0.15em] uppercase">Visiter le site</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>

                            {/* Keyboard hint */}
                            <div className="hidden lg:flex items-center justify-center space-x-4 mt-5 text-stone-400">
                                <div className="flex items-center space-x-2">
                                    <kbd className="px-2 py-1 bg-stone-100 text-stone-500 text-[10px]">←</kbd>
                                    <kbd className="px-2 py-1 bg-stone-100 text-stone-500 text-[10px]">→</kbd>
                                    <span className="text-[10px]">naviguer</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <kbd className="px-2 py-1 bg-stone-100 text-stone-500 text-[10px]">esc</kbd>
                                    <span className="text-[10px]">fermer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="absolute bottom-0 left-0 right-0 lg:right-[400px] p-4
                                    bg-gradient-to-t from-black/60 to-transparent">
                        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2">
                            {allActivities.map((activity, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedActivityIndex(index);
                                    }}
                                    className={`flex-shrink-0 w-16 h-12 bg-cover bg-center transition-all duration-300
                                        ${index === selectedActivityIndex
                                        ? 'ring-2 ring-[#c9a962] opacity-100'
                                        : 'opacity-40 hover:opacity-70'}`}
                                    style={{ backgroundImage: `url('${activity.image}')` }}
                                    aria-label={`Voir ${activity.title}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}