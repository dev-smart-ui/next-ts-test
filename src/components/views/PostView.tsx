import { getAuthorAction } from "@/actions/getAuthorAction";
import { getPostAction } from "@/actions/getPostAction";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const PostView = async ({ id }: { id: string }) => {
  const post = await getPostAction(id); // get current post (from pathname params)

  if (!post) {
    notFound(); // 404 when no post
  }

  const author = await getAuthorAction(post.userId); // if posts exists - find author who own it

  return (
    <div>
      <h1 className="font-bold text-3xl uppercase">{post.title}</h1>

      <div className="mt-1 pt-1 border-t border-color-border flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm">
        { author ? (
          <div className="flex items-center gap-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span className="inline-block mr-1">Author: </span>
            <Link href={`/authors/${author.id}`} className="font-bold text-color-link">{author.name}</Link>
          </div>
        ) : null }

        <div className="flex items-center gap-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
          </svg>
          <span className="inline-block mr-1">Date added: </span>
          <span className="font-bold">04.04.2024</span>
        </div>
      </div>

      <Image 
        src={`/posts/${+id % 9 || 1}.jpg`} 
        width={1000} 
        height={200} 
        alt="" 
        className="w-full h-[300px] object-cover mt-8"
      />

      <div className="mt-10">
        {post.body}
      </div>

      
    </div>
  )
}
