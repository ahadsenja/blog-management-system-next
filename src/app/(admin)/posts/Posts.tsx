'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PostIface } from "@/app/types/BlogInterface";
import Post from "./Post";

export default function Posts({ posts }: { posts: PostIface[] }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        router.push('/login');
      }
    }
  }, [router]);
  
  const sortedPosts = [...posts].sort((a: any, b: any) => a.id - b.id);

  return (
    <>
      <div className="mt-2 mb-6">
        <Link 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          href={"/posts/create-post"}
        >
          Add Post
        </Link>
      </div>
      <table className="table w-full bg-gray-900 rounded">
        <thead>
          <tr>
            <th className="w-40 text-left">Featured Image</th>
            <th className="w-1/2 text-left">Title</th>
            <th className="">Category</th>
            <th className="">Author</th>
            <th className="">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-black">
          {sortedPosts.map((data, index) => (
            <Post key={index} post={data} />
          ))}
        </tbody>
      </table>
    </>
  )
}
