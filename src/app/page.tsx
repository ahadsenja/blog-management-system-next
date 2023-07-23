'use client'
import { posts } from './helper/datas'
import HomePage from './home/HomePage'

export default function Page() {
  return (
    <>
      <HomePage posts={posts} />
    </>
  )
}
