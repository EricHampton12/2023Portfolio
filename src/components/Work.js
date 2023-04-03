import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/project1.png";
import Img2 from "../assets/MockPros.png";
import Img3 from "../assets/project3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Here are a few of my latest projects. All of the projects below
                use the React Library, some of which also include Redux and
                React Context API.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <a
                href="https://gpt-eh-project.online/"
                className="absolute-bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 cursor-pointer"
              >
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React ChatAI Project</span>
                </div>
              </a>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">ChatAI UI</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
             <p> Test UserName: johnsmith@test.com <br />
                 Test Password: testing123!
              </p>
          
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              
              {/* pretitle */}
              <a
                href="https://mockitpros.com/"
                className="absolute-bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 cursor-pointer"
              >
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50" target="_blank">
                  <span className="text-gradient">
                    MERN Full Stack     <br />         
                  </span>
                </div>
              </a>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">MockPros</span>         
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <a
                href="https://clone-bcf7e.web.app/"
                className="absolute-bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 cursor-pointer"
              >
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 cursor-pointer">
                  <span className="text-gradient">
                    React/React Context API/Stripe API
                  </span>
                </div>
              </a>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Amazon Clone</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
