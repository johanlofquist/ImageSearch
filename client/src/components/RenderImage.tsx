import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { saveImage } from "../services/ImageService";
import { useAuth0 } from "@auth0/auth0-react";

interface IRenderImage {
  url: string;
  title: string;
}

export const RenderImage = (props: IRenderImage) => {
  const { user, isAuthenticated } = useAuth0();
  const [isClicked, setIsClicked] = useState(false);

  {
    return isAuthenticated ? (
      <div className="relative hover:scale-105 transition-all">
        <img src={props.url} className="h-[200px] rounded drop-shadow-xl" />
        <CiHeart
          onClick={async () => {
            setIsClicked(!isClicked);
            await saveImage(user?.sub, props.url, props.title);
          }}
          className={
            isClicked
              ? "absolute right-3 bottom-3 bg-red-600 bg-opacity-80 text-white rounded-md text-3xl hover:scale-110 transition-all cursor-pointer active:scale-95"
              : "absolute right-3 bottom-3 bg-slate-600 bg-opacity-80 text-white rounded-md text-3xl hover:scale-110 transition-all cursor-pointer active:scale-95"
          }
        />
      </div>
    ) : (
      "Please login!"
    );
  }
};
