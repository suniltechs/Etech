// Benefits
import Icon1 from "../assets/images/benefits/Icon1.png";
import Icon2 from "../assets/images/benefits/Icon2.png";
import Icon3 from "../assets/images/benefits/Icon3.png";
import Icon4 from "../assets/images/benefits/Icon4.png";
import Icon5 from "../assets/images/benefits/Icon5.png";
import Icon6 from "../assets/images/benefits/Icon6.png";
import Icon7 from "../assets/images/benefits/Icon7.png";
import Icon8 from "../assets/images/benefits/Icon8.png";

export const benefits = [
  { id: 1, name: "Flexibility", icon: Icon1 },
  { id: 2, name: "Personalization", icon: Icon2 },
  { id: 3, name: "Affordability", icon: Icon3 },
  { id: 4, name: "Expertise", icon: Icon4 },
  { id: 5, name: "Diversity", icon: Icon5 },
  { id: 6, name: "Engagement", icon: Icon6 },
  { id: 7, name: "Certification", icon: Icon7 },
  { id: 8, name: "Community", icon: Icon8 },
];

// Courses
import Post1 from "../assets/images/courses/webdesign.jpg";
import Post2 from "../assets/images/courses/wireframe.jpg";
import Post3 from "../assets/images/courses/datascience.jpg";
import Post4 from "../assets/images/courses/cybersecurity.jpg";
import Post5 from "../assets/images/courses/cloudcomputing.jpg";
import Post6 from "../assets/images/courses/digitalmarketing.jpg";

export const courses = [
  {
    id: 1,
    title: "Web Design & Development",
    application: 185,
    description:
      "Web design and development combine creativity and technical skills to create visually appealing, functional, and user-friendly digital experiences.",
    enroll: "Enrollment",
    benefits: ["Mentoring", "Remote"],
    fee: 560,
    mentor: "J. Morgan",
    logo: Post1,
  },
  {
    id: 2,
    title: "Wireframing & Prototyping",
    application: 400,
    description:
      "Wireframing and prototyping are essential design processes that visualize layouts, refine functionality, and enhance user experiences before development.",
    enroll: "Enrollment",
    benefits: ["Mentoring", "Remote"],
    fee: 160,
    mentor: "Jordan Re",
    logo: Post2,
  },
  {
    id: 3,
    title: "Python For Data Science",
    application: 160,
    description:
      "Python excels in data science with powerful libraries like Pandas and NumPy, enabling efficient analysis, visualization, and machine learning.",
    enroll: "Enrollment",
    benefits: ["Mentoring", "Remote"],
    fee: 432,
    mentor: "Alex Taylor",
    logo: Post3,
  },
  {
    id: 4,
    title: "Cybersecurity",
    application: 500,
    description:
      "Cybersecurity protects systems, networks, and data from cyber threats using technology, processes, and practices to ensure safety and privacy.",
    enroll: "Enrollment",
    benefits: ["Mentoring", "Remote"],
    fee: 460,
    mentor: "Tony Stark",
    logo: Post4,
  },
  {
    id: 5,
    title: "Cloud Computing",
    application: 350,
    description:
      "Cloud computing delivers scalable computing services like storage, applications, and processing power over the internet, enhancing efficiency and accessibility.",
    enroll: "Enrollment",
    benefits: ["Mentoring", "Remote"],
    fee: 260,
    mentor: "Mark Ruffalo",
    logo: Post5,
  },
  {
    id: 6,
    title: "Digital Marketing",
    application: 260,
    description:
      "Digital marketing uses online platforms and strategies to promote products or services, engaging audiences through targeted and measurable campaigns.",
    enroll: "Enrollment",
    benefits: ["Mentoring", "Remote"],
    fee: 332,
    mentor: "Peter Parker",
    logo: Post6,
  },
];

// Testimonials
import studentImage1 from "../assets/images/testimonials/student1.jpg";
import studentImage2 from "../assets/images/testimonials/student2.jpg";
import studentImage3 from "../assets/images/testimonials/student3.jpg";

export const testimonial = [
  {
    id: 1,
    logo: studentImage1,
    studentName: "Alexa Rodriguez",
    studentReview:
      "Enrolling in courses at this e-learning platform was a game changer for me. Absolutely transformative experience.",
    rating: 5, // Fixed: changed from "5" to 5
    JobType: "Full Stack Developer",
  },
  {
    id: 2,
    logo: studentImage2,
    studentName: "Emily Chen",
    studentReview:
      "Exceptional courses! The practical insights and the flexible learning structure have been instrumental in my professional growth.",
    rating: 4, // Fixed: changed from "4" to 4
    JobType: "UI & UX Designer",
  },
  {
    id: 3,
    logo: studentImage3,
    studentName: "Zendaya Peter",
    studentReview:
      "Highly recommended! The personalized feedback and real-world application in the courses have elevated my understanding.",
    rating: 5, // Fixed: changed from "5" to 5
    JobType: "Data Analyst",
  },
];

// Footer Links
export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Services", url: "/services" },
      { name: "Community", url: "/community" },
      { name: "Testimonials", url: "/testimonials" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", url: "/helpcenter" },
      { name: "Tweet @ Us", url: "/tweet" },
      { name: "Webinars", url: "/webinars" },
      { name: "Feedback", url: "/feedback" },
    ],
  },
];
