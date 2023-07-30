'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
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
      <h1>Dashboard</h1>
    </>
  )
}
