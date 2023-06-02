import React from "react";
import MenuComponent from "./Menu";
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Image, Header} from 'semantic-ui-react'
import { motion } from "framer-motion";
import { useFadeInScaleAnimation } from "../customShizz/fadeInLoop.js"
import  useTypingAnimation  from '../customShizz/useTypingAnimation.js';



function Thoughts() {

  const { displayedText, animationControls } = useTypingAnimation('these are the "good" ones...', 100);

  const controls = useFadeInScaleAnimation();

    return (
        <div>
           <Container textAlign='center'>
        <MenuComponent></MenuComponent>
      
      </Container>



      <Container textAlign='left' style={{ marginTop: '15rem' }}>

        
    {/* <h1 class = "Kanit regularweight big"> Pyush Sinha </h1> */}
    <motion.h1
      className="Kanit regularweight big"
      style={{ opacity: 0 }}  // inline style to set initial opacity
      animate={controls}
    >
      my thoughts
    </motion.h1>
    <motion.p
      className="Kanit"
      animate={animationControls}
    >
      {displayedText}
    </motion.p>

    </Container>


      <Container text>
    <Grid className="center aligned"  columns={2} divided>
    <Grid.Row>
      <Grid.Column>

        <Link to= "blogs/Blog1">
      <Header size ="large" className = "Kanit regularweight notbig">
            languages
      </Header>
      </Link>
      </Grid.Column>
      <Grid.Column>
      <Header size ="large" className = "Kanit regularweight notbig">
            recursion
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