import { useAuth0 } from "@auth0/auth0-react";
import { getFavorites } from "../services/ImageService";
import { useEffect, useState } from "react";
import { FavoritesResult } from "../models/FavoritesResult";
import { RenderFavorite } from "../components/RenderFavorite";

export const Favorites = () => {
  const { user } = useAuth0();
  const userId: string | undefined = user?.sub;
  const [favorites, setFavorites] = useState<FavoritesResult[]>();

  useEffect(() => {
    if (favorites) return;
    const getData = async () => {
      const response = await getFavorites(userId);
      setFavorites(response);
    };

    getData();
  });

  console.log(favorites);

  {
    return favorites ? (
      <div className="flex flex-wrap gap-5 justify-center items-center w-[90%] m-auto">
        {favorites.map((favorite) => (
          <RenderFavorite url={favorite.imageUrl} title={favorite.title} />
        ))}
      </div>
    ) : (
      ""
    );
  }
};
