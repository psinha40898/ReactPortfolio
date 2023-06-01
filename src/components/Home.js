import React, { useEffect } from 'react';
import MenuComponent from "./Menu";
import { motion, useAnimation } from "framer-motion";
import "../App.css";
import { useFadeInScaleAnimation } from "../customShizz/fadeInLoop.js"

import { Container, Header, Divider } from 'semantic-ui-react'
function Home() {
  
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
      className='Kanit'
      style = {{opacity: 0}}
      animate ={controls}
      >computer science and software
      
      
      </motion.p>

      <motion.p
      className='Kanit'
      style = {{opacity: 0}}
      animate ={controls}
      > ( add sections about me )      
      
      </motion.p>


      
      <motion.p
      className='Kanit'
      style = {{opacity: 0}}
      animate ={controls}
      > ( explain the website )      
      
      </motion.p>



     
    </Container>
  </div>
  );
}

export default Home;