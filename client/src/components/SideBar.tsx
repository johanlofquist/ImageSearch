import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const { logout } = useAuth0();

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      initial={{ x: 120 }}
      animate={{ x: 0 }}
      exit={{ x: 120 }}
      className="absolute right-0 top-28 bg-purple-600 bg-opacity-30 flex flex-col text-white p-3 pr-8 rounded-l-lg text-[18px] drop-shadow-2xl"
    >
      <span className="hover:text-slate-300 cursor-pointer drop-shadow">
        <NavLink to="/">Search</NavLink>
      </span>
      <span className="hover:text-slate-300 cursor-pointer drop-shadow">
        <NavLink to="/favorites">Favorites</NavLink>
      </span>
      <CiLogout
        className="text-white cursor-pointer ml-auto mr-auto mt-3 text-4xl hover:text-slate-300"
        onClick={() => {
          logout();
        }}
      />
    </motion.div>
  );
};
