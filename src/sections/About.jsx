import { useRef } from "react";
import CopyEmailButton from "../components/CopyEmailButton";

import {Globe} from "../components/globe";
import {Frameworks} from "../components/Frameworks";
import Card from "../components/Card";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-end grid-default-color grid-1 relative min-h-[40rem] md:min-h-0">
          <img
            src="assets/coding-pov.png"
            alt="Coding workspace"
            className="absolute scale-110 right-2 top-2 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] md:relative"
            style={{ maxWidth: "100px", width: "30vw", minWidth: "60px" }}
          />
          <div className="z-10 w-full space-y-2 p-2 md:p-0 bg-black/60 md:bg-transparent rounded-xl md:rounded-none md:static relative">
            <p className="headtext text-lg md:text-2xl break-words">
              Hi, I&apos;m Rudresh H Vyas
            </p>
            <p className="subtext text-sm md:text-base break-words">
              Full-Stack Developer skilled in MERN Stack, spring boot, Java,
              REST APIs, and cloud computing. Experienced in developing scalable
              applications with optimized system efficiency. Passionate about
              building robust solutions using modern technologies and best
              practices.
            </p>
            <div className="mt-2 text-xs md:text-sm text-neutral-300 space-y-1 break-words">
              <div>
                <b>Location:</b> 106, AP Road, Choolai, Chennai - 112, Tamil
                Nadu, India
              </div>
              <div>
                <b>Email:</b> rhv4748@gmail.com
              </div>
              <div>
                <b>Phone:</b> 9150302455
              </div>
            </div>
            <div className="mt-4">
              <b>Education:</b>
              <ul className="list-disc ml-5 text-xs md:text-sm break-words">
                <li>SRM University, KTR – MCA (Aug 2024 – Present)</li>
                <li>
                  Madras University, DG Vaishnav College – BCA (Aug 2021 – May
                  2024)
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <b>Technical Skills:</b>
              <ul className="list-disc ml-5 text-xs md:text-sm break-words">
                <li>Programming: Java, JavaScript, Python</li>
                <li>
                  Full-Stack: MERN Stack, Next.js, REST APIs, GraphQL, Java
                  Spring Boot
                </li>
                <li>Databases: MongoDB, MySQL, PostgreSQL, Redis, SQLite</li>
                <li>Cloud: AWS (EC2, S3, RDS), Docker</li>
                <li>Mobile: React Native, Firebase Authentication, Glide</li>
                <li>Other: WordPress</li>
              </ul>
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-3xl md:text-5xl text-gray-500 font-bold mb-2">
              Crafting Technologies
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <Card
                style={{ rotate: "75deg", top: "30%", left: "20%" }}
                text="Clean Code"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                text="SOLID"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                text="TDD"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                text="Design Patterns"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "10%", left: "38%" }}
                text="Teamwork"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                image="assets/logos/docker.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "10deg", top: "20%", left: "60%" }}
                image="assets/logos/react.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-10deg", top: "40%", left: "80%" }}
                image="assets/logos/mongodb.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "15deg", top: "80%", left: "10%" }}
                image="assets/logos/nextjs.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-20deg", top: "60%", left: "80%" }}
                image="assets/logos/reactnative.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "5deg", top: "10%", left: "80%" }}
                image="assets/logos/java.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "25deg", top: "60%", left: "60%" }}
                image="assets/logos/tailwindcss.svg"
                containerRef={grid2Container}
              />
            </div>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I&apos;m based in Chennai, India, and open to remote work
              worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
