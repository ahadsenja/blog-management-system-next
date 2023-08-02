import UserServices from '@/app/helper/user.service';
import Users from './Users'

const userServices = new UserServices();

export default async function Page() {
  const users = await userServices.getAllUsers();

  return (
    <>
      <Users users={users} />
    </>
  )
}
