import type { GetBooksQuery } from "../models/sanity-generated";

export default function Book({ book }: { book: GetBooksQuery['allBook'][0] }) {
    return (
        <a href="/" target="_blank" className="m-2 rounded-xl p-6 border-4 border-gray-600 transition hover:-translate-y-1">
            <h2 className="font-bold text-2xl text-gray-600">{book.title}</h2>
            <p className="text-xs text-gray-400">{book.author}</p>
            <p className="text-gray-500 mt-2 text-md">{book.description}</p>
        </a>
    );
}