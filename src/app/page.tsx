'use client'


import React, { useState } from "react";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Hello from "./components/Hello";
import '@/app/components/debug.css'
import ParallaxText from "./components/Parallax";


export default function Home() {
  const [size, setSize] = useState(16)

  const handleSizeChange = () => {

    const randomNumber = (min:number, max:number) => {
      return Math.random() * (max - min) + min;
    }

    const random = randomNumber(0.8,1.2);
    setSize(size * random); 
    console.log(random)
    
    return;
  }

  return (
    <div>
      {/* <p style={ {fontSize: `${size}px`} }>El tamano de este texto es {size}px</p>
      <button onClick={handleSizeChange}>Cambiar size</button> */}
      {/* <ParallaxText></ParallaxText> */}
      <Hello></Hello>
      <Hero></Hero>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  )
}