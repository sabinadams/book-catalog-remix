import { GraphQLClient } from "graphql-request";
import type { GetBooksQuery } from "../models/sanity-generated";
import BookQuery from "../graphql/books.query";

export async function getBooks() {
  const graphcms = new GraphQLClient(process.env.SANITY_API_URL || "");
  const { allBook } = await graphcms.request<GetBooksQuery>(BookQuery);
  return allBook;
}
