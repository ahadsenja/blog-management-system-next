import PostServices from '@/app/helper/post.service';
import Posts from './Posts'

export default async function page() { 
  const postService = new PostServices();
  const posts = await postService.getAllPosts();

  return (
    <>
      <Posts posts={posts} />
    </>
  )
}
