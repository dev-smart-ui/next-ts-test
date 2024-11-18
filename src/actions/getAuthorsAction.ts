'use server';

import { iUserData } from "@/components/cards/UserCard";


// SERVER ACTION
// Fetching users list
export const getAuthorsAction = async (): Promise<iUserData[] | undefined> => {
  try {
    const request = await fetch(`https://jsonplaceholder.typicode.com/users/`);    
    const user = await request.json();

    return user
  } catch(err) {
    console.log(err);
  }
}
