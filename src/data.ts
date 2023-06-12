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
  experience:ExperienceProps
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
    profession: [ "a Web", "a Full-Stack","a Front-End"],
    professionSuffix: "Developer",
    subtitle:
      "Web developer and Designer who believes in project-based learning and self-improvement ",
    coverImgLink: "./assets/img/me.jpg",
    social: [
      {
        icon: "uil:linkedin-alt",
        href: "https://www.linkedin.com/in/sakshi-raut-a0548a188/",
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
      "Hi! 👋 I'm Sakshi, An accomplished full stack developer with a year of professional experience, showcasing expertise in front-end and back-end technologies such as React, Angular, Java, Spring-Boot, as well as database languages like SQL and PostgreSQL. Alongside my technical proficiency, I possess a strong foundation in IoT and machine learning. A notable attribute of mine is my unwavering commitment to continuous self-improvement. As a full stack developer, I excel in collaborating seamlessly with diverse cross-functional teams, encompassing designers, product managers, and fellow developers",
    resumeLink: "/assets/pdf/Sakshi Raut -Resume.pdf",
  },
  experience: {
    Experiencelists:[
      {
        title: "Software Developer",
        companyName:"Brillio",
        Workexperience: "Worked on the Project where we developed a training platform using Java , Spring Boot for the backend environment and AngularJS for the frontend.The database was created and integrated using SQL workbench."
      },
      {
        title:"Software Developer Intern",
        companyName:"Wingrow Agritech",
        Workexperience:"Designed and enhanced the user experience of website using React JS also collaborated with backend team"
      },
      {
        title:"Machine Learning and Speech Processing Intern",
        companyName:" Anubhooti Solutions",
        Workexperience:"Worked on the project where we developed a model to classify gender on basis of voice" 
      }
    ]
  },
  skills: {
    skillLists: [
      {
        icon: "ant-design:code-outlined",
        title: "Runtimes",
        subtitle: "Runtimes that I have picked up over the years",
        skills: [
          {
            icon: "logos:typescript-icon",
            title: "Typescript",
          },
          {
            icon: "logos:javascript",
            title: "Javascript",
          },
          {
            icon: "logos:nodejs",
            title: "NodeJS",
          },
          {
            icon: "logos:python",
            title: "Python",
          },
          {
            icon: "vscode-icons:file-type-html",
            title: "HTML & CSS",
          },
          {
            title: "Mysql",
            icon: "logos:mysql",
          },
          {
            title: "Jupyter",
            icon: "logos:jupyter",
          },
          {
            title: "SpringBoot",
            icon: "bxl:spring-boot",
          }

        ],
      },
      {
        icon: "ant-design:code-sandbox-outlined",
        title: "Libraries & Frameworks",
        subtitle: "Libraries and Frameworks that I prefer to work with",
        skills: [
          {
            icon: "logos:react",
            title: "ReactJS",
          },
          {
            icon: "devicon:angularjs",
            title: "AngularJS",
          },
          {
            title: "OpenCV",
            icon: "logos:opencv",
          },
          // {
          //   title: "Pytorch",
          //   icon: "logos:pytorch",
          // },
          // {
          //   title: "Tensorflow",
          //   icon: "devicon:tensorflow-wordmark",
          // },
          // {
          //   title: "Pandas",
          //   icon: "logos:pandas",
          // },
          {
            title: "Matlab",
            icon: "vscode-icons:file-type-matlab",
          },
        ],
      },
      {
        icon: "ant-design:tool-outlined",
        title: "Tools",
        subtitle: "Tools that I use to build and deploy my projects",
        skills: [
          {
            icon: "logos:git",
            title: "Git",
          },
          {
            icon: "logos:github",
            title: "Github Actions",
          },
          // {
          //   title: "Docker",
          //   icon: "logos:docker-icon",
          // },
          // {
          //   title: "Ansible",
          //   icon: "logos:ansible",
          // },
          // {
          //   title: "Kubernetes",
          //   icon: "logos:kubernetes",
          // },
          // {
          //   title: "Cloudflare Workers",
          //   icon: "logos:cloudflare",
          // },
          // {
          //   title: "Vite",
          //   icon: "logos:vitejs",
          // },
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
            title:
              "B-Tech in Electronics and Telecommunication Engineering",
            subtitle: "Vishwakarma Institute of Technology,Pune",
            dateString: "2018 - 2022",
          },
          {
            title: "Higher Secondary Education (State Board)",
            subtitle: "Tarkunde Dharampeth Junior College,Nagpur",
            dateString: "2017 - 2018",
          },
          {
            title: "Secondary School Education (State Board)",
            subtitle: "Christanand School ,Brahmapuri",
            dateString: "2015 - 2016",
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
        icon: "uil:twitter",
        title: "Twitter",
        subtitle: "sakshir30228228",
        link: "https://twitter.com/sakshir30228228",
      },
      {
        icon: "uil:location-point",
        title: "Location",
        subtitle: "Nagpur, India",
      },
    ],
  },
  footer: {
    name: "Sakshi Raut",
    subtitle: "Software Developement Engineer",
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
        link: "https://www.linkedin.com/in/sakshi-raut-a0548a188/",
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
    title: "Aditya Patil",
    description: "Aditya is Web Developer and Cloud-Native enthusiast",
  },
}
