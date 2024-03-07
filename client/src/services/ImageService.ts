import { ISearchResult } from "../models/searchResult";
import { get } from "./ServiceBase";



export const imageSearch = async (query: string) => {
  const response = await get<ISearchResult>(
    `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_SEARCH_ENGINE_ID}&num=10&searchType=image&q=${query}`
  );
  console.log(response.data)
  return response.data;
};