import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { benefits } from "../Data/Data.js";
import SectionText from "./SectionText/SectionText.jsx";

const Benefits = () => {
  // Ensure onload is defined or remove the check if unnecessary
  const onload = false; // Example, change as needed

  return (
    <section className="py-10" id="offers">
      <div className="container">
        <SectionText
          title="Benefits From Our"
          subTitle="Online Learning"
          ctaName="Show all courses"
        />

        <div className="w-full mt-10">
          <div className="grid items-center grid-cols-1  gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Link 
                key={benefit.id}
                to={`/jobs/benefit/${encodeURIComponent(benefit.name.toLowerCase())}`}
                className= "bg-custom-gradient w-full hover:shadow-2xl hover:-translate-y-2 shadow-primaryColor/10 hover:border-textDarkColor duration-300 transition group rounded-xl border border-[#D6DDEB] p-8"
              >
                <div className="p-2 mb-3 rounded-lg shadow-lg h-18 w-14 bg-white/10">
                  {!onload && (
                    <img
                      src={benefit.icon}
                      alt={benefit.name}
                      loading="eager"

                    />
                  )}
                </div>
                <div className="flex flex-col justify-between gap-2 md:justify-start sm:flex-col">
                  <h3
                    className="text-white font-semibold text-xl md:text-2xl font-clashDisplay group-hover:text-textDarkColor transition duration-300"
                  >
                    {benefit.name}
                  </h3>
                  <div
                    className={"text-textDarkColor/70 flex items-center justify-between"}
                  >
                    <p className="text-sm sm:text-base text-balance">
                      {benefit.jobs} Know more
                    </p>
                    <GoArrowRight
                      size={24}
                      className="transition duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
