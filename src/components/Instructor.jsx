import MentorImage from "../assets/images/instructor/Mentoringimage.jpg";
const Instructor = () => {
  return (
    <section className="py-10" id="teachers">
      <div className="container overflow-hidden">
        <div className="w-full relative before:absolute before:content-[''] before:h-[700px] before:rotate-[60deg]  before:w-[100px] before:bg-white before:-top-[250px] before:-left-[200px] grid md:grid-cols-2 bg-custom-gradient lg:pt-20 lg:px-20 after:content-[''] after:absolute after:-bottom-[350px] after:-z-10 after:rotate-[60deg] after:right-0 after:h-[700px] after:w-[100px] after:bg-white  pt-10 pb-0 px-9">
          {/* text  */}
          <div className="flex flex-col items-start w-full gap-5">
            <h2 className="font-semibold text-4xl lg:text-5xl font-clashDisplay leading-[1.085] text-textDarkColor">
              If You Are A Certified Teacher Then Become An Instructor
            </h2>
            <p className="w-5/6 text-base font-medium text-textDarkColor/70">
               Unlock the opportunity to inspire and educate by joining our team of instructors. If you're a certified teacher, elevate your impact and share your expertise with learners worldwide.
            </p>
            <button className="py-3 px-5 text-white   font-semibold hover:scale-[1.02] transition duration-300 hover:opacity-90 cursor-pointer bg-primaryColor  rounded-sm">
              Become an Instructor
            </button><br />
          </div>
          {/* image  */}
          <div className="">
            <div className="overflow-hidden">
              <img src={MentorImage} alt="Mentor image" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
