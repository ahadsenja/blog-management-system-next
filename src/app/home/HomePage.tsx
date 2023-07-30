'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '../components/FrontPage/Navbar'

export default function HomePage({ posts }: {posts: any[]}) {
  return (
    <>
      <Navbar />

      <div className='hero container mx-auto h-96 mb-10 rounded'>
        <h1 className='text-3xl font-medium pt-20'>Blogi is a Blog management system</h1>
      </div>

      <div className='blog container mx-auto w-full justify-between flex flex-wrap'>
        {
          posts.map((post, index) => {
            return (
              <div key={index} className='w-1/3 pr-8 pb-12'>
                <Image className='w-full mb-4' src={post.featuredImage} alt={post.title} width={300} height={200} />
                <h2 className='w-full text-2xl font-bold mb-4'>{post.title}</h2>
                <p className='w-full'>{post.content}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
