'use client'

import React, { useState } from "react"
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import PostServices from "@/app/helper/post.service"

export default function CreatePost() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const router = useRouter();
  const postService = new PostServices();

  const handleImageUpload = async (event: React.FormEvent) => {
    const file = event.target.files[0];

    if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      setFeaturedImage(reader.result as string);
    }
    reader.readAsDataURL(file);
    }    
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newPost = {
      id: uuidv4(),
      title: title,
      content: content,
      featuredImage: featuredImage,
      category: category,
      author: author
    }

    postService.createNewPost(newPost);
    handleFormReset();
    router.push('/posts');
  }

  const handleFormReset = () => {
    setId(0);
    setTitle('');
    setContent('');
    setFeaturedImage('');
    setCategory('');
    setAuthor('');
  }

  return (
    <>
      <div className='text-2xl font-medium mb-8'>
        Create new post
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-8 mb-8'>
        <label htmlFor="title" className='flex flex-col'>
          Title
          <input 
            className="text-black"
            id="title"
            name="title"
            type="text" 
            value={title} 
            onChange={(event) => setTitle(event.target.value)} 
          />
        </label>

        <label htmlFor="content" className='flex flex-col'>
          Content
          <textarea 
            className="text-black"
            id="content"
            name="content"
            rows={10} 
            value={content} 
            onChange={(event) => setContent(event.target.value)} 
          />
        </label>

        <label htmlFor="category" className='flex gap-16'>
          Category
          <input 
            className="text-black"
            id="category"
            name="category"
            type="text" 
            value={category} 
            onChange={(event) => setCategory(event.target.value)} 
          />
        </label>

        <label htmlFor="author" className='flex gap-20'>
          Author
          <input 
            className="text-black"
            id="author"
            name="author"
            type="text" 
            value={author} 
            onChange={(event) => setAuthor(event.target.value)} 
          />
        </label>

        <label htmlFor="featuredImage" className='flex gap-4'>
          Featured Image
          <input 
            type="file" 
            onChange={handleImageUpload} 
          />
        </label>
      </form>

      <button 
        className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        type="submit"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </>
  )
}
