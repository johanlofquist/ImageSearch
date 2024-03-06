import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

interface ISideBar {
  showMenu: boolean;
}

export const SideBar = (props: ISideBar) => {
  const { logout } = useAuth0();

  return (
    <>
      <AnimatePresence>
        {props.showMenu && (
          <motion.div
            initial={{ x: 120 }}
            animate={{ x: 0 }}
            exit={{ x: 120 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-28 bg-purple-900 flex flex-col text-white p-3 rounded-l-lg text-md"
          >
            <span>Search</span>
            <span>Favorites</span>
            <span>About</span>
            <CiLogout
              className="text-white cursor-pointer ml-auto mr-auto mt-3 text-4xl"
              onClick={() => {
                logout();
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
