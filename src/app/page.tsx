'use client'

import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Hello from "./components/Hello";
import '@/app/components/debug.css'
import Contacto from "./components/Contact";
import { ParallaxProvider } from 'react-scroll-parallax';



export default function Home() {

  return (
    <ParallaxProvider>
      <Hello></Hello>
      <Hero></Hero>
      <Experience></Experience>
      <Projects></Projects>
      <Contacto></Contacto>
    </ParallaxProvider>
  )
}