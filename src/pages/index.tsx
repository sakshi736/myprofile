import type { NextPage } from "next"

import CommonHeaders from "../components/Home/CommonHeaders"
import Splash from "../components/Home/Splash"
import About from "../components/Home/About"
import Skills from "../components/Home/Skills"
import Qualifications from "../components/Home/Qualifications"
import ContactMe from "../components/Home/ContactMe"
import Footer from "../components/Footer"
import NavBar from "../components/Home/NavBar"

const Home: NextPage = () => {
  return (
    <>
      <CommonHeaders />
      <div>
        <NavBar
          title="Aditya Patil"
          links={[
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
              name: "Contact Me",
              href: "/#contact",
              icon: "uil:message",
            },
          ]}
        />
        {/* Main */}
        <main className="mx-[15%]">
          {/* Home */}
          <Splash />
          {/* About */}
          <About />
          {/* Skills */}
          <Skills />
          {/* Qualifications */}
          <Qualifications
            tabs={[
              {
                icon: "uil:graduation-cap",
                title: "Education",
                items: [
                  {
                    title:
                      "BTech Computer Science & Engineering (Cloud Technology & Information Security)",
                    subtitle: "Jain Deemed-to-be University",
                    dateString: "2018 - 2022",
                  },
                  {
                    title: "12th - PCM-CS",
                    subtitle: "Muljibhai Mehta International School, Virar",
                    dateString: "2016 - 2017",
                  },
                  {
                    title: "10th - CBSE",
                    subtitle: "Muljibhai Mehta International School, Virar",
                    dateString: "2014 - 2015",
                  },
                ],
              },
            ]}
          />
          {/* TODO: Portfolio */}
          {/* <section className="portfolio section" id="projects"></section> */}
          {/* Contact Me */}
          <ContactMe
            items={[
              {
                icon: "uil:envelope",
                title: "Email",
                subtitle: "patil11aditya@gmail.com",
                link: "mailto:patil11aditya@gmail.com",
              },
              {
                icon: "uil:twitter",
                title: "Twitter",
                subtitle: "@_solaris7",
                link: "https://twitter.com/_solaris7",
              },
              {
                icon: "uil:location-point",
                title: "Location",
                subtitle: "Mumbai, India",
              },
            ]}
          />
        </main>
        {/* Footer */}
        <Footer
          name="Aditya Patil"
          subtitle="Cloud Developer"
          links={[
            {
              title: "About",
              link: "#about",
            },
            {
              title: "Projects",
              link: "https://github.com/solaris7x?tab=repositories",
            },
            {
              title: "Contact Me",
              link: "#contact",
            },
          ]}
          social={[
            {
              icon: "uil:linkedin-alt",
              link: "https://www.linkedin.com/in/patil11aditya/",
            },
            {
              icon: "uil:twitter-alt",
              link: "https://twitter.com/_solaris7",
            },
            {
              icon: "uil:github",
              link: "https://github.com/solaris7x",
            },
          ]}
        />
        {/* Scroll Top */}
        {/* <a href="#" className="scrollup" id="scroll-up">
          <Icon icon="uil:arrow-up" className=" scrollup_icon" />
        </a> */}
      </div>
    </>
  )
}

export default Home
