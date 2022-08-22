import Book from '../components/Book'
import type { LoaderFunction } from '@remix-run/node';
import type { GetBooksQuery } from "../models/sanity-generated";
import { getBooks } from '../services/sanity.service'
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  const books = await getBooks()
  return { books }
}

export default function Index() {
  const { books } = useLoaderData<{
    books: GetBooksQuery['allBook'][0][]
  }>()

  return (
    <div className="h-screen w-full p-4 font-mono">
      <div className="rounded-xl p-6 bg-gray-100 border-4 border-gray-600">
        <h2 className="font-bold text-4xl text-gray-600">Book Catalog</h2>
      </div>
      <div className="grid grid-cols-3 p-12">
        {books.map((book, i) => <Book book={book} key={i} />)}
      </div>
    </div>
  );
}
