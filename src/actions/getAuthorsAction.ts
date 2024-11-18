'use server';

import { iUserData } from "@/components/cards/UserCard";


// SERVER ACTION
// Fetching users list
export const getAuthorsAction = async (): Promise<iUserData[] | undefined> => {
  try {
    const request = await fetch(`${process.env.APP_URL}/data/users.json`); 
    const users = await request.json();

    return users
  } catch(err) {
    console.log(err);
  }
}
