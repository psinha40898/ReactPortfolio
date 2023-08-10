import React, {  } from "react";
import MenuComponent from "../Menu";
import { Container, } from 'semantic-ui-react'
import { motion,} from 'framer-motion';
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
I always felt that I really learned the most about computer science when interacting with others. Perhaps one thing that kept me afloat as a student was my tendency to frequently, and annoyingly, attempt to gauge the understanding my peers had on certain topics. More often than not, they left me feeling dumbfounded and impressed with their vast experience in a plethora of technologies. But other times were a little different.
  </motion.p>


  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:2.5, delay: 1, type: "spring"}} >
  I was talking to someone who really liked developing web applications. At the time, I was certain that I would grow to be an expert in the C programming language  who only bothered with computer science at the lower levels where “things really happened.” I was doing all the regular  things that C programmers do to manifest a false sense of superiority over people who develop usable software; I was making my own useless  bare-bones operating system, I was looking into embedded boards that high school students 3 years my junior were able to master, and I was even considering ways to contribute to open source device driver projects. Somewhere along my delusion I was able to propagate this phony sense of superior understanding to my aforementioned web developer friend.
   
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

  And that’s when they told me something along the lines of “while I do enjoy my severely crippling and immoral addiction to the React ecosystem, I just wish I understood how things operated under the hood as well as you did. I wish I understood how things really happened.” Perhaps those exact words of flattery were not spoken, but the point still stands
  </motion.p>

  
  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:2.5, delay: 2.25, type: "spring"}}>

  What exactly were they missing? And this doesn’t just apply to React junkies; do Python and Java developers have a less strongly formed understanding of how things work under the hood than C programmers? Well, when it comes to really good C programmers, the answer is: probably. But in many situations, that is simply not the case. And it really never should be.

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
but there is always some connection
  </motion.h1>
  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:3.25, delay: 2.25, type: "spring"}}>
  The only thing that my dear Reactaoholic friend was missing was a simple consideration: the relationship their programs had to machine code. For experienced developers, this question is easily answered. But for students and new developers, the loss of this connection is what allows for a very promising react developer to even consider that a less than average C programmer might know more about the inner workings of how computers work than they do.
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
to machine code.
  </motion.h1>

  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:4.25, delay: 2.25, type: "spring"}}>
  A program’s relationship to machine code is responsible for many of its important details. And that relationship is greatly impacted, often defined, by the implementation of the programming language that is used. Crucial to this concept is the differentiation between a programming language and its implementation. A programming language is a set of rules to follow. An implementation is the product of engineering those rules to result in computation.
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:4.25, delay: 2.25, type: "spring"}}>
      A simple Python program (in this writing, Python means the CPython implementation) may yield an identical output to its C equivalent, but the C program can be perceived as more robust in that it can execute on systems that cannot afford an installation of the Python runtime environment. Similarly, a neural network (not a simple program) written in both languages may be identical when executed, but the Python implementation can be seen as more robust because: it is easier to maintain and build upon due to the portable nature of the implementation, and it is simply not feasible for the program to execute on any hardware which could not handle a Python installation. The key difference is that Python utilizes a runtime environment to yield more portable and abbreviated code, while C has no such requirement. In cases where the cost of that requirement is negligible, Python is can be the best choice. In the cases where that cost is detrimental, a fast language like C is a better choice.
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:4.25, delay: 2.25, type: "spring"}}>

      CPython and Oracle’s Java implementation share a key similarity in that they rely on the installation of a runtime environment for execution. Oftentimes, this runtime environment is referred to as an interpreter. And far too often, the distinction between compiled and interpreted languages is drawn as a strong binary in which the latter executes high level code “line by line”, while the former exclusively translates a large amount of code at once.
      </motion.p>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:4.25, delay: 2.25, type: "spring"}}>
      The runtime environment, or interpreter, is a program that is compiled to machine code for the target system. Once installed, it allows for the execution of Python  and Java (in this writing, Java means Oracle’s implementation of Java). A key part in this process is the compiling of Python or Java into lower level bytecode. The bytecode is executed by the runtime environment, which has already been compiled to machine code, in order to be executed by hardware </motion.p>
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
  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:4.25, delay: 2.25, type: "spring"}}>
  If you can consider the runtime environment to be a virtual machine, then you would save yourself some trouble by simply considering “bytecode” to mean “virtual machine code.” From there, you can see that the “line by line” execution of this virtual machine code is no different than the line by line execution of machine code by an actual physical processor.
 </motion.p>
 <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:4.25, delay: 2.25, type: "spring"}}>
 There are a few key distinctions between the two processes: Java always stores the entirety of bytecode on disk before loading it into memory, Python only does this as a means of optimization. Python makes no use of a JIT compiler (a just-in-time compiler just means that some frequently executed portions of the high level code are compiled straight to machine code in order to improve performance) while Java absolutely does.

 </motion.p>
 <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:4.25, delay: 2.25, type: "spring"}}>
 And for my web developing friend, it means that the browser which is executing their code serves the same function as the runtime environment does in Python and Java. 

 </motion.p>
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
that's "how things really happened"
  </motion.h1> <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:4.25, delay: 2.25, type: "spring"}}>

  A programming language is simply a set of rules. The implementation being used defines your program’s relationship to machine code. Some implementations dictate that programs are completely compiled to a target machine’s code. Other implementations prefer feeding a program through an intermediary program that is already compiled, like a runtime machine or web browser. This fact is vital towards understanding how a high level program, like a React application or an advanced Python project, interacts with the hardware of a machine; investigating the intermediary program is sufficient to begin the journey to understand “how things really happened.”

 </motion.p>
 </Container>



    </div>

      );


};

export default Blog1;