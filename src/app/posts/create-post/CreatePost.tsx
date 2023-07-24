'use client'

import { useState } from "react"

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    featuredImage: '',
    category: '',
    author: ''
  })

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
    console.log(value)
  }

  return (
    <>
      <div className='text-2xl font-medium mb-8'>
        Create new post
      </div>
      <form action="" className='flex flex-col gap-8 mb-8'>
        <label htmlFor="" className='flex flex-col'>
          Title
          <input className='text-black' type="text" value={formData.title} onChange={handleChange} />
        </label>
        <label htmlFor="" className='flex flex-col'>
          Content
          <textarea className='text-black' rows={10} value={formData.title} onChange={handleChange} />
        </label>
        <label htmlFor="" className='flex gap-16'>
          Category
          <select className='text-black' value={formData.title} onChange={handleChange}>
            <option value="#">Select a category</option>
          </select>
        </label>
        <label htmlFor="" className='flex gap-20'>
          Author
          <input className='text-black' type="text" value={formData.title} onChange={handleChange} />
        </label>
        <label htmlFor="" className='flex gap-4'>
          Featured Image
          <input type="file" value={formData.title} onChange={handleChange} />
        </label>
      </form>
      <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Publish</button>
    </>
  )
}
