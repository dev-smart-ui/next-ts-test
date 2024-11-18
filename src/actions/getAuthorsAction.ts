'use server';

import { iUserData } from "@/components/cards/UserCard";


// SERVER ACTION
// Fetching users list
export const getAuthorsAction = async (): Promise<iUserData[] | null | undefined> => {
  try {
    const request = await fetch(`${process.env.APP_URL || 'http://localhost:3000/'}/data/users.json`); 

    if (request.status !== 200) return null;

    const users = await request.json();

    return users
  } catch(err) {
    console.log(err);
  }
}
