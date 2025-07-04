import React from 'react'
import heroimages from "../assets/Hero-images.png"


function Hero() {
  return (
    <div>
      <section className="hero">
        <img src={heroimages} alt="hero image"   className="hero--photo"/>
       <h1 className="hero--header">Online Experiences</h1>
       <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </section>
    </div>
  )
}

export default Hero
