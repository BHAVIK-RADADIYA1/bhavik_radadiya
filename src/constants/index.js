import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  solidity,
  docker,
  meta,
  starbucks,
  tesla,
  redsoft,
  shopify,
  carrent,
  jobit,
  crypto,
  filmpire,
  tripguide,
  threejs,
  logikshub,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Logikshub",
    icon: logikshub,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - May 2022",
    points: [
      "Build a React.js restaurant booking website for stunning menus, and an exceptional dining experience.",
      "Collaborating closely with the design team and incorporating customer feedback, we've achieved a remarkable 20% increase in user satisfaction over the past year.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Red Software",
    icon: redsoft,
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Developed and designed interactive and visually captivating 3D websites using the Three.js library integrated within the React framework.",
      "Integrated Blender models seamlessly into Three.js scenes within the React framework, optimizing performance for smooth rendering.",
      "Leveraged Mixamo for dynamic character animation, enhancing user engagement with lifelike movements and interactions.",
      "Implemented progressive loading and streaming techniques to deliver large 3D assets and scenes efficiently, ensuring that users can explore and interact with content without long wait times or performance issues.",
    ],
  },

  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Filmpire - Netflix Clone",
    description:
      "A ReactJS app with Redux, Material UI. Discover movies by rating, popularity and genre.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: filmpire,
    source_code_link: "https://github.com/BHAVIK-RADADIYA1/filmpire",
  },
  {
    name: "Online Transaction System Using Blockchain",
    description:
      "Online Transaction System Using Blockchain is a Payment Transfer Application using Blockchain.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link:
      "https://github.com/BHAVIK-RADADIYA1/Online-Transaction-System-Using-Blockchain",
  },
];

export { services, technologies, experiences, testimonials, projects };
