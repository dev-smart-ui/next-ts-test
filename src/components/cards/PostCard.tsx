import Image from "next/image";
import Link from "next/link";


export interface iPostData {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export const PostCard = ({ data }: { data: iPostData }) => {
  const { title, body, id } = data;

  return (
    <article className="flex max-w-xl flex-col items-start justify-between border border-color-border rounded-lg overflow-hidden shadow-default">
      <div className="group relative h-full flex flex-col">
        <Image 
          src={`/posts/${id % 9 || 1}.jpg`} 
          width={400} 
          height={200} 
          alt="" 
          className="w-full h-[200px] sm:h-[150px] object-cover"
        />
        <div className="px-2 py-4 grow flex flex-col">        
          <h3 className="sm:line-clamp-2 mb-2 text-lg font-semibold leading-[1.2] text-gray-900 group-hover:text-gray-600">
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
          </h3>
          <p className="mt-auto line-clamp-5 sm:line-clamp-3 text-sm leading-[1.2] text-gray-600">{body}</p>
        </div>
      </div>
    </article>
  )
}
