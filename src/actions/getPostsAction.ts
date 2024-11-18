'use server';

import { iPostData } from "@/components/cards/PostCard";

// SERVER ACTION
// Fetching posts list
export const getPostsAction = async (limit: number | null | undefined): Promise<iPostData[] | undefined> => {
  try {
    const request = await fetch(`${process.env.APP_URL}/data/posts.json`); 
    let posts = await request.json();

    if (limit) {
      posts = posts.slice(0, limit);
    }

    return posts
  } catch(err) {
    console.log(err);
  }
}
