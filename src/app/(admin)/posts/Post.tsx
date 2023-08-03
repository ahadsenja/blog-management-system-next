import { useRouter } from 'next/navigation'
import Image from 'next/image'
import PostServices from "@/app/helper/post.service";


export default function Post({ post }: any) {
  const router = useRouter();
  const postService = new PostServices();


  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?") === true) {
      await postService.deletePost(id);
    } else {
      return;
    }
  }

  const handleEdit = () => {
    router.push('/posts/edit-post/' + post.id);
  }

  return (
    <>
      <tr key={post.id}>
        <td className="w-40 font-medium">
          <Image src={post.featuredImage} alt={post.title} width={160} height={130} />
        </td>
        <td className="w-1/2 font-medium">{post.title}</td>
        <td className="text-center">{post.category}</td>
        <td className="text-center">{post.author}</td>
        <td className="text-center">
          <button className="hover:underline text-black mr-2" onClick={() => handleEdit()}>Edit</button>
          <button className="hover:underline text-red-500" onClick={() => handleDelete(post.id)}>Delete</button>
        </td>
      </tr>
    </>
  )
}
