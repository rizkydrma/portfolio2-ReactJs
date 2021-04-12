import React from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import Service from "parts/Service";
import Expertise from "parts/Expertise";
import Projects from "parts/Projects";
import Contact from "parts/Contact";
import Footer from "parts/Footer";

import DarkTheme from "elements/DarkTheme";

import landingPage from "json/landingPage.json";

export default function LandingPage() {
  return (
    <>
      <DarkTheme></DarkTheme>
      <Header></Header>
      <Hero data={landingPage.hero}></Hero>
      <Service data={landingPage.service}></Service>
      <Expertise data={landingPage.expertise}></Expertise>
      <Projects data={landingPage.projects}></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
