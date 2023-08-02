import { UserIface } from "../types/UserIface";

export default class UserServices {
  getAllUsers = async (): Promise<UserIface[]> => {
    const response = await fetch(`${process.env.API_URL}/users`);
    const users = await response.json();
    return users;
  }
}