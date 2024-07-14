import { FaTwitter, FaLinkedin, FaYoutube, FaDiscord, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center space-y-4 p-4 border-t-2 bg-gradient-to-r from-orange-500 to-yellow-500 bg-white dark:bg-black">
      <div className="flex justify-center space-x-6">
        <a
          href="https://x.com/FrancescoCiull4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/francesco-ciulla-roma/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.youtube.com/@francescociulla"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white"
        >
          <FaYoutube />
        </a>
        <a
          href="https://discord.gg/4c-784142072763383858"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white"
        >
          <FaDiscord />
        </a>
        <a
          href="https://www.instagram.com/francescociull4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-black dark:text-white">© 2024 Rustcrab. All rights reserved.</p>
    </footer>
  );
}
