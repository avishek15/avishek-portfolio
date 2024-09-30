"use client";
import { motion } from "framer-motion";
import React from "react";

const AboutPage = () => {
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
      title: "Software Engineer",
      desc: "As a software engnineer, I was working well in Singapore.",
      dates: "2013-2014",
      company: "Works Applications Pte Ltd",
    },
    {
      title: "Senior Data Scientist",
      desc: "As a software engnineer, I was working well in Singapore.",
      dates: "2018-2019",
      company: "Pikup.ai",
    },
  ];

  return (
    <motion.div
      className="h-full overflow-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* CONTAINER */}
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg text-justify lg:text-xl ">
              In an era where technology shapes innovation, I bring a unique
              blend of creativity and technical expertise to every project. With
              a strong background in data science and full-stack development, I
              excel at transforming abstract ideas into practical solutions.
              From developing intelligent algorithms that optimize operations to
              creating seamless web applications, my passion for technology
              drives me to impact businesses and communities positively.{" "}
            </p>
            <p className="text-lg text-justify lg:text-xl ">
              Choose me for your next project and benefit from my diverse skill
              set, including advanced machine learning techniques and modern
              frameworks like React and Next.js. I thrive on challenges and
              adapt quickly to evolving technologies, ensuring cutting-edge
              solutions that engage users and deliver results. Let’s collaborate
              to bring your vision to life and exceed your expectations.
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
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>

            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
              {skillList.map((skill) => (
                <div
                  key={skill}
                  className="rounded p-1 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </div>
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
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}
            {/* <div className="h-full"> */}
            {jobList.map((job, index) => (
              <div key={index}>
                {index % 2 === 0 ? (
                  <div className="flex justify-between h-48">
                    {/* LEFT */}
                    <div className="w-1/3 h-48">
                      {/* TITLE, DESC, DATE, COMPANY */}
                      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                        {job.title}
                      </div>
                      <div className="p-3 text-sm italic">{job.desc}</div>
                      <div className="p-3 text-red-400 text-sm font-semibold">
                        {job.dates}
                      </div>
                      <div className="p-1 rounded bg-white text-sm font-semibold">
                        {job.company}
                      </div>
                    </div>
                    {/* CENTER */}
                    {/* LINE AND CIRCLE */}
                    <div className="w-1/6 h-48">
                      <div></div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-1/3 h-48"></div>
                  </div>
                ) : (
                  <div>
                    {/* LEFT */}
                    <div className="w-1/3 h-48"></div>
                    {/* CENTER */}
                    {/* LINE AND CIRCLE */}
                    <div className="w-1/6 h-48">
                      <div></div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-1/3 h-48">
                      {/* TITLE, DESC, DATE, COMPANY */}
                      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                        {job.title}
                      </div>
                      <div className="p-3 text-sm italic">{job.desc}</div>
                      <div className="p-3 text-red-400 text-sm font-semibold">
                        {job.dates}
                      </div>
                      <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
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
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
