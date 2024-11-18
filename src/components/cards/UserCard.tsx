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
}

export const UserCard = ({ data }: { data: iUserData }) => {
  const { name, username, email, id } = data;

  return (
    <article className="flex max-w-xl flex-col items-start justify-between border border-color-border rounded-lg shadow-default">
      <Link href={`/authors/${id}`} className="p-2 w-full">
        <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 w-full flex flex-col items-center text-center">            
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          {name}
        </h3>
      </Link>
    </article>
  )
}
