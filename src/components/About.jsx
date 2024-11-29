import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const certifications = [
  {
    title: "Salesforce Certified AI Associate",
    icon: "/assets/ai.png", // Replace with your icon
    link: "https://trailhead.salesforce.com/fr/credentials/certification-detail-print/?searchString=EDlfYRpQoQAi47VIc89pFjz+oFyaH8fvm7KyxDnir3Wqr7Knb/27Kw2qIDVJpsT1", // Link to certification
  },
  {
    title: "Cisco Python Essential 1",
    icon: "/assets/python.png", // Replace with your icon
    link: "https://www.credly.com/earner/earned/badge/07c956ae-21ac-4bf4-8f82-5df1197c80af", // Link to certification
  },
  {
    title: "AWS Academy Engineering Operations Technicians",
    icon: "/assets/aws.png",// Replace with your icon
    link: "https://www.credly.com/badges/42947009-85de-481d-9911-8f36b481599d/linked_in_profile", // Link to certification
  },
  {
    title: "Cisco Introduction to Cybersecurity",
    icon: "/assets/cyber.png", // Replace with your icon
    link: "https://www.credly.com/badges/24c5b04b-b261-4032-903f-055a3c280e4b", // Link to certification
  },
];

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        onClick={() => window.open(link, "_blank")} // Opens the link in a new tab
      >
        {/* Image section */}
        <div className="relative w-full h-[200px]"> {/* Adjusted height for the image */}
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-cover rounded-t-[20px]" // Makes the image cover the top part of the card
          />
        </div>

        {/* Text content */}
        <h3 className="text-white text-[20px] font-bold text-center mt-4">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi there! I'm Aya, a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {certifications.map((cert, index) => (
          <ServiceCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
