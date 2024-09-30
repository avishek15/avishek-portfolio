"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import React from "react";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const xpRef = useRef();
  const isXpRefInView = useInView(xpRef, { margin: "-100px" });

  const skillList = [
    // Programming Languages
    "Python",
    "JavaScript",
    "TypeScript",

    // AI and ML Frameworks
    "AI",
    "ML",
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "Reinforcement Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision",

    // Deep Learning Libraries
    "TensorFlow",
    "PyTorch",
    "Keras",

    // Data Manipulation and Analysis
    "Pandas",
    "NumPy",
    "Scikit-Learn",

    // Image Segmentation
    "Image Segmentation",

    // Data Visualization
    "Data Visualization",
    "Matplotlib",
    "Seaborn",
    "Plotly",

    // Web Development
    "Next.js",
    "React.js",
    "Framer Motion",
    "TailwindCSS",
    "Node.js",
    "FastAPI",
    "Django",
    "Flask",

    // Databases
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Firebase",
    "Appwrite",

    // ORM and Data Management
    "ORM",
    "SQLAlchemy",

    // Web Technologies
    "REST API",
    "WebSockets",
    "Socket.io",

    // Cloud and DevOps
    "Docker",
    "AWS",
    "Oracle Cloud",
    "Linux",
    "Bash",
    "Shell Scripting",
    "Nginx",
    "RabbitMQ",

    // Version Control and Collaboration
    "Git",
    "GitHub",
    "Jira",
    "Agile",
    "Scrum",

    // CI/CD and Automation
    "CI/CD",
    "Webpack",
    "ESLint",
    "Prettier",
    "Selenium",

    // Tools and Utilities
    "Vim",
    "VSCode",
    "Postman",
    "OpenAPI",
  ];

  const jobList = [
    {
      title: "Senior Data Scientist",
      desc: "As a Senior Data Scientist at Xccelerate Global HK Ltd, I am responsible for leading data science initiatives and training teams in AI and Machine Learning.",
      dates: "Apr 2023 - Present",
      company: "Xccelerate Global HK Ltd",
    },
    {
      title: "Senior Data Scientist",
      desc: "At Arrano Capital, I spearheaded the development of a k-NN based filtering technique for high-quality trade signals, significantly outperforming market benchmarks.",
      dates: "Apr 2022 – Dec 2022",
      company: "Arrano Capital",
    },
    {
      title: "Data Scientist",
      desc: "At Marubeni Power Asset Management, I developed predictive maintenance models for power plants that resulted in significant savings and improved operational efficiency.",
      dates: "Nov 2019 – Mar 2022",
      company: "Marubeni Power Asset Management",
    },
    {
      title: "Computer Vision Engineer",
      desc: "At Sizzle.gg, I created automated video highlights for e-sports using computer vision techniques to identify key moments.",
      dates: "Aug 2019 – Nov 2019",
      company: "Sizzle.gg",
    },
    {
      title: "Senior Deep Learning Engineer",
      desc: "At Pikup.ai, I implemented an automated storefront system using computer vision for real-time customer tracking and billing.",
      dates: "Jun 2018 – Jul 2019",
      company: "Pikup.ai",
    },
  ];

  return (
    <motion.div
      className="h-full overflow-x-clip"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-y-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg text-justify lg:text-xl ">
              In an era where technology shapes innovation, I bring a unique
              blend of creativity and technical expertise to every project. With
              a strong background in{" "}
              <span className="font-bold italic">data science</span> and{" "}
              <span className="font-bold italic">full-stack</span> development,
              I excel at transforming abstract ideas into practical solutions.
              From developing intelligent algorithms that optimize operations to
              creating seamless web applications, my passion for technology
              drives me to impact businesses and communities positively.{" "}
            </p>
            <p className="text-lg text-justify lg:text-xl ">
              Choose me for your next project and benefit from my diverse skill
              set, including{" "}
              <span className="font-bold italic">
                advanced machine learning techniques
              </span>{" "}
              and modern frameworks like{" "}
              <span className="font-bold italic">React</span> and{" "}
              <span className="font-bold italic">Next.js</span>. I thrive on
              challenges and adapt quickly to evolving technologies, ensuring
              cutting-edge solutions that engage users and deliver results.
              Let&apos;s collaborate to bring your vision to life and exceed
              your expectations.
            </p>
            {/* SIGN */}
            <div className="self-end"></div>
            {/* SCROLL SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              SKILLS
            </motion.h1>

            {/* SKILL LIST */}
            <motion.div
              className="flex gap-4 flex-wrap justify-content-between"
              initial={{ x: "-2900px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              {skillList.map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border border-gray-300"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* SCROLL SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-0 justify-center mb-6 pb-6"
            ref={xpRef}
          >
            <motion.h1
              className="font-bold text-2xl mb-12"
              initial={{ x: "-300px" }}
              animate={isXpRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            {/* <div className="h-full"> */}
            {jobList.map((job, index) => (
              <div key={index}>
                {index % 2 === 0 ? (
                  <div className="flex justify-between h-64">
                    {/* LEFT */}
                    <div className="w-2/5 h-64">
                      {/* TITLE, DESC, DATE, COMPANY */}
                      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-center">
                        {job.title}
                      </div>
                      <div className="p-3 text-sm italic text-justify">
                        {job.desc}
                      </div>
                      <div className="p-3 text-red-400 text-sm font-semibold">
                        {job.dates}
                      </div>
                      <div className="p-2 rounded bg-black text-white text-sm font-semibold w-fit">
                        {job.company}
                      </div>
                    </div>
                    {/* CENTER */}
                    {/* LINE AND CIRCLE */}
                    <div className="flex w-1/12 h-64 justify-center">
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                          {" "}
                        </div>
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-2/5 h-64"></div>
                  </div>
                ) : (
                  <div className="flex justify-between h-64">
                    {/* LEFT */}
                    <div className="w-2/5 h-64"></div>
                    {/* CENTER */}
                    {/* LINE AND CIRCLE */}
                    <div className="flex w-1/12 h-64 justify-center">
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                          {" "}
                        </div>
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-2/5 h-64">
                      {/* TITLE, DESC, DATE, COMPANY */}
                      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg text-center">
                        {job.title}
                      </div>
                      <div className="p-3 text-sm italic text-justify">
                        {job.desc}
                      </div>
                      <div className="p-3 text-red-400 text-sm font-semibold">
                        {job.dates}
                      </div>
                      <div className="p-2 rounded bg-black text-white text-sm font-semibold w-fit">
                        {job.company}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/2 sticky top-0">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
