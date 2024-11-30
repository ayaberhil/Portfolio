import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "../mycss.scss";

// CV file links (replace with actual links)
const CV_FRENCH = "/assets/pdfs/CV_BERHIL_FR.pdf";  // Replace with your actual path
const CV_ENGLISH = "/assets/pdfs/CV_BERHIL_ENG.pdf"; // Replace with your actual path

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCVDownload = (version) => {
    const link = version === "french" ? CV_FRENCH : CV_ENGLISH;
    window.open(link, "_blank");
    setIsModalOpen(false); // Close the modal after downloading
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          {/* Animate "Hi, I'm Aya" text */}
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            className={`${styles.heroHeadText} text-white`}
          >
            Hello, I'm <span className="text-[#915EFF]">Aya</span>
          </motion.h1>

          {/* Animate the description text */}
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            
            I specialize in developing dynamic 
            <br className="sm:block hidden" />
            web and mobile applications
            <br className="sm:block hidden" />
            that deliver seamless 
            <br className="sm:block hidden" />
            experiences and meet business needs.
          </motion.p>

          {/* Button to trigger modal */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="mt-5 bg-[#915EFF] text-white py-2 px-6 rounded-full text-lg cursor-pointer"
            style={{
              position: "relative",  // Ensure the button is positioned correctly
              zIndex: 10,  // Ensure button is on top of any other overlapping content
            }}
          >
            Download CV
          </motion.button>
        </div>

        {/* Animate "Aya Berhil" text with continuous animation */}
        <motion.div
          className="slidingTextContainer hidden sm:block"
          animate={{
            x: ["-15%", "-110%"], // Moves the text from 0% to -100% and vice versa
          }}
          transition={{
            duration: 10, // Speed of the sliding
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "mirror", // Reverse the direction to make it slide back and forth
          }}
        >
          Aya Berhil
        </motion.div>

        {/* Image Container */}
        <div  className="imageContainer hidden sm:block">
          <img src="/assets/aya_svggg.png" alt="Aya's Image" />
        </div>
      </div>

      {/* Modal for CV download */}
      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-6 rounded-lg max-w-md z-20">
            <h3 className="text-center text-xl font-semibold mb-4 text-black">
              Choose CV Language
            </h3>
            <div className="flex justify-around space-x-4">
  <button
    onClick={() => handleCVDownload("french")}
    className="mt-5 bg-[#915EFF] text-white py-2 px-6 rounded-full text-lg cursor-pointer"
  >
    French
  </button>
  <button
    onClick={() => handleCVDownload("english")}
    className="mt-5 bg-[#915EFF] text-white py-2 px-6 rounded-full text-lg cursor-pointer"
  >
    English
  </button>
</div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-gray-500 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Arrow section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
