import CONFIG from "notes.config";
import React from "react";
import {
  RiGithubLine,
  RiInstagramLine,
  RiMailLine,
  RiLinkedinLine,
  RiContactsLine,
} from "react-icons/ri";

const ContactCard: React.FC = () => {
  return (
    <>
      <div className="p-1 mb-3 dark:text-white flex items-center gap-2">
        <RiContactsLine className="text-xl" />
        <span>Contact</span>
      </div>
      <ul className="rounded-lg bg-white dark:bg-zinc-700 p-1 flex flex-col">
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
          >
            <RiGithubLine className="text-2xl" />
            <div className="text-sm">github</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <RiInstagramLine className="text-2xl" />
            <div className="text-sm">instagram</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            className="overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <RiMailLine className="text-2xl flex-shrink-0" />
            <div className="text-sm">email</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
            className="overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <RiLinkedinLine className="text-2xl flex-shrink-0" />
            <div className="text-sm">linkedin</div>
          </a>
        )}
      </ul>
    </>
  );
};

export default ContactCard;
