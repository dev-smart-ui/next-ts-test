'use server';

import { iUserData } from "@/components/cards/UserCard";


// SERVER ACTION
// Fetching user
export const getAuthorAction = async (targetId: string | number): Promise<iUserData | null | undefined> => {
  try {
    const request = await fetch(`${process.env.APP_URL || 'http://localhost:3000/'}/data/users.json`);

    if (request.status !== 200) return null;

    const users = await request.json() as iUserData[];

    const [user] = users.filter(({ id }) => id == targetId );

    return user
  } catch(err) {
    console.log(err);
  }
}
