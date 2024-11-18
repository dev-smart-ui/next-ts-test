'use server';

import { iPostData } from "@/components/cards/PostCard";

// SERVER ACTION
// Fetching post
export const getPostAction = async (id: string | number): Promise<iPostData | null | undefined> => {
  try {
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);    

    if (request.status !== 200) return null;
    
    const post = await request.json();

    if (!post) return null

    return post
  } catch(err) {
    console.log(err);
  }
}
