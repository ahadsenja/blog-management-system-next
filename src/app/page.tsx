'use client'
import { posts } from './helper/datas'
import HomePage from './home/HomePage'

export default function Home() {
  return (
    <>
      <HomePage posts={posts} />
    </>
  )
}
