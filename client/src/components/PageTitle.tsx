import { FaUser } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

export const PageTitle = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  return (
    <div className="flex flex-col justify-center items-center h-full gap-5">
      <span className="madimi-one-regular text-white text-5xl drop-shadow-2xl">
        ImageSearch
      </span>
      {isAuthenticated ? (
        <img
          src={user?.picture}
          className="rounded-full w-11 drop-shadow-lg cursor-pointer"
          onClick={() => {
            logout();
          }}
        />
      ) : (
        <FaUser
          className="text-white cursor-pointer text-3xl"
          onClick={() => loginWithRedirect()}
        />
      )}
    </div>
  );
};
