import { getPostsAction } from "@/actions/getPostsAction";
import { PostsList } from "../lists/PostsList"

export const HomeView = async () => {
  const posts = await getPostsAction(20); // get all posts (by limit in 20)

  return (
    <PostsList posts={posts} />
  )
}
