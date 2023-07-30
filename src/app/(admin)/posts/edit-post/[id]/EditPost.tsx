'use client'

import PostServices from "@/app/helper/post.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditPost({ params }: { params: string}) {
  const router = useRouter();
  const postService = new PostServices();
  const postId = params;

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const response = await postService.getPostById(postId);

    setId(response.id);
    setTitle(response.title);
    setContent(response.content);
    setFeaturedImage(response.featuredImage);
    setCategory(response.category);
    setAuthor(response.author);
  }

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

  const handleEditSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const updatedPost = {
      id,
      title,
      content,
      featuredImage,
      category,
      author
    }

    postService.updatePost(updatedPost);
    router.push('/posts');
  }

  const onCancel = () => {
    setId("");
    setTitle("");
    setContent("");
    setCategory("");
    setAuthor("");
    
    router.push('/posts');
  }

  return (
    <>
      <form onSubmit={handleEditSubmit} className='flex flex-col gap-8 mb-8'>
        <div className='text-2xl font-medium mb-8'>Edit post</div>

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

        <div className="flex gap-4">
          <button className='bg-slate-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={onCancel}>Cancel</button>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Publish</button>
        </div>
      </form>
    </>
  )
}