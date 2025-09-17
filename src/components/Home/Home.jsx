import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import Star from "../../assets/git.svg"
import link from "../../assets/link.svg"
import TypingEffect from "react-typing-effect"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Home() {

useGSAP(()=>{
  let tl1=gsap.timeline();
  tl1.from(".line1",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:80,
    duration:1,
    opacity:0
  })
  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
})
  return (
    <div id="home">
<div className="lefthome">
<div className="homedetails">
    <div className="line1">I'M</div>
    <div className="line2">ANSH SHARMA</div>
    <div className="line3">
      <TypingEffect
      text={["WEB DEVELOPER","SOFTWARE DEVELOPER","BUG HUNTER"]}
      speed={100}
      eraseSpeed={50}
      eraseDelay={1000}
      typingDelay={400}
      cursor='|'
      />
    </div>
    <div className="icons">
  <img
    src={Star}
    alt="Star Icon"
    width={30}
    onClick={() => window.open('https://github.com/anshsuyal', '_blank')}
  />

  <img src={link} 
  alt="LinkedIn" 
  width={30} 
  onClick={() => window.open('https://www.linkedin.com/in/ansh-sharma-1173bb277', '_blank')}
  />
  
</div>

    <button> Download Resume</button>
</div>
</div>
<div className="righthome">
    <img src={man} alt="" />
</div>
    </div>
  )
}

export default Home
