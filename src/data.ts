import { FooterProps } from "./components/Footer"
import { AboutProps } from "./components/Home/About"
import { ContactMeProps } from "./components/Home/ContactMe"
import { ExperienceProps } from "./components/Home/Experience"
import { HomeHeadersProps } from "./components/Home/HomeHeaders"
import { NavBarDataProps } from "./components/Home/NavBar"
import { QualificationsProps } from "./components/Home/Qualifications"
import { SkillsProps } from "./components/Home/Skills"
import { SplashProps } from "./components/Home/Splash"

export interface profileDataProps {
  splash: SplashProps
  about: AboutProps
  skills: SkillsProps
  qualifications: QualificationsProps
  contactMe: ContactMeProps
  navBar: NavBarDataProps
  footer: FooterProps
  homeHeaders: HomeHeadersProps
  experience: ExperienceProps
}

export const profileData: profileDataProps = {
  navBar: {
    title: "Sakshi Raut",
    links: [
      { name: "Home",          href: "/",              icon: "uil:estate"        },
      { name: "About",         href: "/#about",        icon: "uil:user"          },
      { name: "Skills",        href: "/#skills",       icon: "uil:file-alt"      },
      { name: "Qualifications",href: "/#qualification",icon: "uil:graduation-cap"},
      { name: "Experience",    href: "/#experience",   icon: "uil:briefcase-alt" },
      { name: "Contact Me",    href: "/#contact",      icon: "uil:message"       },
    ],
  },

  splash: {
    name: "Sakshi",
    profession: ["a Full-Stack", "an SDE II", "an AI-Augmented", "a React + Java"],
    professionSuffix: "Developer",
    subtitle:
      "I build scalable web applications and ship AI-powered workflows — React, TypeScript, Java, AWS, Docker, and Claude working together to solve real-world problems.",
    coverImgLink: "./assets/img/me.jpg",
    social: [
      { icon: "uil:linkedin-alt", href: "https://www.linkedin.com/in/sakshi-raut02",    name: "LinkedIn" },
      { icon: "uil:github-alt",   href: "https://github.com/sakshi736",                 name: "Github"   },
      { icon: "uil:twitter-alt",  href: "https://twitter.com/sakshir30228228",           name: "Twitter"  },
    ],
  },

  about: {
    introduction:
      "Hi! 👋 I'm Sakshi, a Full-Stack Developer with 3+ years of experience delivering production-grade web applications. My stack spans React, Angular, TypeScript, Tailwind CSS, Java, Spring Boot, Node.js, and Python — deployed on AWS with Docker and CI/CD pipelines.\n\nWhat sets my work apart is how I integrate AI into every layer. I actively use Claude (Anthropic) to accelerate development — from generating boilerplate and debugging complex logic, to drafting data pipeline specs and designing architecture. At Project Tech4Dev, I introduced Claude-assisted workflows that helped non-technical NGO staff interact with systems in plain language, reducing manual operations overhead significantly.\n\nI thrive at the intersection of engineering precision and real-world impact — building tools that work reliably at scale and make a tangible difference.",
    resumeLink: "assets/pdf/Sakshi_Raut_Resume_Akamai.pdf",
  },

  experience: {
    Experiencelists: [
      {
        title: "Software Development Engineer II — Project Tech4Dev",
        companyName: "Jun 2025 – Present · Remote  |  🤖 AI-augmented delivery",
        Workexperience: [
          { details: "Embedded as SDE II under Fractional CxO program at multiple NGOs, driving end-to-end digital transformation across healthcare and rural operations." },
          { details: "Designed and deployed scalable AWS cloud infrastructure (EC2, S3, RDS) to host SEARCH NGO's digital ecosystem, ensuring high availability for remote operations." },
          { details: "Built and containerised Frappe/ERPNext applications using Docker, digitising manual workflows; used Claude to accelerate ERPNext customisation scripting and documentation." },
          { details: "Implemented Dalgo data pipelines for program verticals; leveraged Claude to help draft pipeline specs and debug transformation logic, cutting iteration time in half." },
          { details: "Built Glific WhatsApp chatbot flows with REST APIs and WebSocket communication, reducing manual overhead for frontline health workers at SEARCH NGO." },
          { details: "Introduced Claude-powered plain-language interfaces that allowed non-technical field coordinators to query operational data without SQL knowledge." },
          { details: "Designed Metabase dashboards with data analysts, empowering program managers with real-time insights for decision-making across field programs." },
        ],
      },
      {
        title: "Full Stack Developer — AlgoAnalytics",
        companyName: "Aug 2023 – Jun 2025 · Pune",
        Workexperience: [
          { details: "Led frontend development using React.js, Angular, and TypeScript with Tailwind CSS — delivering 100% responsive, accessible UIs." },
          { details: "Developed and integrated Java Spring Boot REST APIs with frontend components, ensuring seamless end-to-end functionality." },
          { details: "Implemented JWT-based authentication and RBAC for secure user management across client applications." },
          { details: "Maintained CI/CD pipelines via GitHub Actions; utilised AWS (S3, Lambda, DynamoDB, API Gateway) for serverless backend workflows." },
          { details: "Executed website revamps that boosted user engagement by 70%, resulting in increased traffic and improved conversion rates." },
          { details: "Used Claude to generate unit test scaffolding and refactor legacy Angular components, reducing code review cycles significantly." },
        ],
      },
      {
        title: "Software Development Engineer — Brillio",
        companyName: "Sep 2022 – Aug 2023 · Bangalore",
        Workexperience: [
          { details: "Built a training platform using Java + Spring Boot backend and Angular frontend integrated via REST APIs — increasing user engagement by 50%." },
          { details: "Implemented OAuth 2.0 and JWT authentication for secure session management and role-based access." },
          { details: "Developed Sun Pharma web components using React.js and AEM (Adobe Experience Manager), delivering fully responsive designs across all device types." },
          { details: "Leveraged AWS Lambda and API Gateway for scalable cloud backend services." },
          { details: "Accelerated delivery timelines by 50% through stakeholder alignment and engineering process improvements." },
        ],
      },
      {
        title: "Software Developer Intern — Wingrow Agritech",
        companyName: "Jan 2022 – Jun 2022 · Pune",
        Workexperience: [
          { details: "Designed and enhanced website UX using React.js, collaborating with backend team for REST API integration." },
          { details: "Built PWA architecture resulting in a 30% increase in user engagement among farmers and vendors." },
        ],
      },
      {
        title: "ML & Speech Processing Intern — Anubhooti Solutions",
        companyName: "Jul 2021 – Dec 2021 · Pune",
        Workexperience: [
          { details: "Developed a Python-based speech recognition model using scikit-learn and librosa for gender identification from audio signals." },
          { details: "Trained on a Kaggle dataset achieving 94% accuracy on test data using signal processing and feature extraction." },
        ],
      },
    ],
  },

  skills: {
    skillLists: [
      {
        icon: "ant-design:code-outlined",
        title: "Languages & Runtimes",
        subtitle: "Core languages I build with",
        skills: [
          { icon: "logos:typescript-icon", title: "TypeScript"  },
          { icon: "logos:javascript",      title: "JavaScript"  },
          { icon: "logos:java",            title: "Java"        },
          { icon: "logos:python",          title: "Python"      },
          { icon: "logos:nodejs",          title: "Node.js"     },
          { icon: "logos:mysql",           title: "SQL / MySQL" },
          { icon: "bxl:spring-boot",       title: "Spring Boot" },
        ],
      },
      {
        icon: "ant-design:code-sandbox-outlined",
        title: "Frontend & UI",
        subtitle: "Frameworks and UI libraries",
        skills: [
          { icon: "logos:react",            title: "React.js"    },
          { icon: "devicon:angularjs",      title: "Angular"     },
          { icon: "logos:tailwindcss-icon", title: "Tailwind CSS"},
          { icon: "logos:redux",            title: "Redux"       },
          { icon: "logos:graphql",          title: "GraphQL"     },
          { icon: "logos:html-5",           title: "HTML5 / CSS3"},
        ],
      },
      {
        icon: "ant-design:cloud-outlined",
        title: "Cloud & DevOps",
        subtitle: "Infra, containers, pipelines",
        skills: [
          { icon: "logos:aws",          title: "AWS (EC2, S3, Lambda)" },
          { icon: "logos:docker-icon",  title: "Docker"               },
          { icon: "logos:kubernetes",   title: "Kubernetes"           },
          { icon: "logos:github",       title: "CI/CD / GitHub Actions"},
          { icon: "logos:postgresql",   title: "PostgreSQL"           },
          { icon: "logos:mongodb-icon", title: "MongoDB"              },
          { icon: "logos:redis",        title: "Redis / DynamoDB"     },
        ],
      },
      {
        icon: "uil:robot",
        title: "AI & Claude",
        subtitle: "How I work with AI daily",
        skills: [
          { icon: "logos:openai-icon",   title: "Claude (Anthropic)"   },
          { icon: "logos:python",        title: "LLM Integration"      },
          { icon: "logos:jupyter",       title: "Prompt Engineering"   },
          { icon: "logos:opencv",        title: "scikit-learn / librosa"},
          { icon: "vscode-icons:file-type-matlab", title: "MATLAB"    },
        ],
      },
    ],
  },

  qualifications: {
    tabs: [
      {
        icon: "uil:graduation-cap",
        title: "Education",
        items: [
          {
            title: "B.Tech — Electronics & Telecommunication",
            subtitle: "Vishwakarma Institute of Technology, Pune",
            dateString: "2018 – 2022 · CGPA 8.1",
          },
          {
            title: "Higher Secondary Education (State Board)",
            subtitle: "Tarkunde Dharampeth Junior College, Nagpur",
            dateString: "2017 – 2018",
          },
          {
            title: "Secondary School Education (State Board)",
            subtitle: "Christanand School, Brahmapuri",
            dateString: "2015 – 2016",
          },
        ],
      },
    ],
  },

  contactMe: {
    items: [
      {
        icon: "uil:envelope",
        title: "Email",
        subtitle: "sakshiraut736@gmail.com",
        link: "mailto:sakshiraut736@gmail.com",
      },
      {
        icon: "uil:linkedin-alt",
        title: "LinkedIn",
        subtitle: "linkedin.com/in/sakshi-raut02",
        link: "https://www.linkedin.com/in/sakshi-raut02",
      },
      {
        icon: "uil:location-point",
        title: "Location",
        subtitle: "Nagpur, Maharashtra, India",
      },
    ],
  },

  footer: {
    name: "Sakshi Raut",
    subtitle: "Full Stack Developer · SDE II",
    links: [
      { title: "About",      link: "#about"  },
      { title: "Projects",   link: "https://github.com/sakshi736?tab=repositories" },
      { title: "Contact Me", link: "#contact" },
    ],
    social: [
      { icon: "uil:linkedin-alt", link: "https://www.linkedin.com/in/sakshi-raut02", name: "LinkedIn" },
      { icon: "uil:github-alt",   link: "https://github.com/sakshi736",              name: "Github"   },
      { icon: "uil:twitter-alt",  link: "https://twitter.com/sakshir30228228",       name: "Twitter"  },
    ],
  },

  homeHeaders: {
    title: "Sakshi Raut — Full Stack Developer",
    description: "Full-Stack Developer with 3+ years in React, TypeScript, Java, Spring Boot, AWS, Docker, and AI-augmented engineering with Claude.",
  },
}