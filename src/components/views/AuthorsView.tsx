import { getAuthorsAction } from "@/actions/getAuthorsAction";
import { AuthorsList } from "../lists/AuthorsList"


export const AuthorsView = async () => {
  const users = await getAuthorsAction(); // get all authors

  return (
    <AuthorsList authors={users} />
  )
}
