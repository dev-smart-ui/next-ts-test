'use server';

import { iPostData } from "@/components/cards/PostCard";

// SERVER ACTION
// Fetching posts list
export const getPostsAction = async (limit: number | null | undefined): Promise<iPostData[] | undefined> => {
  try {
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts${limit ? `?_limit=${limit}` : ''}`);    
    const posts = await request.json();

    return posts
  } catch(err) {
    console.log(err);
  }
}
