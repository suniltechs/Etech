import { testimonial } from "../Data/Data.js";
import Pattern from "/src/assets/images/testimonials/Pattern.svg";
import SectionText from "./SectionText/SectionText.jsx";

const Testimonials = () => {
  return (
    <div className="bg-custom-gradient2">
      <section className="py-20 bg-white rounded-tl-custom rounded-br-custom">
      <div className="container relative overflow-x-hidden">
        <div>
          <SectionText
            title="What Our"
            subTitle="Students Say"
            ctaName="Read more reviews"
          />

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 gap-10 mt-10 md:gap-y-4 md:grid-cols-2 xl:grid-cols-3">
            {testimonial.map((testimonial) => (
              <div
                className="flex items-start px-6 py-6 transition duration-300 bg-white border rounded-lg shadow-2xl shadow-textDarkColor/25 hover:-translate-y-2 lg:px-6"
                key={testimonial.id}
              >
                {/* Student Photo */}
                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 mr-4 bg-white rounded-full shadow-sm ring-1 ring-gray-100">
                  <img
                    src={testimonial.logo} 
                    className="flex-shrink-0 object-cover lg:w-10 rounded-full"
                    alt={testimonial.studentName}
                    loading="eager"
                  />
                </div>
                <div>
                  {/* Student Name */}
                  <h3 className="mb-1 text-xl text-textDarkColor font-semibold">
                    {testimonial.studentName}
                  </h3>

                  {/* Testimonial Content */}
                  <p className="text-base font-normal text-textDarkColor">
                    {testimonial.studentReview}
                  </p>

                  {/* Star Ratings */}
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`h-5 w-5 ${
                          index < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 6.016 1.519 8.276L12 18.971l-7.455 3.627 1.519-8.276-6.064-6.016 8.332-1.151z" />
                      </svg>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="flex items-center mt-4">
                    <label
                      htmlFor=""
                      className="px-[10px] text-xs py-[4px] lg:text-sm border border-[#56cdad29] select-none text-[#56CDAD] rounded-full bg-[#56CDAD1A]"
                    >
                      {testimonial.JobType}
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Background Pattern */}
        <img
          src={Pattern}
          alt="Pattern"
          className="absolute top-0 object-contain opacity-10 w-[450px] h-full right-10 -z-10"
          loading="eager"
        />
      </div>
    </section>
    </div>
  );
};

export default Testimonials;
