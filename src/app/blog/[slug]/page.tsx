import { Metadata } from "next";
import {getPostBySlug, getAllPosts, getRelatedPosts} from "@/lib/blog";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article introuvable',
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.summary,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.summary,
      type: 'article',
      publishedTime: post.date,
      url: `https://vitebutnottoomuch.vercel.app/blog/${post.slug}`,
      images: [
        {
          url: "/vitebutnottoomuch.png", 
          width: 1200,
          height: 630,
          alt: post.metaTitle || post.title,
        },
      ],
      siteName: "ViteButNotTooMuch",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.summary,
      images: ["/vitebutnottoomuch.png"],
      creator: "@ViteButNotTM", 
      site: "@ViteButNotTM", 
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  const related = getRelatedPosts(post.id);

  return (
      <article className="max-w-2xl mx-auto">

        {/* Date */}
        <time className="block text-gray-600 dark:text-gray-400 mb-8">
          {new Date(post.date).toLocaleDateString("fr", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        {/* Title */}
        {!post.content.includes("<h1>") && <h1>{post.title}</h1>}

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none">
          {post.content.split("\n").map((paragraph, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold mb-4">Articles associés</h2>
              <ul className="list-disc list-inside space-y-2">
                {related.map((rel) => (
                    <li key={rel.id}>
                      <a href={`/blog/${rel.slug}`} className="text-blue-600 hover:underline">
                        {rel.title}
                      </a>
                    </li>
                ))}
              </ul>
            </section>
        )}
      </article>
  );
}