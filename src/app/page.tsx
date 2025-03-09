'use client'

import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Hello from "./components/Hello";
import '@/app/components/debug.css'
import Contacto from "./components/Contact";


export default function Home() {

  return (
    <div>
      <Hello></Hello>
      <Hero></Hero>
      <Experience></Experience>
      <Projects></Projects>
      <Contacto></Contacto>
    </div>
  )
}