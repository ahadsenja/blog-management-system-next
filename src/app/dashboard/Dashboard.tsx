'use client'
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <>
      {isLoggedIn ? <h1>Dashboard page</h1> : router.push('/login')}
    </>
  )
}
