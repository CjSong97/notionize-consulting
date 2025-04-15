// app/blog/page.tsx (Server Component)
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { getAllPosts } from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";
//import { BlogPost } from "@/types/post";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="px-6 py-12 lg:px-24">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary dark:text-white">
        Our Blog
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-56 w-full">
                <Image
                  src={(post as any)?.cover?.external?.url || "/default-cover.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary dark:text-white">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {post.description}
                </p>
                <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  {post.publishDate}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
