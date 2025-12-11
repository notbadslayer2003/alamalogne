'use client';

import {useState} from 'react';
import Navbar from "@/components/Navbar";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        message: '',
        subject: 'reservation'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'envoi
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                checkIn: '',
                checkOut: '',
                guests: '2',
                message: '',
                subject: 'reservation'
            });

            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }, 2000);
    };

    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
            ),
            title: "Téléphone",
            content: "+32 470 12 34 56",
            link: "tel:+32470123456",
            description: "Lun-Ven 9h-19h"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
            ),
            title: "E-mail",
            content: "contact@gite-mons.be",
            link: "mailto:contact@gite-mons.be",
            description: "Réponse sous 24h"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
            ),
            title: "WhatsApp",
            content: "+32 470 12 34 56",
            link: "https://wa.me/32470123456",
            description: "Messagerie instantanée"
        }
    ];

    return (
        <>
            <Navbar variant="solid"/>
            <section id="contact" className="relative bg-white overflow-hidden">

                {/* Élément décoratif de fond */}
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02] pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10">

                    {/* En-tête avec animation */}
                    <div className="mb-20 text-center max-w-4xl mx-auto">
                        <div className="inline-block mb-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-[1px] bg-stone-400"></div>
                                <span
                                    className="text-xs tracking-[0.3em] uppercase text-stone-500 font-light">Contact</span>
                                <div className="w-12 h-[1px] bg-stone-400"></div>
                            </div>
                        </div>
                        <h1 className="font-playfair text-5xl lg:text-7xl font-light text-stone-900 mb-8 leading-[1.1]">
                            Parlons de votre
                            <span className="block italic text-stone-600 mt-2">séjour idéal</span>
                        </h1>
                        <p className="text-stone-600 font-light text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                            Que vous planifiez une escapade romantique, un week-end en famille ou un séjour prolongé,
                            nous sommes là pour vous accompagner dans chaque détail.
                        </p>
                    </div>

                    {/* Méthodes de contact rapides */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.link}
                                target={method.link.startsWith('http') ? '_blank' : undefined}
                                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group relative bg-stone-50 p-8 hover:bg-stone-900 transition-all duration-500 overflow-hidden"
                            >
                                {/* Effet de fond au hover */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div
                                        className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <div
                                            className="text-stone-600 group-hover:text-white transition-colors duration-500">
                                            {method.icon}
                                        </div>
                                    </div>
                                    <h3 className="font-playfair text-xl font-light text-stone-900 group-hover:text-white mb-2 transition-colors duration-500">
                                        {method.title}
                                    </h3>
                                    <p className="text-stone-600 group-hover:text-stone-300 font-light mb-1 transition-colors duration-500">
                                        {method.content}
                                    </p>
                                    <p className="text-xs text-stone-500 group-hover:text-stone-400 font-light transition-colors duration-500">
                                        {method.description}
                                    </p>

                                    {/* Flèche */}
                                    <div
                                        className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Formulaire et infos - Layout amélioré */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">

                        {/* Formulaire - 3 colonnes */}
                        <div className="lg:col-span-3">
                            <div className="bg-stone-50 p-8 lg:p-12">
                                <div className="mb-10">
                                    <h2 className="font-playfair text-3xl lg:text-4xl font-light text-stone-900 mb-4">
                                        Envoyez-nous un message
                                    </h2>
                                    <p className="text-stone-600 font-light text-sm">
                                        Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs
                                        délais.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Type de demande */}
                                    <div>
                                        <label className="block text-sm font-light text-stone-700 mb-3">
                                            Type de demande
                                        </label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {['reservation', 'information', 'autre'].map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setFormData(prev => ({...prev, subject: type}))}
                                                    className={`py-3 px-4 text-sm font-light transition-all duration-300 ${
                                                        formData.subject === type
                                                            ? 'bg-stone-900 text-white'
                                                            : 'bg-white text-stone-600 hover:bg-stone-100'
                                                    }`}
                                                >
                                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Nom et Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <label htmlFor="name"
                                                   className="block text-sm font-light text-stone-700 mb-2">
                                                Nom complet
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-stone-300 focus:border-stone-900 focus:outline-none transition-all duration-300 font-light placeholder:text-stone-400"
                                                placeholder="Jean Dupont"
                                            />
                                            <div
                                                className={`absolute bottom-0 left-0 h-[2px] bg-stone-900 transition-all duration-300 ${
                                                    focusedField === 'name' ? 'w-full' : 'w-0'
                                                }`}></div>
                                        </div>

                                        <div className="relative">
                                            <label htmlFor="email"
                                                   className="block text-sm font-light text-stone-700 mb-2">
                                                Adresse e-mail
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-stone-300 focus:border-stone-900 focus:outline-none transition-all duration-300 font-light placeholder:text-stone-400"
                                                placeholder="jean@email.com"
                                            />
                                            <div
                                                className={`absolute bottom-0 left-0 h-[2px] bg-stone-900 transition-all duration-300 ${
                                                    focusedField === 'email' ? 'w-full' : 'w-0'
                                                }`}></div>
                                        </div>
                                    </div>

                                    {/* Téléphone */}
                                    <div className="relative">
                                        <label htmlFor="phone" className="block text-sm font-light text-stone-700 mb-2">
                                            Téléphone (optionnel)
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-stone-300 focus:border-stone-900 focus:outline-none transition-all duration-300 font-light placeholder:text-stone-400"
                                            placeholder="+32 XXX XX XX XX"
                                        />
                                        <div
                                            className={`absolute bottom-0 left-0 h-[2px] bg-stone-900 transition-all duration-300 ${
                                                focusedField === 'phone' ? 'w-full' : 'w-0'
                                            }`}></div>
                                    </div>

                                    {/* Dates et voyageurs */}
                                    {formData.subject === 'reservation' && (
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-white">
                                            <div>
                                                <label htmlFor="checkIn"
                                                       className="block text-xs font-light text-stone-700 mb-2 uppercase tracking-wider">
                                                    Arrivée
                                                </label>
                                                <input
                                                    type="date"
                                                    id="checkIn"
                                                    name="checkIn"
                                                    value={formData.checkIn}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-stone-300 focus:border-stone-900 focus:outline-none transition-colors duration-300 font-light text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="checkOut"
                                                       className="block text-xs font-light text-stone-700 mb-2 uppercase tracking-wider">
                                                    Départ
                                                </label>
                                                <input
                                                    type="date"
                                                    id="checkOut"
                                                    name="checkOut"
                                                    value={formData.checkOut}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-stone-300 focus:border-stone-900 focus:outline-none transition-colors duration-300 font-light text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="guests"
                                                       className="block text-xs font-light text-stone-700 mb-2 uppercase tracking-wider">
                                                    Voyageurs
                                                </label>
                                                <select
                                                    id="guests"
                                                    name="guests"
                                                    value={formData.guests}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-stone-300 focus:border-stone-900 focus:outline-none transition-colors duration-300 font-light text-sm bg-white"
                                                >
                                                    {[1, 2, 3, 4, 5, 6].map(num => (
                                                        <option key={num} value={num}>
                                                            {num} {num === 1 ? 'personne' : 'personnes'}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    )}

                                    {/* Message */}
                                    <div className="relative">
                                        <label htmlFor="message"
                                               className="block text-sm font-light text-stone-700 mb-2">
                                            Votre message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            rows="6"
                                            className="w-full px-4 py-4 bg-white border-2 border-stone-300 focus:border-stone-900 focus:outline-none transition-all duration-300 font-light resize-none placeholder:text-stone-400"
                                            placeholder="Parlez-nous de votre projet de séjour, vos besoins spécifiques, vos questions..."
                                        />
                                    </div>

                                    {/* Message de succès avec animation */}
                                    {submitStatus === 'success' && (
                                        <div className="relative overflow-hidden">
                                            <div
                                                className="p-6 bg-green-50 border-l-4 border-green-500 animate-slideInUp">
                                                <div className="flex items-start space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <svg className="w-6 h-6 text-green-500" fill="none"
                                                             stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth={2}
                                                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-green-900 font-medium mb-1">Message envoyé
                                                            avec succès !</h3>
                                                        <p className="text-sm text-green-700 font-light">
                                                            Nous avons bien reçu votre demande et vous répondrons dans
                                                            les 24 heures.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Bouton submit avec animation */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative w-full sm:w-auto px-12 py-5 bg-stone-900 text-white overflow-hidden disabled:bg-stone-400 disabled:cursor-not-allowed transition-all duration-300 hover:px-16"
                                    >
                                    <span
                                        className="relative z-10 text-sm tracking-[0.2em] uppercase font-light flex items-center justify-center space-x-3">
                                        <span>{isSubmitting ? 'Envoi en cours' : 'Envoyer le message'}</span>
                                        {!isSubmitting && (
                                            <svg
                                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                            </svg>
                                        )}
                                    </span>

                                        {/* Animation de chargement */}
                                        {isSubmitting && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Informations - 2 colonnes */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Adresse et horaires */}
                            <div className="bg-stone-900 text-white p-8 lg:p-10">
                                <h3 className="font-playfair text-2xl font-light mb-8">
                                    Informations pratiques
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                            <h4 className="text-sm uppercase tracking-wider text-stone-400 font-light">Adresse</h4>
                                        </div>
                                        <p className="text-white/90 font-light leading-relaxed">
                                            Rue du Beffroi 12<br/>
                                            7000 Mons<br/>
                                            Belgique
                                        </p>
                                    </div>

                                    <div className="h-[1px] bg-white/10"></div>

                                    <div>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            <h4 className="text-sm uppercase tracking-wider text-stone-400 font-light">Horaires</h4>
                                        </div>
                                        <div className="space-y-1 text-white/90 font-light text-sm">
                                            <div className="flex justify-between">
                                                <span>Check-in</span>
                                                <span>15h - 20h</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Check-out</span>
                                                <span>Avant 11h</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Contact</span>
                                                <span>9h - 19h</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-[1px] bg-white/10"></div>

                                    <div>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                                            </svg>
                                            <h4 className="text-sm uppercase tracking-wider text-stone-400 font-light">Langues</h4>
                                        </div>
                                        <p className="text-white/90 font-light text-sm">
                                            Français • Néerlandais • Anglais
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Réseaux sociaux */}
                            <div className="bg-stone-50 p-8 lg:p-10">
                                <h3 className="font-playfair text-2xl font-light text-stone-900 mb-6">
                                    Suivez-nous
                                </h3>
                                <p className="text-stone-600 font-light text-sm mb-6 leading-relaxed">
                                    Découvrez nos actualités, nos conseils de voyage et l'ambiance unique de notre gîte.
                                </p>
                                <div className="grid grid-cols-3 gap-3">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group aspect-square bg-white hover:bg-stone-900 transition-colors duration-300 flex flex-col items-center justify-center space-y-2"
                                    >
                                        <svg
                                            className="w-6 h-6 text-stone-600 group-hover:text-white transition-colors duration-300"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                        <span
                                            className="text-xs text-stone-600 group-hover:text-white font-light transition-colors duration-300">Facebook</span>
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group aspect-square bg-white hover:bg-stone-900 transition-colors duration-300 flex flex-col items-center justify-center space-y-2"
                                    >
                                        <svg
                                            className="w-6 h-6 text-stone-600 group-hover:text-white transition-colors duration-300"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                        <span
                                            className="text-xs text-stone-600 group-hover:text-white font-light transition-colors duration-300">Instagram</span>
                                    </a>
                                    <a
                                        href="https://airbnb.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group aspect-square bg-white hover:bg-stone-900 transition-colors duration-300 flex flex-col items-center justify-center space-y-2"
                                    >
                                        <svg
                                            className="w-6 h-6 text-stone-600 group-hover:text-white transition-colors duration-300"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm5.9-11.6c-.4-1.3-1.7-2.2-3.1-2.2-1.1 0-2 .5-2.7 1.3-.7-.8-1.6-1.3-2.7-1.3-1.4 0-2.7.9-3.1 2.2-.5 1.6.3 3.3 1.8 4 .5.2.9.3 1.4.3.8 0 1.6-.3 2.2-.8l.4-.4.4.4c.6.5 1.4.8 2.2.8.5 0 .9-.1 1.4-.3 1.5-.7 2.3-2.4 1.8-4z"/>
                                        </svg>
                                        <span
                                            className="text-xs text-stone-600 group-hover:text-white font-light transition-colors duration-300">Airbnb</span>
                                    </a>
                                </div>
                            </div>

                            {/* Badge de confiance */}
                            <div
                                className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 lg:p-10 border border-amber-200/50">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M5 13l4 4L19 7"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-playfair text-lg text-stone-900 mb-2">
                                            Réponse garantie sous 24h
                                        </h4>
                                        <p className="text-sm text-stone-700 font-light leading-relaxed">
                                            Nous nous engageons à répondre à chaque demande dans les 24 heures.
                                            Votre satisfaction est notre priorité.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carte interactive avec design intégré */}
                    <div className="relative">
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="bg-white px-8 py-3 shadow-lg">
                                <p className="text-xs tracking-[0.3em] uppercase text-stone-500 font-light text-center">
                                    Notre emplacement
                                </p>
                            </div>
                        </div>

                        <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10118.243977394634!2d3.9454!3d50.4542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2452b85b32d7f%3A0x40099ab2f4d5140!2sMons%2C%20Belgium!5e0!3m2!1sen!2sus!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{border: 0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Overlay avec CTA */}
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 lg:p-12">
                                <div className="max-w-2xl">
                                    <h3 className="font-playfair text-3xl lg:text-4xl font-light text-white mb-4">
                                        Venez nous rendre visite
                                    </h3>
                                    <p className="text-white/90 font-light mb-6 leading-relaxed">
                                        Situé au cœur de Mons, à quelques pas du Beffroi et de la Grand-Place,
                                        notre gîte est le point de départ idéal pour explorer la région.
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/dir//Mons,+Belgium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-stone-900 hover:bg-stone-100 transition-colors duration-300"
                                    >
                                        <span className="text-sm tracking-wider uppercase font-light">Obtenir l'itinéraire</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <style jsx>{`
                    @keyframes slideInUp {
                        from {
                            transform: translateY(20px);
                            opacity: 0;
                        }
                        to {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }

                    .animate-slideInUp {
                        animation: slideInUp 0.5s ease-out;
                    }
                `}</style>
            </section>
        </>
    );
}