import { CiLogin } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SideBar } from "./SideBar";

export const PageTitle = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const text = "ImageSearch".split("");
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col justify-end items-center h-full gap-5">
      <div className="text-white madimi-one-regular text-5xl drop-shadow-2xl mb-8">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 15,
            }}
            key={i}
          >
            {el}
            {""}
          </motion.span>
        ))}
      </div>
      {isAuthenticated ? (
        <img
          src={user?.picture}
          className="rounded-full w-14 drop-shadow-lg cursor-pointer absolute top-6 right-6 hover:scale-105 active:scale-95 transition-all"
          onClick={() => {
            handleClick();
          }}
        />
      ) : (
        <CiLogin
          className="text-white cursor-pointer text-4xl absolute top-6 right-6 hover:scale-110 active:scale-100 transition-all"
          onClick={() => loginWithRedirect()}
        />
      )}
      <AnimatePresence>
        {showMenu ? <SideBar showMenu={showMenu} /> : ""}
      </AnimatePresence>
    </div>
  );
};
