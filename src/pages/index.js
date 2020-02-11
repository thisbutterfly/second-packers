import React from "react"
import "bulma/css/bulma.css"
import "../assets/css/style.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialHeader from "../components/SocialHeader"
import TopPanel from "../components/TopPanel"
import MenuBar from "../components/MenuBar"
import HeroCarousel from "../components/HeroCarousel"
import About from "../components/About"
import Enquiry from "../components/Enquiry"
import Services from "../components/Services"
import Testimonial from "../components/Testimonial"
import Contact from "../components/Contact"
import MobileMenuBar from "../components/MobileMenuBar"

const IndexPage = () => (
  <Layout>
    <SEO title="Aggarwal shifting" />
    <SocialHeader />
    <TopPanel />
    <MenuBar />
    <MobileMenuBar />
    <HeroCarousel />
    <About />
    <Enquiry />
    <Services />
    <Testimonial />
    <Contact />
  </Layout>
)

export default IndexPage
