/* eslint-disable @next/next/no-img-element */

import { AboutMe } from "@/components/Home/AboutMe";
import { ContactRoot } from "@/components/Home/Contact";
import { Contact } from "@/components/Home/Contact/ContactContent";
import LandingPage from "@/components/Home/LandingPage";


export default function Home() {
  return (
    <>
    <div id="home" >
    <LandingPage/>
    </div>
   <div id="about-me">
    <AboutMe />
   </div>
   <div id="contact">
      <ContactRoot />
   </div>
    </>
  )
}
