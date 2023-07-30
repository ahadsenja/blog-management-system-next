import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav className='container mx-auto flex justify-between py-8'>
        <Link href={"/blog"}>
          <h2 className='text-2xl font-bold'>Blogi</h2>
        </Link>
        <Link href={"/login"} className='px-8 py-2 bg-blue-500 rounded'>Login</Link>
      </nav>
    </>
  )
}
