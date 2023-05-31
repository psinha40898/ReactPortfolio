import React from "react";
import MenuComponent from "../Menu";
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Image, Header} from 'semantic-ui-react'
import { motion } from "framer-motion";

function Blog1() {


    return (
        <div>
           <Container textAlign='center'>
        <MenuComponent></MenuComponent>
      
      </Container>



      <Container textAlign='left' style={{ marginTop: '15rem' }}>
    {/* <h1 class = "Kanit regularweight big"> Pyush Sinha </h1> */}
    <motion.h1
    className = "Kanit regularweight big"
      animate={{
        scale: [1, 1.0175, 1],
        opacity: [1, 0.85, 1],
        color: ["#3b3b3b", "#1a1b1c", "#6e6e6e", "#3b3b3b"],
      }}
      transition={{
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      }}
 
    >
      compilation "versus" interpretation
    </motion.h1>


    </Container>


      <Container text textAlign="left">
        <Header className="Nunito">Far too often...</Header>
        <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>


    <Header className="Nunito">But maybe</Header>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
  </Container>



      </div>
      );


};

export default Blog1;