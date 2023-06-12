import type { NextPage } from "next"
import { useState } from "react"

import HomeHeaders from "../components/Home/HomeHeaders"
import Splash from "../components/Home/Splash"
import About from "../components/Home/About"
import Skills from "../components/Home/Skills"
import Qualifications from "../components/Home/Qualifications"
import ContactMe from "../components/Home/ContactMe"
import Footer from "../components/Footer"
import NavBar from "../components/Home/NavBar"
import Experience from "../components/Home/Experience"
import { NotificationContext } from "../components/Context/notification"
import { profileData } from "../data"

const Home: NextPage = () => {
  // Notification state
  const [notification, setNotification] = useState<
    { message: string; key: number }[]
  >([])

  const addNotification = (message: string) => {
    const key = notification.length
    setNotification((prev) => [...prev, { message, key }])
    setTimeout(() => {
      setNotification((prev) => prev.filter((ele) => ele.key !== key))
    }, 5000)
  }

  // DARK: setup
  const [darkMode, setDark] = useState(true)

  const toggleDarkMode = () => {
    addNotification(`🌓 Switched to ${darkMode ? "light" : "dark"} mode`)
    setDark((prev) => !prev)
  }

  return (
    <NotificationContext.Provider value={addNotification}>
      <div className={darkMode ? "dark" : ""}>
        <HomeHeaders />
        <div className="bg-white text-black dark:bg-[#212121] dark:text-[wheat] md:mt-0 relative">
          <NavBar
            {...profileData.navBar}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          {/* Main */}
          <main className="mx-[12%]">
            {/* Home */}
            <Splash {...profileData.splash} />
            {/* About */}
            <About {...profileData.about} />
            {/* Skills */}
            <Skills {...profileData.skills} />
            {/* Qualifications */}
            <Qualifications {...profileData.qualifications} />
            {/*Experience*/}
            <Experience {...profileData.experience}/>
            {/* Contact Me */}
            <ContactMe {...profileData.contactMe} />
          </main>
          {/* Footer */}
          <Footer {...profileData.footer} />
          {/* Notification  */}
          <div
            className="w-1/2 md:w-1/3 fixed bottom-0 right-0"
            id="notification"
          >
            {notification.map((notification, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#212121] shadow-lg rounded-lg p-4 m-4"
              >
                {notification.message}
              </div>
            ))}
          </div>
          {/* Scroll Top */}
          {/* <a href="#" className="scrollup" id="scroll-up">
          <Icon icon="uil:arrow-up" className=" scrollup_icon" />
        </a> */}
        </div>
      </div>
    </NotificationContext.Provider>
  )
}

export default Home
