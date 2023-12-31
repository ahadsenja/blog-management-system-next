'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserIface } from "@/app/types/UserIface";

export default function Users({ users }: { users: UserIface[] }) {
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
          {users.map((data: any, index: any) => (
            <tr key={index}>
              <td>{data.username}</td>
              <td className="text-center">
                <button className="hover:underline mr-2">Edit</button>
                <button className="hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
