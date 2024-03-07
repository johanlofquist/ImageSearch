import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <motion.div whileHover={{ rotate: 360, scale: 1.1 }}>
        <a href="https://github.com/johanlofquist/ImageSearch" target="_blank">
          <FaGithub className="text-5xl" />
        </a>
      </motion.div>
    </div>
  );
};
