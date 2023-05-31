import React from "react";
import MenuComponent from "./Menu";
import PowerCalculator from "../PowerCalculator";
import { Container, Divider } from 'semantic-ui-react'
import { motion } from "framer-motion";

function Power() {
  return (
    <div>
       <Container textAlign='center'>
    <MenuComponent></MenuComponent>
  
    
    </Container>

    <Container textAlign='left' style={{ marginTop: '10.5rem' }}>
      
      {/* <Container textAlign="center">


      <h1 class = "Kanit regularweight big"> It's simple...</h1>

      </Container> */}
    <Container text textAlign="left">


    <p className = "code regularweight tiny">num power(num base, num exponent):
<br></br>
&nbsp;&nbsp; if (base case):
<br></br>
&nbsp; &nbsp;&nbsp;&nbsp; return 1
<br></br>
&nbsp;&nbsp; else:
<br></br>
&nbsp; &nbsp;&nbsp;&nbsp; return base*power(base, exponent-1)    
    
    
     </p>

</Container>
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
      recursion
    </motion.h1>

  

    {/* <h1 class = "Kanit regularweight big"> Pyush Sinha </h1> */}
    



 






 
    </Container>

    <Container text textAlign="center">
        
  < PowerCalculator></PowerCalculator>
  </Container>
  </div>
  );
}

export default Power;