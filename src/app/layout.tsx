import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    description: "Small daily actions lead to real progress. Move fast, but don't burn out.",
    url: "https://vitebuttoomuch.com",
    siteName: "ViteButNotTooMuch",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://vitebuttoomuch.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen max-w-5xl mx-auto px-4 py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}