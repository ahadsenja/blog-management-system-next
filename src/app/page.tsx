import PostServices from './helper/post.service';
import HomePage from './home/HomePage'

export default async function Home() {
  const postServices = new PostServices();
  
  const getAllPosts = await postServices.getAllPosts();

  return (
    <>
      <HomePage posts={getAllPosts} />
    </>
  )
}
