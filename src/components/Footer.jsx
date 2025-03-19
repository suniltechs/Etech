import { Link } from "react-router-dom";
import Logo from "/src/assets/images/Footer/logo 2.png";
import { footerLinks } from "../Data/Data.js";

// social lists

import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";

import { FaXTwitter } from "react-icons/fa6"

const socialLists = [
  {
    id: 1,
    name: "Facebook",
    icon: <RiFacebookFill />,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <RiInstagramLine />,
    url: "https://www.instagram.com",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: <RiLinkedinFill />,
    url: "https://www.linkedin.com",
  },
  {
    id: 5,
    name: "Twitter",
    icon: <FaXTwitter />,
    url: "https://www.twitter.com",
  },
];

const Footer = () => {
  return (
    <footer className="py-20 pb-10 bg-custom-gradient" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* left  */}
          <div className="">
            <Link to='/'>
              <img src={Logo} alt="Logo" className=" h-12" loading="eager" />
            </Link>
            <p className="text-base w-5/6 mt-5 text-textDarkColor ">
              Explore a transformative approach to skill development on our online learning platform.
            </p>
          </div>
          {/* menu  */}
          <div className="flex items-start justify-start sm:justify-evenly">
            {footerLinks.map((section) => (
              <div key={section.title} className="mr-10 sm:mr-0">
                <h3 className="font-semibold text-[18px] text-textDarkColor mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.url}
                        className="text-textDarkColor/70 font-normal text-base text-left hover:text-primaryColor hover:translate-x-2  duration-300 transition inline-block select-none"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* right  */}
          <div className="">
            <h3 className="font-semibold text-[18px] text-textDarkColor mb-3">
              Get new  course notifications
            </h3>
            <p className="w-10/12 mb-5 text-textDarkColor/70">
              The latest course news, articles, sent to your inbox weekly
            </p>
            <form action="" className="w-full ">
              <div className="flex items-center w-full h-12 gap-4 overflow-hidden">
                <input
                  type="email"
                  className="w-full h-full p-4 text-base border-none rounded-sm outline-none bg-blue-50 text-textDarkColor"
                  placeholder="Email Address"
                  required
                />
                <button className="py-3 transition duration-300 hover:scale-[1.056] rounded-sm px-6 bg-white text-textDarkColor  font-bold">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="">
            <h3 className="font-semibold text-[18px] text-textDarkColor mb-3">
              Developed By
            </h3>
            <Link
              to="https://www.linkedin.com/in/sunil-sowrirajan-40548826b/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-sm transition duration-300 rounded-full cursor-pointer sm:text-base w-7 h-7 sm:w-8 sm:h-8 hover:bg-primaryColor text-textDarkColor bg-textDarkColor/25"
            >
              <RiLinkedinFill />
            </Link>
            <span className="ml-2 text-textDarkColor">Sunil Sowrirajan</span>
          </div>

        </div>
        {/* bottom  */}
        <div className="flex flex-wrap items-center justify-between gap-5 pt-10 mt-10 border-t border-gray-600/60">
          <p
            className="text-sm sm:text-base text-textDarkColor"
            title="Created by @Ps Parwez"
          >
            &copy; {new Date().getFullYear()} Etech. All rights reserved.
          </p>
          <ul className="flex items-center gap-2 ">
            {socialLists.map((social) => (
              <li key={social.id}>
                <Link
                  to={social.url}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm transition duration-300 rounded-full cursor-pointer sm:text-base w-7 h-7 sm:w-8 sm:h-8 hover:bg-primaryColor text-textDarkColor bg-textDarkColor/25"
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
