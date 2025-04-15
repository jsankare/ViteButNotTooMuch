import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto">
      <h1>Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="challenge-card">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:no-underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post.summary}
            </p>
            <time className="text-sm text-gray-500 dark:text-gray-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
}