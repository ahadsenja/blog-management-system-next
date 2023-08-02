import PostServices from '@/app/helper/post.service';
import Posts from './Posts'

const postService = new PostServices();
export default async function page() { 
  const posts = await postService.getAllPosts();

  return (
    <>
      <Posts posts={posts} />
    </>
  )
}
