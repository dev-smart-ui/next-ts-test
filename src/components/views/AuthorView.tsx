import { getAuthorAction } from "@/actions/getAuthorAction";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const AuthorView = async ({ id }: { id: string }) => {
  const author = await getAuthorAction(id); // get current author (from pathname params)

  if (!author) {
    notFound(); // 404 when no author
  }

  const userInfo = [
    { key: 'Username', value: author.username },
    { key: 'Email', value: author.email },
    { key: 'Address', value: author.address.street },
    { key: 'Phone', value: author.phone },
    { key: 'website', value: author.website },
    { key: 'company', value: author.company.name },
  ]

  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl uppercase">{author.name}</h1>
        <p className="mt-2 text-lg leading-[1.2] text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, sequi.
        </p>
      </div>

      <div className="flex flex-col-reverse sm:flex-row items-center gap-6 mt-8">
        <div className="rounded-lg shadow-default p-4 flex flex-col gap-1 w-full sm:w-auto">
          { userInfo.map(({ key, value }) => (
            <div key={key} className="flex items-center gap-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div className="whitespace-nowrap">
                {key}: 
                <span className="inline-block ml-1 font-bold">{value}</span>
              </div>
            </div>
          ))  }
        </div>

        <Image 
          src={author.photo} 
          width={300} 
          height={300} 
          alt="" 
          className="sm:ml-auto rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
        />
      </div>

      <div className="mt-10">
        <Link href="/authors/" className="flex items-center gap-2 text-color-link font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>

          Authors
        </Link>
      </div>
    </div>
  )
}
