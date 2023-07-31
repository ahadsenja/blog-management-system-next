import { PostIface, UserIface } from "../types/BlogInterface";

const BASE_URL = "http://localhost:5000";

export default class PostServices {
  getAllPosts = async (): Promise<PostIface[]> => {
    const response = await fetch(`${BASE_URL}/posts`, { cache: 'no-store' });
    const posts = await response.json();
    return posts
  }

  getPostById = async (id: string | string[]): Promise<PostIface> => {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const post = await response.json();
    return post;
  }

  createNewPost = async (post: PostIface): Promise<PostIface> => {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const newPost = response.json();
    return newPost;
  }

  updatePost = async (post: PostIface): Promise<PostIface> => {
    const response = await fetch(`${BASE_URL}/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const updatedPost = response.json();
    return updatedPost;
  }

  deletePost = async (id: string): Promise<void> => {
    await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE'
    });
  }

  getAllUsers = async (): Promise<UserIface[]> => {
    const response = await fetch(`${BASE_URL}/users`);
    const users = await response.json();
    return users;
  }
}