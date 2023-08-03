import axios from 'axios';
import { UserIface } from '../types/UserIface';

export default class UserServices {
  getAllUsers = async (): Promise<UserIface[]> => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return []; // Return an empty array if there's an error
    }
  }
}
