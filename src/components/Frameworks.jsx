import { OrbitingCircles } from "./OrbitingCircles";
import PropTypes from "prop-types";

export function Frameworks() {
  const skills = [
    "docker",
    "wordpress",
    "glide",
    "reactthreefiber",
    "java",
    "python",
    "javascript",
    "mongodb",
    "nextjs",
    "reactnative",
    "react",
    "expo",
    "springboot",
    "git",
    "github",
    "aws",
    "redis",
    "socketio",
    "express",
    "jwt",
    "oauth",
    "supabase",
    "firebase",
    "tailwindcss",
    "mysql",
    "sqlite",
    "postgresql",
    "css3",
    "html5",
    "chrome",
    "vitejs",
    "gsap",
    "framermotion",
    "fedora",
    "rabbitmq",
    "microservice"
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills
          .slice()
          .reverse()
          .map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
          ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    className="duration-200 rounded-sm hover:scale-110 mx-2 my-2"
    alt="tech logo"
    style={{ background: "#222", padding: 2, width: 32, height: 32 }}
  />
);
Frameworks.propTypes = {};
Icon.propTypes = {
  src: PropTypes.string.isRequired,
};
