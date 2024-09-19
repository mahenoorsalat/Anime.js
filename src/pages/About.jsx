import React, { useEffect, useRef } from 'react';
import './About.css'
import './Home.css';
import anime from 'animejs/lib/anime.es.js';
const About = () => {
  const containerRef = useRef(null);

useEffect(() => {
  let container = containerRef.current;

  containerRef.innerHTML = "";
  for (let i = 1; i <= 30 ; i ++ ){
    let dot = document.createElement('div');
    dot.classList.add("element");
    container.appendChild(dot);
  }

  let dotAll = document.querySelectorAll('.element');
  let animation = anime.timeline({
    targets: dotAll,
    easing : "easeInOutExpo",
    loop : true,
    delay: anime.stagger(100, {grid :[10,10] , from : "center"})
  });

animation
.add({
  rotateZ:180 ,
  translateY: anime.stagger(100, {grid :[10,10] , from : "center" , axis : "y"}),
  translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
  opacity: 1,
})
.add({
  scale: 0.2,
  opacity: 0.2
})
.add({
  rotateZ: 90,  
  translateY: anime.stagger(100, { grid: [10, 10], from: "center", axis: "y" }),
  translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
  opacity: 1,
})
.add({
  borderRadius : 50 
})
.add({
  scale: 0.3,
  opacity: 2
})
.add({
  scale: 0.2,
  opacity: 0.2
})
}, [])
  return (
    <div className='Home flex'>
      <div className="container" ref={containerRef}></div>
      <div className="home1">
        <h1>Powerful <span>Animation Engine</span></h1>
<p>It provides timeline functionality to synchronize multiple animations and allows staggering, which makes it easy to create sequential animations with delays between elements in a grid or array.
Anime.js is a lightweight JavaScript library that simplifies complex animations, allowing you to animate HTML, CSS, SVG, and DOM attributes with ease. It supports transformations like translation, rotation, scaling, and opacity.
</p>
        <button className='btn'>Explore More!</button>
      </div>

      
    </div>
  )
}

export default About;
