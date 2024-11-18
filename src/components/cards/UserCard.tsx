import Image from "next/image";
import Link from "next/link"


export interface iUserData {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
  },
  phone: string,
  website: string,
  company: {
    name: string,
  },
  photo: string,
}

export const UserCard = ({ data }: { data: iUserData }) => {
  const { name, username, email, id, photo } = data;

  return (
    <article className="flex max-w-xl flex-col items-start justify-between border border-color-border rounded-lg shadow-default">
      <Link href={`/authors/${id}`} className="p-2 w-full">
        <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 w-full flex flex-col items-center gap-2 text-center">            
          <Image
            src={photo}
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          {name}
        </h3>
      </Link>
    </article>
  )
}
