import { Link } from "react-router-dom";
import { courses } from "../Data/Data.js";
import SectionText from "./SectionText/SectionText2.jsx";
import { SlHeart } from "react-icons/sl";

const Courses = () => {
  return (
    <section className="py-20 bg-custom-gradient" id="courses">
      <div className="container">
        <div className="w-full ">
          {/* text  */}
          <SectionText
            title2="Our Popular"
            subTitle2="Courses"
            ctaName2="Show all courses"
          />
          {/* lists  */}
          <div className="grid w-full gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {courses.map((courselist) => (
               <Link
               to={`job-details/${encodeURIComponent(courselist.title
                 .toLowerCase()
                 .split(" ")
                 .join("-"))}`}
               key={courselist.id}
               className="relative transition duration-300 bg-white border cursor-pointer hover:border-textDarkColor hover:shadow-xl hover:shadow-gray-100 border-gray-400/40 rounded-xl p-7 "
             >
                <div className="flex items-start justify-between gap-2 ">
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col items-start gap-1">
                      <img 
                        src={courselist.logo}
                        className="object-contain rounded-x1"
                        alt={courselist.title}
                        loading="eager"
                      />
                      <h3 className="text-xl font-semibold font-clashDisplay text-textDarkColor">
                        {courselist.title}
                      </h3>
                      <p className="text-sm gap-[6px] flex items-center text-textGrayColor/80 font-semibold ">
                        <span>{courselist.enroll}</span>
                        <span className="w-1 h-1 rounded-full bg-textDarkColor/70"></span>
                        <span>{courselist.application} Students</span>
                      </p>
                    </div>
                  </div>
                  {/* love icon  */}
                  <div className=""></div>
                </div>
                {/* benefits  */}
                <ul className="flex items-center gap-1 mt-5 mb-4">
                  {courselist.benefits.map((benefit, index) => (
                    <li
                      className={` ${index === 0
                          ? "bg-[#6a1fff15] text-[#6a1fffd8]"
                          : index === 1
                            ? "bg-[#16a34a1f] text-[#16a34a]"
                            : index === 2
                              ? "bg-[#ff832a1f] text-[#ff832ae5]"
                              : "bg-transparent"
                        } py-[6px] text-sm px-4 rounded-full  font-semibold`}
                      key={index}
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
                {/* desription  */}
                <p className="text-base font-medium leading-7 text-gray-700/85 ">
                  {courselist.description}
                </p>
                {/* divider  */}
                <div className="h-[1px] w-full bg-textGrayColor/20 my-6 "></div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold font-clashDisplay text-textDarkColor/80">
                    ${courselist.fee}{" "}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-textGrayColor">
                      Instructor : {courselist.mentor}
                    </p>
                  </div>
                </div>
                {/* Favorite icon */}
                <div className="absolute flex items-center justify-center w-6 h-6 p-1 transition-all duration-300 border border-gray-100 rounded-full hover:border-primaryColor/20 group hover:bg-primaryColor/10 bg-gray-300/10 top-8 right-10 ">
                  <SlHeart className="text-sm text-gray-400 transition-all duration-300 group-hover:text-primaryColor" />
                </div>

              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
