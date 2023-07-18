import React from 'react'
import Link from 'next/link'

export default function HomePage({ posts }: { posts: any[] }) {
  return (
    <>
      <nav className='container mx-auto flex justify-between py-8'>
        <Link href={"/blog"}>
          <h2 className='text-2xl font-bold'>Blogi</h2>
        </Link>
        <Link href={"/login"} className='px-8 py-2 bg-blue-500 rounded'>Login</Link>
      </nav>

      <div className='hero container mx-auto h-96 mb-10 rounded'>
        <h1 className='text-3xl font-medium pt-20'>Blogi is a Blog management system</h1>
      </div>

      <div className='blog container mx-auto w-full justify-between flex flex-wrap'>
        {
          posts.map((post, index) => {
            return <div key={index} className='w-1/3 pr-8 pb-12'>
              <img className='w-full mb-4' src={post.featuredImage} alt={post.title} />
              <h2 className='w-full text-2xl font-bold mb-4'>{post.title}</h2>
              <p className='w-full'>{post.content}</p>
            </div>
          })
        }
      </div>
    </>
  )
}
