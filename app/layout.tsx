import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: "swap",
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "À la Malogne | Chambre d'hôtes de charme à Mons",
    description: "Chambre d'hôtes 4 épis au cœur de la Wallonie. Un havre de paix alliant confort, élégance et authenticité près de Mons.",
    keywords: "chambre d'hôtes, Mons, Wallonie, Belgique, B&B, hébergement, gîte",
    openGraph: {
        title: "À la Malogne | Chambre d'hôtes de charme",
        description: "Une invitation au calme et à l'authenticité en Wallonie",
        locale: "fr_BE",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth">
        <body
            className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-[#faf9f7] text-stone-800`}
        >
        {children}
        <Footer/>
        </body>
        </html>
    );
}