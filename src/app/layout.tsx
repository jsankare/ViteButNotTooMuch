import type { Metadata } from "next";
import { Roboto, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import SocialsSection from "@/components/socials";

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ["latin"],
    variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "ViteButNotTooMuch - Petits challenges journaliers",
        template: "%s"
    },
    description: "De petites actions quotidiennes mènent à de réels progrès. Avancez vite, mais sans vous brûler.. ViteButNotTooMuch",
    openGraph: {
        title: "ViteButNotTooMuch - Petits challenges journaliers",
        description: "De petites actions quotidiennes mènent à de réels progrès. Avancez vite, mais sans vous brûler.. ViteButNotTooMuch",
        url: "https://vitebutnottoomuch.vercel.app/",
        siteName: "ViteButNotTooMuch",
        images: [
            {
                url: "/vitebutnottoomuch.png",
                width: 1200,
                height: 630,
                alt: "ViteButNotTooMuch - Petits challenges journaliers",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ViteButNotTooMuch - Petits challenges journaliers",
        description: "De petites actions quotidiennes mènent à de réels progrès. Avancez vite, mais sans vous brûler.. ViteButNotTooMuch",
        images: ["/vitebutnottoomuch.png"],
        creator: "@ViteButNotTM", 
        site: "@ViteButNotTM", 
    },
    robots: {
        index: true,
        follow: true,
    },
    metadataBase: new URL("https://vitebutnottoomuch.vercel.app/"),
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <head>
            <Script id="matomo-tracking" strategy="afterInteractive">
                {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://vitebutnottoomuchvercelapp.matomo.cloud/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://cdn.matomo.cloud/vitebutnottoomuchvercelapp.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
            </Script>
            <meta name="google-site-verification" content="tgd3a3o1z_RXhp1Ln_7vnVDDmThsUfBnd_K08aP-Snw" />
        </head>
        <body className={`${roboto.variable} ${jetbrainsMono.variable} font-sans bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-grow max-w-5xl mx-auto px-4 py-8">
                    {children}
                </main>
                <SocialsSection />
            </div>
        </ThemeProvider>
        <Analytics />
        </body>
        </html>
    );
}
