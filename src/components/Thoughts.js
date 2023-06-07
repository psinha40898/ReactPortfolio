import React from "react";
import MenuComponent from "./Menu";
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Image, Header} from 'semantic-ui-react'
import { motion } from "framer-motion";
import { useFadeInScaleAnimation } from "../customShizz/fadeInLoop.js"
import  useTypingAnimation  from '../customShizz/useTypingAnimation.js';



function Thoughts() {
// I have to make it so I can pass any text into this function
// In order for this function call to work with this function, the variable must be named displayedText
// this means I cannot do it for multiple strings on different parts of the page
  const { displayedText:subtitleText,  animationControls: subtitleAnimation } = useTypingAnimation('these are the "good" ones...', 100);
  const { displayedText: blog1Text, animationControls: blog1Controls } = useTypingAnimation('languages', 250);

  const { displayedText: blog2Text, animationControls: blog2Controls } = useTypingAnimation('recursion', 250);



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
      animate={subtitleAnimation}
    >
      {subtitleText}
    </motion.p>

    </Container>


      <Container text>
    <Grid className="center aligned"  columns={2} divided>
    <Grid.Row>
      <Grid.Column>

        <Link to= "blogs/Blog1">
        <motion.header
      className="Kanit notbig"
      animate={blog1Controls}
    >
      {blog1Text}
    </motion.header>
      </Link>
      </Grid.Column>
      <Grid.Column>
      <Link to= "/power">

      <motion.header
      className="Kanit notbig"
      animate={blog2Controls}
    >
      {blog2Text}
    </motion.header>
    </Link>

    
      </Grid.Column>

    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
      <Header size ="large" className = "Kanit regularweight notbig">
            memory
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