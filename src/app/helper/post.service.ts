import axios from 'axios';
import { PostIface } from '../types/PostIface';

export default class PostServices {
  getAllPosts = async (): Promise<PostIface[]> => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }

  getPostById = async (id: string | string[]): Promise<PostIface> => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching post by ID:', error);
      return {} as PostIface; // Return an empty object if there's an error
    }
  }

  createNewPost = async (post: PostIface): Promise<PostIface> => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, post);
      console.log("Data: ", response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating new post:', error);
      return {} as PostIface; // Return an empty object if there's an error
    }
  }

  updatePost = async (post: PostIface): Promise<PostIface> => {
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/posts/${post.id}`, post);
      return response.data;
    } catch (error) {
      console.error('Error updating post:', error);
      return {} as PostIface; // Return an empty object if there's an error
    }
  }

  deletePost = async (id: string): Promise<void> => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
    } catch (error) {
      console.error('Error deleting post:', error);
      // No return value needed for delete, but you could handle the error as needed
    }
  }
}
