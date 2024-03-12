import { useAuth0 } from "@auth0/auth0-react";

interface IRenderFavorite {
  url: string;
  title: string;
}

export const RenderFavorite = (props: IRenderFavorite) => {
  const { isAuthenticated } = useAuth0();

  {
    return isAuthenticated ? (
      <div className="relative hover:scale-105 transition-all">
        <img src={props.url} className="h-[200px] rounded drop-shadow-xl" />
      </div>
    ) : (
      "Please login!"
    );
  }
};
