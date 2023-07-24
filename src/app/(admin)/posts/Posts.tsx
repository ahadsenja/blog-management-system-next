'use client'
import Link from "next/link";
import { posts } from "../../helper/datas";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Posts() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        router.push('/login');
      }
    }
  }, [router])
  
  return (
    <>
      <div className="mt-2 mb-6">
        <Link className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={"/posts/create-post"}>Add Post</Link>
      </div>
      <table className="table w-full bg-gray-900 rounded">
        <thead>
          <tr>
            <th className="text-left">Title</th>
            <th className="w-40">Category</th>
            <th className="w-40">Author</th>
            <th className="w-40">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-black">
          {posts.map((data, index) => (
            <tr key={index}>
              <td className="font-medium">{data.title}</td>
              <td className="text-center">{data.category}</td>
              <td className="text-center">{data.author}</td>
              <td className="text-center">
                <Link href={`/posts/edit-post/${data.uuid}`} className="hover:underline mr-2">Edit</Link>
                <Link href={`/posts/${data.uuid}`} className="hover:underline">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
