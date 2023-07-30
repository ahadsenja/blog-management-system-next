import PostServices from '@/app/helper/post.service';
import Users from './Users'

export default async function Page() {
  const postService = new PostServices();

  const getAllUsers = await postService.getAllUsers();

  return (
    <>
      <Users users={getAllUsers} />
    </>
  )
}
