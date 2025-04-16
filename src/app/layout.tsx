import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import SocialsSection from "@/components/socials";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "ViteButNotTooMuch - Daily Micro-Challenges",
        template: "%s | ViteButNotTooMuch"
    },
    description: "Small daily actions lead to real progress. Move fast, but don't burn out.",
    openGraph: {
        title: "ViteButNotTooMuch - Daily Micro-Challenges",
        description: "Small daily actions lead to real progress. Move fast, but don't burn out .. ViteButNotTooMuch",
        url: "https://vite-but-not-too-much.vercel.app/",
        siteName: "ViteButNotTooMuch",
        locale: "fr_FR",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
    metadataBase: new URL("https://vite-but-not-too-much.vercel.app/"),
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
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
            <meta name="google-site-verification" content="YiN8rtHRjhhkVaLHJvWGgkQTlmKxy7LMT2CQuaEmp68" />
        </head>
        <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navigation />
            <main className="min-h-screen max-w-5xl mx-auto px-4 py-8">
                {children}
                <SocialsSection />
            </main>
        </ThemeProvider>
        <Analytics />
        </body>
        </html>
    );
}