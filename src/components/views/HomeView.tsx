import { getPostsAction } from "@/actions/getPostsAction";
import { PostsList } from "../lists/PostsList"

export const HomeView = async () => {
  const posts = await getPostsAction();

  return (
    <PostsList posts={posts} />
  )
}
