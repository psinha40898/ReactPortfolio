import React from "react";
import MenuComponent from "./Menu";
import { motion } from "framer-motion";
import "../App.css";

import { Container, Header, Divider } from 'semantic-ui-react'
function Home() {
  return (
    <div>
        <Container textAlign='center'>
    <MenuComponent></MenuComponent>
    {/* center */}
    
    </Container>
    <Container textAlign='left' style={{ marginTop: '15rem' }}>
    {/* <h1 class = "Kanit regularweight big"> Pyush Sinha </h1> */}
    <motion.h1
    className = "Kanit regularweight big"
      animate={{
        scale: [1, 1.0175, 1],
        opacity: [1, 0.85, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      }}
 
    >
      pyush sinha
    </motion.h1>

    </Container>

  
    {/* <Container textAlign='right'>Right Aligned</Container> */}
    <Container textAlign='justified'>
   
    
      <Header size ="large" className = "Kanit regularweight notbig">
        software engineer
      </Header>
    </Container>
  </div>
  );
}

export default Home;