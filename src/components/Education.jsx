import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { education } from "../constants/data";
import { fadeIn } from "../utils/motion";

const EduCard = ({ item, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-black-100 p-8 rounded-2xl w-full sm:w-[520px]"
  >
    <div className="text-5xl leading-none">“</div>
    <h3 className="text-white text-[20px] font-semibold mt-2">{item.degree}</h3>
    <p className="text-secondary mt-2 text-[16px]">
      @ {item.school}
    </p>
    <p className="text-secondary text-[14px] mt-1">{item.dates}</p>
    {item.location && (
      <p className="text-secondary text-[14px]">{item.location}</p>
    )}
    {item.highlight && (
      <p className="text-white-100 text-[14px] mt-4 leading-6">{item.highlight}</p>
    )}
  </motion.div>
);

const Education = () => {
  return (
    <>
      <div className="">
        <p className={styles.sectionSubText}>Degrees & other expensive PDFs</p>
        <h2 className={styles.sectionHeadText}>Educated: Now Debugging Life 🎓</h2>
      </div>

      <div className="mt-12 flex flex-wrap gap-10">
        {education.map((item, idx) => (
          <EduCard key={`edu-${idx}`} item={item} index={idx} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
