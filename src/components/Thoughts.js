import React from "react";
import MenuComponent from "./Menu";
import { Link } from 'react-router-dom';
import { Container, Grid, Header} from 'semantic-ui-react'
import { motion } from "framer-motion";
import { useFadeInScaleAnimation } from "../customShizz/fadeInLoop.js"
import  useTypingAnimation  from '../customShizz/useTypingAnimation.js';



function Thoughts() {
// I have to make it so I can pass any text into this function
// In order for this function call to work with this function, the variable must be named displayedText
// this means I cannot do it for multiple strings on different parts of the page
  const { displayedText:subtitleText,  animationControls: subtitleAnimation } = useTypingAnimation('these are the "good" ones...', 100);
  const { displayedText: blog1Text, animationControls: blog1Controls } = useTypingAnimation('languages', 250);

  const { displayedText: blog2Text, animationControls: blog2Controls } = useTypingAnimation('call stack', 250);



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
    <motion.h2
      className="Kanit regularweight"
      animate={subtitleAnimation}
    >
      {subtitleText}
    </motion.h2>
    <motion.p
      className="Kanit"
       
    >
      computers can seem really mystical
      <br></br>
      and computer science is a young field
      <br></br>
      that youth can be seen by the regurgitation of explanations that consent to that mystification
      <br></br>
      these posts are primarily to reinforce my own understanding of topics, but i also hope that they are clear for people new to the field
      <br></br>
    </motion.p>

    
          </Container>


      <Container text>
        <br></br>
        <br></br>
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
            complexity
      </Header>
      </Grid.Column>
      <Grid.Column>
      <Header size ="large" className = "Kanit regularweight notbig">
            bootstrapping
      </Header>
      </Grid.Column>

    </Grid.Row>
  </Grid>

  </Container>
<Container>

<motion.p
      className="Kanit"
   
    >
      done:
      <ul>
      <li>
        languages
      </li>
      <li>
        call stack
      </li>
      </ul>
      soon:
      <ul>
      <li>
        complexity
      </li>
      <li>
        bootstrapping
      </li>
      <li>
      memory 1: abstraction
      </li>

   

      </ul>
      later:
      <ul>

      <li>
        neural networks 1: xor
      </li>
      <li>
        neural networks 2: training
      </li>
      <li>
        memory 2: physical
      </li>
      <li>
        neural networks 3 : images
      </li>
      <li>
        neural networks 4 : languages
      </li>


      </ul>
    </motion.p>
</Container>


      </div>
      );


};

export default Thoughts;