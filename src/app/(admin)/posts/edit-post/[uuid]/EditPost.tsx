export default function EditPost() {
  return (
    <>
      <div className='text-2xl font-medium mb-8'>
        Edit post
      </div>
      <form action="" className='flex flex-col gap-8 mb-8'>
        <label htmlFor="" className='flex flex-col'>
          Title
          <input className='text-black' type="text" />
        </label>
        <label htmlFor="" className='flex flex-col'>
          Content
          <textarea className='text-black' rows={10} />
        </label>
        <label htmlFor="" className='flex gap-16'>
          Category
          <select className='text-black'>
            <option value="#">Select a category</option>
          </select>
        </label>
        <label htmlFor="" className='flex gap-20'>
          Author
          <input className='text-black' type="text" />
        </label>
        <label htmlFor="" className='flex gap-4'>
          Featured Image
          <input type="file" />
        </label>
      </form>
      <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Publish</button>
    </>
  )
}
