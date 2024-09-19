import React, { useEffect, useRef } from 'react';
import './Home.css';
import anime from 'animejs/lib/anime.es.js';  // Import anime.js

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.innerHTML = "";
    
    for (let i = 1; i <= 100; i++) {
      let dot = document.createElement("div");
      dot.classList.add("element");
      container.appendChild(dot);
    }

    let dotAll = document.querySelectorAll(".element");
    let animation = anime.timeline({
      targets: dotAll,
      easing: "easeInOutExpo",
      loop: true,
      delay: anime.stagger(100, { grid: [10, 10], from: "center" })
    });

    animation
      .add({
        rotateZ: 180,  
        translateY: anime.stagger(0, { grid: [10, 10], from: "center", axis: "y" }),
        translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
        opacity: 1,
      })
      .add({
        scale: 0.2,
        opacity: 0.2
      })
      .add({
        borderRadius : 50 
      })
      .add({
        scale: 0.3,
        opacity: 2
      })

      .add({
        rotateZ: 180,  
        translateY: anime.stagger(0, { grid: [10, 10], from: "center", axis: "y" }),
        translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
        opacity: 1,
      })
      .add({
        scale: 0.2,
        opacity: 0.2
      })
  }, []);

  return (
    <div className='Home'>
      <div className="home1">
        <h1>Level Up Your 
            <br />
            Website <span>Anime.js</span>
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id error ratione corporis sint commodi dignissimos porro ipsum mollitia quidem iste.</p>
        <button className='btn'>Learn More</button>
      </div>

      <div className="container" ref={containerRef}></div>
    </div>
  )
}

export default Home;
