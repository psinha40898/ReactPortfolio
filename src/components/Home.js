import React, { useEffect } from 'react';
import MenuComponent from "./Menu";
import { motion, useAnimation } from "framer-motion";
import "../App.css";
import { useFadeInScaleAnimation } from "../customShizz/fadeInLoop.js";
import  useTypingAnimation  from '../customShizz/useTypingAnimation.js';


import { Container, Header, Divider, Image } from 'semantic-ui-react'
function Home() {
  const { displayedText: home_subtext, animationControls: home_subanimation } = useTypingAnimation('computer science and software', 65);
  const { displayedText: home_subtext1, animationControls: home_subanimation1 } = useTypingAnimation(' " my life is a convex combination of English and mathematics . . .', 65);
  const { displayedText: home_subtext2, animationControls: home_subanimation2 } = useTypingAnimation('That was part of the bargain. " ', 65);
  const { displayedText: home_subtext3, animationControls: home_subanimation3 } = useTypingAnimation('    - Donald Knuth', 65);


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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:2.5, delay: 1, type: "spring"}}> 
  </motion.div>
    </Container>

  

    <Container textAlign='justified'>
   
    
    {/* <motion.p
      className="Kanit"
      animate={home_subanimation}
    >
      {home_subtext}
    </motion.p> */}
    <motion.h2
      className="Kanit regularweight italic"
      animate={home_subanimation1}
    >
      {home_subtext1}
    </motion.h2>
    <motion.h2
      className="Kanit regularweight italic"
      animate={home_subanimation2}
  
    >
      {home_subtext2}
    </motion.h2>
    <motion.h2
      className="Kanit regularweight"
      animate={home_subanimation3}
    >
      {home_subtext3}
    </motion.h2>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration:2.5, delay: 5, type: "spring"}}
  >
    <Image
      src='https://i.imgur.com/qv42Rqz.jpeg'
      size='small'
      floated='left'
      circular
      bordered
    />
  </motion.div>
    {/* <Image src='https://i.imgur.com/qv42Rqz.jpeg' size='small' floated = 'left' circular bordered />  */}

 
    
    <motion.h1 initial={{ opacity: 0 }} 
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 2.5,
        delay: .75,
        ease: "easeInOut",
      }}
         
         className="Nunito">
   I'm a software engineer.
  </motion.h1>
  <motion.p  className = "Kanit regularweight" initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:2.5, delay: 5, type: "spring"}} >
 I do love the English language, and I do love the mathematical concepts innate in computer science. But more than that, I love being a strong teammate to others; whether that's offering guidance to new members, taking on the role of a teacher, or simply being a reliable component in a far grander system.
 As a recent graduate, I'm eager to learn whatever technologies are required by my team. 
 </motion.p>

  <motion.p  className = "Kanit regularweight" initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:2.5, delay: 5, type: "spring"}} >
 My passion for teaching can be seen in the page labeled "my thoughts". 
    </motion.p>

     
    </Container>
  </div>
  );
}

export default Home;