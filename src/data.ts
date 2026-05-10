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
      {
        name: "Home",
        href: "/",
        icon: "uil:estate",
      },
      {
        name: "About",
        href: "/#about",
        icon: "uil:user",
      },
      {
        name: "Skills",
        href: "/#skills",
        icon: "uil:file-alt",
      },
      {
        name: "Qualifications",
        href: "/#qualification",
        icon: "uil:graduation-cap",
      },
      {
        name: "Experience",
        href: "/#experience",
        icon: "uil:briefcase-alt",
      },
      {
        name: "Contact Me",
        href: "/#contact",
        icon: "uil:message",
      },
    ],
  },

  splash: {
    name: "Sakshi",
    profession: ["a Full-Stack", "a Frontend", "a Backend", "an SDE II"],
    professionSuffix: "Developer",
    subtitle:
      "Full-Stack Developer with 3+ years of experience building scalable, secure web applications — from React & TypeScript frontends to Java & Node.js backends, deployed on AWS with Docker and CI/CD pipelines.",
    coverImgLink: "./assets/img/me.jpg",
    social: [
      {
        icon: "uil:linkedin-alt",
        href: "https://www.linkedin.com/in/sakshi-raut02",
        name: "LinkedIn",
      },
      {
        icon: "uil:github-alt",
        href: "https://github.com/sakshi736",
        name: "Github",
      },
      {
        icon: "uil:twitter-alt",
        href: "https://twitter.com/sakshir30228228",
        name: "Twitter",
      },
    ],
  },

  about: {
    introduction:
      "Hi! 👋 I'm Sakshi, a Full-Stack Developer with 3+ years of professional experience designing and delivering scalable, secure web applications. I'm proficient in React, Angular, TypeScript, Tailwind CSS, Java, Spring Boot, Node.js and Python, with hands-on expertise in AWS cloud infrastructure, Docker containerisation, CI/CD pipelines, REST & WebSocket APIs, and JWT/OAuth authentication flows. I thrive in Agile cross-functional teams — collaborating with designers, product managers, data analysts, and non-technical stakeholders alike — to ship production-grade solutions that make a real-world impact.",
    resumeLink: "assets/pdf/Sakshi_Raut_Resume_Akamai.pdf",
  },

  experience: {
    Experiencelists: [
      {
        title: "Software Development Engineer II — Project Tech4Dev",
        companyName: "Jun 2025 – Present · Remote",
        Workexperience: [
          {
            details:
              "Embedded as SDE II under the Fractional CxO program at multiple NGOs, driving end-to-end digital transformation across healthcare and rural operations.",
          },
          {
            details:
              "Designed and deployed scalable AWS cloud infrastructure (EC2, S3, RDS) to host SEARCH NGO's digital ecosystem, ensuring high availability for remote operations.",
          },
          {
            details:
              "Built and containerised custom applications on Frappe/ERPNext using Docker, digitising manual workflows across multiple programs.",
          },
          {
            details:
              "Implemented automated data pipelines using Dalgo, enabling structured data flow from field-level collection to analytics-ready storage.",
          },
          {
            details:
              "Built Glific WhatsApp chatbot flows integrating REST APIs and WebSocket communication, reducing manual overhead for frontline health workers.",
          },
          {
            details:
              "Designed Metabase dashboards with data analysts, empowering program managers with real-time insights for decision-making.",
          },
          {
            details:
              "Identified and introduced AI-driven interventions, evaluating feasibility and impact for automation and intelligent decision support.",
          },
        ],
      },
      {
        title: "Full Stack Developer — AlgoAnalytics",
        companyName: "Aug 2023 – Jun 2025 · Pune",
        Workexperience: [
          {
            details:
              "Led frontend development for client-facing platforms using React.js, Angular, and TypeScript, delivering 100% responsive UIs with Tailwind CSS.",
          },
          {
            details:
              "Developed and integrated Java Spring Boot REST API services with frontend components, ensuring seamless end-to-end functionality.",
          },
          {
            details:
              "Implemented JWT-based authentication and role-based access control (RBAC) for secure user management across applications.",
          },
          {
            details:
              "Built and maintained CI/CD pipelines with DevOps teams using GitHub Actions, streamlining deployment and reducing time-to-market.",
          },
          {
            details:
              "Utilised AWS services (S3, Lambda, DynamoDB, API Gateway) for hosting, asset management, and serverless backend workflows.",
          },
          {
            details:
              "Executed website revamps that boosted visibility and user engagement by 70%, resulting in increased traffic and improved conversion rates.",
          },
        ],
      },
      {
        title: "Software Development Engineer — Brillio",
        companyName: "Sep 2022 – Aug 2023 · Bangalore",
        Workexperience: [
          {
            details:
              "Built a training platform using Java and Spring Boot backend with Angular frontend, integrated via REST APIs — increasing user engagement by 50%.",
          },
          {
            details:
              "Implemented OAuth 2.0 and JWT authentication for secure session management and role-based access across the platform.",
          },
          {
            details:
              "Developed intricate frontend components for Sun Pharma's web properties using React.js and AEM (Adobe Experience Manager), delivering fully responsive designs.",
          },
          {
            details:
              "Leveraged AWS Lambda and API Gateway for cloud-based backend services, improving scalability and reducing infrastructure costs.",
          },
          {
            details:
              "Engaged with leadership teams for business research, accelerating delivery timelines by 50%.",
          },
        ],
      },
      {
        title: "Software Developer Intern — Wingrow Agritech",
        companyName: "Jan 2022 – Jun 2022 · Pune",
        Workexperience: [
          {
            details:
              "Designed and enhanced website UX using React.js, collaborating with the backend team for REST API integration.",
          },
          {
            details:
              "Built Progressive Web App (PWA) architecture resulting in a 30% increase in user engagement among farmers and vendors.",
          },
        ],
      },
      {
        title: "Machine Learning & Speech Processing Intern — Anubhooti Solutions",
        companyName: "Jul 2021 – Dec 2021 · Pune",
        Workexperience: [
          {
            details:
              "Developed a Python-based speech recognition model using scikit-learn and librosa for gender identification from audio signals.",
          },
          {
            details:
              "Trained model on a Kaggle dataset achieving 94% accuracy on test data using signal processing and feature extraction techniques.",
          },
        ],
      },
    ],
  },

  skills: {
    skillLists: [
      {
        icon: "ant-design:code-outlined",
        title: "Languages & Runtimes",
        subtitle: "Core languages I build with daily",
        skills: [
          { icon: "logos:typescript-icon", title: "TypeScript" },
          { icon: "logos:javascript", title: "JavaScript" },
          { icon: "logos:java", title: "Java" },
          { icon: "logos:python", title: "Python" },
          { icon: "logos:nodejs", title: "Node.js" },
          { icon: "vscode-icons:file-type-html", title: "HTML & CSS" },
          { icon: "logos:mysql", title: "SQL / MySQL" },
          { icon: "bxl:spring-boot", title: "Spring Boot" },
        ],
      },
      {
        icon: "ant-design:code-sandbox-outlined",
        title: "Libraries & Frameworks",
        subtitle: "Frameworks I use to build products",
        skills: [
          { icon: "logos:react", title: "React.js" },
          { icon: "devicon:angularjs", title: "Angular" },
          { icon: "logos:tailwindcss-icon", title: "Tailwind CSS" },
          { icon: "logos:redux", title: "Redux" },
          { icon: "logos:graphql", title: "GraphQL" },
          { icon: "logos:opencv", title: "OpenCV" },
          { icon: "vscode-icons:file-type-matlab", title: "MATLAB" },
        ],
      },
      {
        icon: "ant-design:cloud-outlined",
        title: "Cloud & DevOps",
        subtitle: "Infrastructure and deployment tools",
        skills: [
          { icon: "logos:aws", title: "AWS (EC2, S3, Lambda)" },
          { icon: "logos:docker-icon", title: "Docker" },
          { icon: "logos:kubernetes", title: "Kubernetes" },
          { icon: "logos:github-actions", title: "CI/CD / GitHub Actions" },
          { icon: "logos:postgresql", title: "PostgreSQL" },
          { icon: "logos:mongodb-icon", title: "MongoDB" },
          { icon: "logos:redis", title: "Redis" },
        ],
      },
      {
        icon: "ant-design:tool-outlined",
        title: "Auth & Tools",
        subtitle: "Security, tooling and practices",
        skills: [
          { icon: "logos:oauth", title: "OAuth 2.0 / JWT" },
          { icon: "logos:git", title: "Git" },
          { icon: "logos:postman-icon", title: "Postman" },
          { icon: "logos:github", title: "GitHub" },
          { icon: "logos:jupyter", title: "Jupyter" },
          { icon: "logos:framer", title: "Agile / Scrum" },
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
            title: "B.Tech — Electronics & Telecommunication Engineering",
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
    subtitle: "Full Stack Developer · SDE II",  // fixed typo "Developement"
    links: [
      {
        title: "About",
        link: "#about",
      },
      {
        title: "Projects",
        link: "https://github.com/sakshi736?tab=repositories",
      },
      {
        title: "Contact Me",
        link: "#contact",
      },
    ],
    social: [
      {
        icon: "uil:linkedin-alt",
        link: "https://www.linkedin.com/in/sakshi-raut02",
        name: "LinkedIn",
      },
      {
        icon: "uil:github-alt",
        link: "https://github.com/sakshi736",
        name: "Github",
      },
      {
        icon: "uil:twitter-alt",
        link: "https://twitter.com/sakshir30228228",
        name: "Twitter",
      },
    ],
  },

  homeHeaders: {
    title: "Sakshi Raut — Full Stack Developer",
    description:
      "Full-Stack Developer with 3+ years of experience in React, TypeScript, Java, Spring Boot, AWS, Docker and CI/CD pipelines.",
  },
}
