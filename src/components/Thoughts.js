import React from "react";
import MenuComponent from "./Menu";
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Image, Header} from 'semantic-ui-react'
import { motion } from "framer-motion";

function Thoughts() {


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
        duration: 5,
        ease: "linear",
      }}
 
    >
      thoughts
    </motion.h1>
    <p>test test test</p>
    <p>test test test</p>
    <p>test test test</p>
    <p>test test test</p>


    </Container>


      <Container text>
    <Grid className="center aligned"  columns={2} divided>
    <Grid.Row>
      <Grid.Column>

        <Link to= "blogs/Blog1">
      <Header size ="large" className = "Kanit regularweight notbig">
            blog1
      </Header>
      </Link>
      </Grid.Column>
      <Grid.Column>
      <Header size ="large" className = "Kanit regularweight notbig">
            blog2
      </Header>
      </Grid.Column>

    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
      <Header size ="large" className = "Kanit regularweight notbig">
            blog3
      </Header>
      </Grid.Column>
      <Grid.Column>
      <Header size ="large" className = "Kanit regularweight notbig">
            blog 4
      </Header>
      </Grid.Column>

    </Grid.Row>
  </Grid>

  </Container>



      </div>
      );


};

export default Thoughts;