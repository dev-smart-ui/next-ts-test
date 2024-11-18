import { PostCard, iPostData } from "../cards/PostCard"

export const PostsList = ({ posts }: { posts: iPostData[] | null | undefined}) => {

  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl uppercase">Posts</h2>
        <p className="mt-2 text-lg leading-[1.2] text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, sequi.
        </p>
      </div>
      <div className="mt-8 grid max-w-2xl grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        { posts && posts.length ? posts.map((post) => <PostCard key={post.id} data={post} />) : (
          'No posts...'
        ) }
      </div>
    </div>
  )
}
