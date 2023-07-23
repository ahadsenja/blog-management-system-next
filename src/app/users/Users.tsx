'use client'
import Link from "next/link"
import { account } from "../helper/datas"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Users() {
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
      <div className="text-2xl font-medium mb-6">Users data</div>
      <table className="table w-full bg-gray-900 rounded">
        <thead>
          <tr>
            <th className="text-left">Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-black">
          {account.map((data, index) => (
            <tr key={index}>
              <td>{data.username}</td>
              <td className="text-center">
                <Link href={`/posts`} className="hover:underline mr-2">Edit</Link>
                <Link href={`/posts`} className="hover:underline">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
