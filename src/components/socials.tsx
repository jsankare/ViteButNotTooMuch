"use client";

import { Socials } from "@/lib/socials";

export default function SocialsSection() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[20vh] px-4 mt-auto">
            <h2 className="text-3xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Join us</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {Socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-2 py-1 rounded-md transition-colors
                       hover:text-blue-600 dark:hover:text-blue-400
                       text-neutral-800 dark:text-neutral-200"
                    >
                        <img
                            src={social.icon}
                            alt={`${social.name} icon`}
                            className="w-5 h-5"
                        />
                        <span className="text-sm font-medium">{social.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
