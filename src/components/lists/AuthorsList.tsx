import { UserCard, iUserData } from "../cards/UserCard"

export const AuthorsList = ({ authors }: { authors: iUserData[] | null | undefined}) => {

  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl uppercase">Authors</h2>
        <p className="mt-2 text-lg leading-[1.2] text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, sequi.
        </p>
      </div>
      <div className="mt-8 grid max-w-2xl grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        { authors && authors.length ? authors.map((author) => <UserCard key={author.id} data={author} />) : (
          'No authors...'
        ) }
      </div>
    </div>
  )
}
