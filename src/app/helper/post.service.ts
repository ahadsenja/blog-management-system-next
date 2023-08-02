import { PostIface } from "../types/PostIface";

export default class PostServices {
  getAllPosts = async (): Promise<PostIface[]> => {
    const response = await fetch(`${process.env.API_URL}/posts`);
    const posts = await response.json();
    return posts
  }

  getPostById = async (id: string | string[]): Promise<PostIface> => {
    const response = await fetch(`${process.env.API_URL}/posts/${id}`);
    const post = await response.json();
    return post;
  }

  createNewPost = async (post: PostIface): Promise<PostIface> => {
    const response = await fetch(`${process.env.API_URL}/posts`, {
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
    const response = await fetch(`${process.env.API_URL}/posts/${post.id}`, {
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
    await fetch(`${process.env.API_URL}/posts/${id}`, {
      method: 'DELETE'
    });
  }
}