'use client'
import { useRouter } from "next/navigation";

export default function Users() {
  const router = useRouter();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <>
      {isLoggedIn ? <h1>Users page</h1> : router.push('/login')}
    </>
  )
}
