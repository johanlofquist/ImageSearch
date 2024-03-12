import { ISearchResult } from "../models/SearchResult";
import { get, post } from "./ServiceBase";



export const imageSearch = async (query: string) => {
  const response = await get<ISearchResult>(
    `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_SEARCH_ENGINE_ID}&num=10&searchType=image&q=${query}`
  );
  console.log(response.data)
  return response.data;
};

export const saveImage = async (userId: string | undefined, imageUrl: string, title: string) => {
  const data = {
    userId: userId,
    favorites: [
      {
        imageUrl,
        title
      }
    ]
  }
  const response = await post(
    `http://localhost:3000/api/images/save`,
    data
  )
  console.log(response.data)
}