import { useAuth0 } from "@auth0/auth0-react";
import { imageSearch } from "../services/ImageService";
import { ChangeEvent, useState } from "react";
import { ISearchResult } from "../models/searchResult";
import { RenderImage } from "../components/RenderImage";

export const Search = () => {
  const { isAuthenticated } = useAuth0();
  const [userInput, setUserInput] = useState("");
  const [searchResult, setSearchResult] = useState<ISearchResult>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleCorrectedSearch = async (query: string | undefined) => {
    const search: ISearchResult = await imageSearch(query as string);
    setSearchResult(search);
    setUserInput("");
  };

  return (
    <>
      <div className="flex justify-center items-start">
        {isAuthenticated ? (
          <>
            <input
              type="text"
              placeholder="Search"
              className="rounded py-1 px-2 text-sm shadow-lg transition-all"
              value={userInput}
              onChange={handleChange}
            />
            <button
              className="bg-violet-200 rounded text-sm py-1 px-2 ml-1 text-violet-800 shadow-lg active:scale-95 transition-all"
              onClick={async () => {
                const search: ISearchResult = await imageSearch(userInput);
                setSearchResult(search);
                console.log(searchResult?.items);
                setUserInput("");
              }}
            >
              GO
            </button>
          </>
        ) : (
          <span className="text-white text-sm italic">Please login</span>
        )}
      </div>
      <span className="flex justify-center gap-1">
        {searchResult ? (
          <span className="text-slate-300 text-sm mt-2 italic">
            ({searchResult.searchInformation.searchTime}s)
          </span>
        ) : (
          ""
        )}
        {searchResult && searchResult.spelling ? (
          <span className="text-slate-300 text-sm mt-2">
            Did you mean{" "}
            <button
              className="text-white underline"
              onClick={() => {
                handleCorrectedSearch(searchResult.spelling?.correctedQuery);
              }}
            >
              {searchResult.spelling.correctedQuery}
            </button>
            ?
          </span>
        ) : (
          ""
        )}
      </span>
      <div className="flex flex-wrap gap-5 mt-10 justify-center items-center">
        {searchResult
          ? searchResult.items.map((image) => <RenderImage url={image.link} />)
          : ""}
      </div>
    </>
  );
};