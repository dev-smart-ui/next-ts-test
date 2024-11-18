import Image from "next/image";
import Link from "next/link";


export interface iPostData {
  userId: number,
  id: number,
  title: string,
  body: string,
  thumb: string
}

export const PostCard = ({ data }: { data: iPostData }) => {
  const { title, body, id, thumb } = data;

  return (
    <article className="max-w-xl border border-color-border rounded-lg overflow-hidden shadow-default">
      <Link href={`/posts/${id}`} className="hover:opacity-80 block h-full">
        <div className="group relative h-full flex flex-col">
          <div className="w-full h-[200px] sm:h-[150px] overflow-hidden">
            <Image 
              src={thumb} 
              width={400} 
              height={200} 
              alt="" 
              className="w-full h-full object-cover hover:scale-[1.1] duration-300"
            />
          </div>
          <div className="px-2 py-4 grow flex flex-col">        
            <h3 className="sm:line-clamp-2 mb-2 text-lg font-semibold leading-[1.2] text-gray-900 ">
              {title}
            </h3>
            <p className="mt-auto line-clamp-5 sm:line-clamp-3 text-sm leading-[1.2] text-gray-600">{body}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}
