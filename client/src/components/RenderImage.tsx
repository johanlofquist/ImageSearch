import { useState } from "react";
import { CiHeart } from "react-icons/ci";

interface IRenderImage {
  url: string;
}

export const RenderImage = (props: IRenderImage) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    
  };

  return (
    <div className="relative hover:scale-105 transition-all">
      <img src={props.url} className="h-[200px] rounded drop-shadow-xl" />
      <CiHeart
        onClick={handleClick}
        className={
          isClicked
            ? "absolute right-3 bottom-3 bg-red-600 bg-opacity-80 text-white rounded-md text-3xl hover:scale-110 transition-all cursor-pointer hover:bg-red-600 active:scale-95"
            : "absolute right-3 bottom-3 bg-slate-600 bg-opacity-80 text-white rounded-md text-3xl hover:scale-110 transition-all cursor-pointer hover:bg-red-600 active:scale-95"
        }
      />
    </div>
  );
};
