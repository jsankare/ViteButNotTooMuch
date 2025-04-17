"use client";

import { useState } from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogFilter } from "@/components/blog-filter";
import { Pagination } from "@/components/pagination";

const POSTS_PER_PAGE = 6;

export default function Blog() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const allPosts = getAllPosts();

    // Filter posts based on search term
    const filteredPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate pagination
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    return (
        <div className="max-w-3xl mx-auto">
            <h1>Blog</h1>

            <BlogFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                totalPosts={filteredPosts.length}
            />

            <div className="space-y-8 my-8">
                {paginatedPosts.map((post) => (
                    <article key={post.id} className="challenge-card transform hover:scale-[1.02] transition-transform">
                        <h2 className="text-2xl font-bold mb-2">
                            <Link href={`/blog/${post.slug}`} className="hover:no-underline">
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {post.summary}
                        </p>
                        <time className="text-sm text-gray-500 dark:text-gray-500">
                            {new Date(post.date).toLocaleDateString("fr", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                    </article>
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
}