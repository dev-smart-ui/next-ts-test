'use server';

import { iUserData } from "@/components/cards/UserCard";


// SERVER ACTION
// Fetching user
export const getAuthorAction = async (id: string | number): Promise<iUserData | undefined> => {
  try {
    const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);    
    const user = await request.json();

    return user
  } catch(err) {
    console.log(err);
  }
}
