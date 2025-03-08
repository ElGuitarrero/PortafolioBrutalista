'use client'


import React, { useState } from "react";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

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
      <p style={ {fontSize: `${size}px`} }>El tamano de este texto es {size}px</p>
      <button onClick={handleSizeChange}>Cambiar size</button>
      <Hero></Hero>
      <Experience></Experience>
    </div>
  )
}