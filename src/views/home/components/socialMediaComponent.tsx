import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const socialMediaList = [
  {
    id: 1,
    title: "Github",
    icon: <FaGithub className="h-full  w-full" />,
    url: "www.github.com",
    color: "#000000",
  },
  {
    id: 2,
    title: "Linkedin",
    icon: <FaLinkedinIn className="h-full  w-full" />,
    url: "www.linkedin.com",
    color: "#0a66c2",
  },
  {
    id: 3,
    title: "Facebook",
    icon: <FaFacebookF className="h-full  w-full" />,
    url: "www.facebook.com",
    color: "#0866ff",
  },
];

export default function SocialMediaComponent() {
  return (
    <>
      {socialMediaList.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener"
          className={`h-8 w-8 p-1 border-2 rounded-full text-primary border-primary hover:text-white hover:dark:text-black hover:border-transparent hover:bg-primary`}
        >
          {item.icon}
        </Link>
      ))}
    </>
  );
}
