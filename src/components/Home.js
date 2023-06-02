import React, { useEffect } from 'react';
import MenuComponent from "./Menu";
import { motion, useAnimation } from "framer-motion";
import "../App.css";
import { useFadeInScaleAnimation } from "../customShizz/fadeInLoop.js";
import  useTypingAnimation  from '../customShizz/useTypingAnimation.js';


import { Container, Header, Divider } from 'semantic-ui-react'
function Home() {
  const { displayedText, animationControls } = useTypingAnimation('computer science and software', 75);

  const controls = useFadeInScaleAnimation();

  return (
    <div>
        <Container textAlign='center'>
    <MenuComponent></MenuComponent>
    {/* center */}
    
    </Container>
    <Container textAlign='left' style={{ marginTop: '15rem' }}>
    {/* <h1 class = "Kanit regularweight big"> Pyush Sinha </h1> */}
    <motion.h1
      className="Kanit regularweight big"
      style={{ opacity: 0 }}  // inline style to set initial opacity
      animate={controls}
    >
      pyush sinha
    </motion.h1>

    </Container>

  
    {/* <Container textAlign='right'>Right Aligned</Container> */}
    <Container textAlign='justified'>
   
    
    <motion.p
      className="Kanit"
      animate={animationControls}
    >
      {displayedText}
    </motion.p>
 <p> I'm going to add some fade in animations here that explain more about me</p>
 <p> I'm going to add some fade in animations here that explain more about the pages on this website</p>


     
    </Container>
  </div>
  );
}

export default Home;