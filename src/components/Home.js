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
    
    
    </Container>
    <Container textAlign='left' style={{ marginTop: '25rem' }}>
    {/* <h1 class = "Kanit regularweight big"> Pyush Sinha </h1> */}
    <motion.h1
    class = "Kanit regularweight big"
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
      Pyush Sinha
    </motion.h1>

    </Container>

  
    <Container textAlign='right'>Right Aligned</Container>
    <Container textAlign='justified'>
   
    
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium.
      </p>
    </Container>
  </div>
  );
}

export default Home;