import React, { useEffect } from "react";
import MenuComponent from "../Menu";
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Image, Header} from 'semantic-ui-react'
import { motion, useViewportScroll, useTransform, easeInOut, useAnimation  } from 'framer-motion';
import { useFadeInScaleAnimation } from "../../customShizz/fadeInLoop.js"
function Blog1() {

  const controls = useFadeInScaleAnimation();

  

    return (

      
        <div>

           <Container textAlign='center'>
        <MenuComponent></MenuComponent>
      
      </Container>



      <Container textAlign='left' style={{ marginTop: '15rem' }}>
  
    <motion.h1
      className="Kanit regularweight big"
      style={{ opacity: 0 }}  // inline style to set initial opacity
      animate={controls}
    >
      programming languages
    </motion.h1>


    </Container>


      <Container text textAlign="left">
    
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
    are just rules.
  </motion.h1>

  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:2.5, delay: 1, type: "spring"}}
  
  
  >
    It is far too often that explanations of programming languages devolve into a misplaced emphasis on the identity of any
    particular language. The phrase "line by line" is perhaps the greatest offender in this accusation.
  </motion.p>


  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:2.5, delay: 1, type: "spring"}} >

   You could create an implementation of C++ that runs on an interpreter, if you wanted. Similarly, compiled Python is not a foreign concept.
        For all intents and purposes, a programming language is a set of rules. An implementation of a language defines the path for those rules to result in computation.
  </motion.p>



  <motion.h1 initial={{ opacity: 0 }} 
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 2.5,
        delay: 2,
        ease: "easeInOut",
      }}
         
         className="Nunito">
    the rules can be implemented differently
  </motion.h1>


  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:2.5, delay: 2.25, type: "spring"}}>

  Programming can seem magical. Importing a massive and remarkable neural network to be used at will is something that can be done with just a few lines of Python. It can seem about as magical as staring out the window on the top floor of a massive and remarkable skyscraper without knowing about the floors beneath you. 

  </motion.p>

  
  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:2.5, delay: 2.25, type: "spring"}}>

  Understanding that each level relies on the one below it is the key to both a programmer’s ability to conduct a numerous amount of operations with little effort, and their ability to stare straight out into the sky while sitting on an office chair in a very tall building.

  </motion.p>

  <motion.h1 initial={{ opacity: 0 }} 
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 2.5,
        delay: 3,
        ease: "easeInOut",
      }}
         
         className="Nunito">
but there is always some connection to
  </motion.h1>
  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:3.25, delay: 2.25, type: "spring"}}>

  Truly, a compiler is nothing more than a program which translates source code into target code.
      When discussing interpreted and compiled languages, there exists an assumption that compiled means 
      compiled to machine code.
  </motion.p>
  <motion.h1 initial={{ opacity: 0 }} 
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 2.5,
        delay: 4,
        ease: "easeInOut",
      }}
         
         className="Nunito">
machine code.
  </motion.h1>

  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:4.25, delay: 2.25, type: "spring"}}>
  According to most, machine code exists at the lowest level of this metaphorical building.
      It could be argued that a level exists below machine code, the level at which electrical engineers
      and physicists operate.
      Regardless, machine code is the connection between a human's ability to provide instructions, and
      a machine's ability to perform those instructions.
       When it's said that a computer only reads zeros and ones, that is a reference
      to machine code. Understanding the details of how machine code operates would require a far lenghtier explanation.
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:4.25, delay: 2.25, type: "spring"}}>

    It is sufficient to simply accept that machine code instructions represent the actual binary voltages being passed 
      throughout the actual physical components of a computer.
      </motion.p>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:4.25, delay: 2.25, type: "spring"}}>
 Also key, is understanding that machine code is ultimately executued "line by line". 

So a compiled program is something that is translated to this machine code. That machine code is
read "line by line" by the machine's processor. The details about how the processor actually "reads" the code
are fascinating, but beyond the scope of this explanation. </motion.p>
<motion.h1 initial={{ opacity: 0 }} 
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 2.5,
        delay: 5,
        ease: "easeInOut",
      }}
         
         className="Nunito">
interpreters are compiled programs
  </motion.h1>

 </Container>



    </div>

      );


};

export default Blog1;