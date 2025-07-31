export const myProjects = [
  {
    id: 4,
    title: "AI Agent - Autonomous Task Executor",
    description:
      "An LLM-powered autonomous agent that follows a THINK → ACTION → OBSERVE → OUTPUT loop to execute system tasks, code operations, and framework setups through natural language commands.",
    subDescription: [
      "Supports both Gemini and OpenAI APIs for flexible LLM integration.",
      "Built-in tools for command execution, file handling, and weather API demos.",
      "Structured feedback loop enabling multi-step reasoning and decision-making.",
      "CLI-powered with real-time shell task execution and dynamic tool chaining.",
    ],
    href: "https://github.com/rhv1501/coding_ai-agent.git",
    logo: "",
    image: "/assets/projects/ai-agent-banner.png", // Replace with your actual asset path
    tags: [{ id: 1, name: "Node.js", path: "/assets/logos/nodejs.svg" }],
  },
  {
    id: 7,
    title: "Quick It Up",
    description:
      "A Chrome extension that leverages AI to summarize web content instantly, improving productivity and information retention.",
    subDescription: [
      "Built with React and integrated with Gemini API for real-time summarization.",
      "Seamless browser integration and intuitive UI for quick access.",
      "Implements secure authentication and user preferences storage.",
    ],
    href: "https://github.com/rhv1501/quick-it-up.git",
    logo: "",
    image: "/assets/projects/ai-summariser.png",
    tags: [
      { id: 1, name: "HTML/CSS", path: "/assets/logos/css.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Gemini", path: "/assets/logos/gemini.svg" },
      { id: 4, name: "Chrome Extension", path: "/assets/logos/chrome.svg" },
    ],
  },
  {
    id: 5,
    title: "LW_DAA_HACKATHON",
    description:
      "A backend system designed for managing a college hackathon event, with secure user authentication, team registration, QR code generation, image uploads with watermarking, and admin-level attendance tracking.",
    subDescription: [
      "Implemented RESTful APIs using Node.js and Express with JWT-based authentication.",
      "Enabled team registration with dynamic teammate data and QR code generation for check-in.",
      "Built picture upload endpoint that applies a watermark automatically using Sharp.",
      "Admin panel supports login, attendance marking, and viewing all participants securely.",
    ],
    href: "https://github.com/LiveWiresSRM2023/LW_DAA_HACKATHON.git",
    logo: "",
    image: "/assets/projects/hackathon-api.png",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/express.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "JWT", path: "/assets/logos/jwt.svg" },
    ],
  },
  {
    id: 6,
    title: "Uber Microservices Backend",
    description:
      "A scalable, microservices-based backend system for an Uber-like ride-hailing platform using Node.js, RabbitMQ, and MongoDB.",
    subDescription: [
      "Developed modular services for users, captains, rides, and API gateway using Express and REST.",
      "Implemented RabbitMQ for asynchronous event communication like ride creation and acceptance.",
      "JWT-based authentication with token blacklisting ensures secure session management.",
      "Dockerized the architecture with individual MongoDB instances per service and RabbitMQ dashboard.",
      "Supports scalable deployments using Docker Compose and runs locally with standalone services.",
    ],
    href: "https://github.com/rhv1501/uber_clone",
    logo: "",
    image: "/assets/projects/uber-microservices.svg",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 2, name: "Express", path: "/assets/logos/express.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "RabbitMQ", path: "/assets/logos/rabbitmq.svg" },
      { id: 5, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 6, name: "Microservices", path: "/assets/logos/microservice.png" },
    ],
  },
  {
    id: 8,
    title: "PkG IT (E-commerce Platform)",
    description:
      "A scalable MERN-based e-commerce platform featuring a robust admin panel for product, order, and user management.",
    subDescription: [
      "Developed with MongoDB, Express.js, React, and Node.js (MERN).",
      "Admin panel for inventory, orders, and analytics.",
      "JWT authentication, secure REST APIs, and responsive UI with Tailwind CSS.",
    ],
    href: "https://e-commerce-wabm.onrender.com",
    logo: "",
    image: "/assets/projects/pkgit.png",
    tags: [
      { id: 1, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/express.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 9,
    title: "Chatify",
    description:
      "A real-time chat application enabling instant messaging using WebSockets.",
    subDescription: [
      "Built with Node.js, Express, and Socket.io for real-time communication.",
      "Responsive React frontend for seamless user experience.",
      "Supports group and private chats, message history, and notifications.",
    ],
    href: "https://www.chatify.rudsoft.tech",
    logo: "",
    image: "/assets/projects/chatify.png",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/express.svg" },
      { id: 3, name: "Socket.io", path: "/assets/logos/socketio.svg" },
      { id: 4, name: "React", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 10,
    title: "I Notebook",
    description:
      "A secure digital notebook with JWT authentication and encrypted storage.",
    subDescription: [
      "Developed with MERN stack for full-stack functionality.",
      "Implements JWT-based authentication for secure access.",
      "All notes are encrypted for privacy and security.",
    ],
    href: "https://inotebook.rudsoft.tech",
    logo: "",
    image: "/assets/projects/i-notebook.png",
    tags: [
      { id: 1, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/express.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/nodejs.svg" },
    ],
  },
  {
    id: 11,
    title: "Cyberlinks",
    description:
      "A URL shortener built with Next.js SSR for high performance and analytics.",
    subDescription: [
      "Built using Next.js for server-side rendering and fast redirects.",
      "Tracks click analytics and provides a dashboard for users.",
      "Modern UI with Tailwind CSS and secure backend APIs.",
    ],
    href: "https://cyberlinks.rudsoft.tech",
    logo: "",
    image: "/assets/projects/cyberlinks.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "whatsapp://send?phone=9150302455&text=Hello%20RUDRESH",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/rudresh-h-vyas",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rudresh_vyas_?igsh=Z3UzNTU5ZGVodTl3",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/rhv1501",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Trainee & Intern at Campalin Innovations",
    job: "Full Stack Development",
    date: "February 2023 - March 2023",
    contents: [
      "Completed hands-on training in full stack development, covering front-end, back-end, and database technologies.",
      "Worked on real-world projects applying technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
      "Gained practical experience in building scalable web applications and integrating APIs.",
      "Successfully completed the internship phase with positive feedback for performance, collaboration, and problem-solving skills.",
    ],
  },
  {
    title: "Intern at SPI Edge",
    job: "No-Code Tools, Backend Development & Data Analysis",
    date: "December 2023 - March 2024",
    contents: [
      "Built multiple internal tools using Glide, including an HRMS and a workshop management app to streamline operations.",
      "Automated attendance tracking in the HRMS app using conditional logic and integrations within Glide.",
      "Contributed to the back-end of Aspire India's habit tracking app using Node.js, focusing on scalable and maintainable APIs.",
      "Developed a client-facing HR manual app with an AI-powered chat feature using the MERN stack to assist employees with policy queries.",
      "Performed data analysis on user habits using Python and Pandas to generate actionable insights and usage patterns.",
      "Deployed web applications to AWS for production, ensuring availability, scalability, and security.",
    ],
  },
  {
    title: "Freelance Web Designer at Vasanthiexim",
    job: "Web Design & Development",
    date: "September 2024",
    contents: [
      "Designed and developed a responsive WordPress website for Vasanthiexim, a spice import/export company, to showcase their global product offerings.",
      "Implemented clean navigation and intuitive UI to improve user experience and accessibility.",
      "Optimized website performance for faster load times and better search engine rankings.",
      "Collaborated closely with the client to reflect their brand identity and business goals in the site’s design.",
    ],
  },
  {
    title: "Freelance at Mithaiji",
    job: "self-employed",
    date: "2025",
    contents: [
      "Designed and developed a visually engaging showcase website for a cloud kitchen specializing in traditional sweets.",
      "Built with React, featuring rich, expressive animations using Framer Motion and GSAP to capture user interest.",
      "Implemented responsive, mobile-first layouts for seamless browsing across all devices.",
      "Integrated external Swiggy order links to streamline the ordering experience and improve customer conversion.",
      "Applied basic SEO strategies to enhance the site's visibility and boost search engine rankings.",
      "Led the overall UI/UX design to reflect the brand identity and visually highlight the product range.",
      "Optimized site performance by lazy-loading assets, minimizing bundle size, and improving initial load speed.",
      "Received positive feedback from the client for the design aesthetic, interactivity, and performance of the website.",
      "Deployed the site using Vercel with CI/CD for efficient updates and scalability.",
      "Featured this project in the 'Projects' section of my portfolio to showcase frontend skills and design thinking.",
    ],
  },

  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];

export const funFacts = [
  {
    icon: "FaCoffee",
    label: "Cups of Coffee Consumed",
    value: "∞",
  },
  {
    icon: "FaCode",
    label: "Lines of Code Written",
    value: "404: Not Found",
  },
  {
    icon: "FaBug",
    label: "Bugs Squashed",
    value: "still counting...",
  },
  {
    icon: "FaTrophy",
    label: "Projects Completed",
    value: "10+",
  },
];

export const devFacts = [
  "Did you know? The first computer bug was an actual moth! 🦋",
  "I love dark mode so much, I even dream in #22223b.",
  "Ctrl+C, Ctrl+V is my superpower.",
  "I once fixed a bug by taking a nap.",
  "My favorite algorithm is coffee brewing.",
  "Stack Overflow is my second home.",
  "I can explain recursion, but only if you already understand recursion.",
  "My code works because I don't know why it shouldn't.",
  "I debug by adding print statements everywhere.",
  "I have a PhD in Google Search.",
  "Tabs vs Spaces? I just want my code to run.",
  "I once fixed a bug by making it a feature.",
  "I write code that only I can understand. Future me is not happy.",
  "I believe in rubber duck debugging.",
  "I have more unfinished side projects than finished ones.",
];

export const devQuotes = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  },
  {
    quote:
      "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V. Berard",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote:
      "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    author: "Edsger Dijkstra",
  },
  {
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
  {
    quote: "It’s not a bug – it’s an undocumented feature.",
    author: "Anonymous",
  },
  {
    quote: "Weeks of coding can save you hours of planning.",
    author: "Anonymous",
  },
  {
    quote: "Deleted code is debugged code.",
    author: "Jeff Sickel",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    quote:
      "Programming is like writing a book... except if you miss out a single comma on page 126 the whole thing makes no sense.",
    author: "Unknown",
  },
];
