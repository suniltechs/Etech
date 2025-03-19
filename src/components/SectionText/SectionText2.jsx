import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import PropTypes from "prop-types";

const SectionText2 = ({ title2, subTitle2, ctaName2 }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h2 className="text-2xl font-semibold lg:text-5xl text-textDarkColor font-clashDisplay">
        {title2}
        <span className="text-white "> {subTitle2}</span>
      </h2>
      <Link
        to="/all-jobs"
        className="flex group items-center gap-[5px] font-semibold md:text-base text-sm text-nowrap text-textDarkColor transition duration-300"
      >
        {ctaName2}
        <GoArrowRight
          size={23}
          className="transition duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  )
}

SectionText2.propTypes = {
  title2: PropTypes.string.isRequired,
  subTitle2: PropTypes.string.isRequired,
  ctaName2: PropTypes.string.isRequired,
};

export default SectionText2