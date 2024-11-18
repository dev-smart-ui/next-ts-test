'use server';

import { iPostData } from "@/components/cards/PostCard";

// SERVER ACTION
// Fetching post
export const getPostAction = async (targetId: string | number): Promise<iPostData | null | undefined> => {
  try {    
    const request = await fetch(`${process.env.APP_URL}/data/posts.json`);  

    if (request.status !== 200) return null;
    
    const posts = await request.json() as iPostData[];
    
    const [post] = posts.filter(({ id }) => id == targetId );    

    if (!post) return null

    return post
  } catch(err) {
    //console.log(err);
  }
}
