'use client'
import { useRouter } from "next/navigation";

export default function Posts() {
  const router = useRouter();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <>
      { isLoggedIn ? <h1>Posts page</h1> : router.push('/login') }
    </>
  )
}
