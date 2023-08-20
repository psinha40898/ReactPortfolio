import React, { } from 'react';
import MenuComponent from "./Menu";

import { motion, } from "framer-motion";
import "../App.css";
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
// import laptoppic from '../images/1.jpg';
import { useFadeInScaleAnimation } from "../customShizz/fadeInLoop.js";
import  useTypingAnimation  from '../customShizz/useTypingAnimation.js';


import { Container, Image, Grid } from 'semantic-ui-react'
function Home() {
  const { displayedText: SE_subtext1, animationControls: SE_subanimation1 } = useTypingAnimation('software engineer', 255);
  const { displayedText: home_subtext1, animationControls: home_subanimation1 } = useTypingAnimation(' something cool Donald Knuth once said "my life is a convex combination of English and mathematics . . . That was part of the bargain \n " ', 100);
  const { displayedText: home_projecttext1, animationControls: home_projectanimation1 } = useTypingAnimation('Projects', 255);
  const { displayedText: home_skilltext1, animationControls: home_skillanimation } = useTypingAnimation('frameworks/libraries: Flask, PyTorch, TensorFlow, React.js, React Native, Node.js ', 25);
  const { displayedText: home_skilltext2, animationControls: home_skillanimation2 } = useTypingAnimation('languages: Python, C++, Javascript, CSS, HTML, English, a little Hindi, and barely any Bengali ', 25);
  const { displayedText: home_skilltext3, animationControls: home_skillanimation3 } = useTypingAnimation('dev tools: Git, Docker, Firebase, VS Code, Visual Studio, Agile, Using RESTful APIs ', 25);


  // const { displayedText: home_subtext2, animationControls: home_subanimation2 } = useTypingAnimation('That was part of the bargain. " ', 65);
  // const { displayedText: home_subtext3, animationControls: home_subanimation3 } = useTypingAnimation('    - Donald Knuth', 65);


  const controls = useFadeInScaleAnimation();

  

  return (
    <div>
        <Container>
    <MenuComponent></MenuComponent>
    {/* center */}
   
    </Container>
   
    <Container textAlign='left'>
    {/* <h1 class = "Kanit regularweight big"> Pyush Sinha </h1> */}
    <motion.h1
      className="Kanit regularweight big"
      style={{ opacity: 0, marginTop: '7.5rem',}}  // inline style to set initial opacity
      animate={controls}
    >
      pyush sinha
    </motion.h1>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:2.5, delay: 1, type: "spring"}}> 
  </motion.div>
    </Container>

    <Container textAlign='space'>
      <div style={{ display: 'flex', justifyContent: 'left' }}>
      <motion.div
        whileHover={{ scale: 1.5 }}
        className="grow-image"
      >
        <Image
          src={github}
          href="https://github.com/psinha40898" target="_blank"
          avatar
          circular
          bordered
          style={{ margin: '0' }} // Remove any margin
        />
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.5 }}
        className="grow-image"
      >
        <Image
          src={linkedin}
          href="https://www.linkedin.com/in/pyushs/" target="_blank"
          avatar
          circular
          bordered
          style={{ margin: '0' }} // Remove any margin
        />
          </motion.div>
      </div>
    </Container>

    <Container textAlign='justified space'>
   
    
    {/* <motion.p
      className="Kanit"
      animate={home_subanimation}
    >
      {home_subtext}
    </motion.p> */}
 

 
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration:2.5, delay: 5, type: "spring"}}
  >
    <Image
      src='https://i.imgur.com/qv42Rqz.jpeg'
      size='small'
      floated='left'
      circular
      bordered
    />
  </motion.div>
    {/* <Image src='https://i.imgur.com/qv42Rqz.jpeg' size='small' floated = 'left' circular bordered />  */}

 
  

  <motion.header
      className="Kanit"
      animate={SE_subanimation1}
    >
      {SE_subtext1}
    </motion.header>
    
  <motion.p  className = "Kanit regularweight space" initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{duration:2.5, delay: 5, type: "spring"}} >
I am eager to use strong software engieering principles in order to contribute to the creation of robust products, while also engaging in a continual process of growing all of my skills. I love being a strong teammate to others; whether that's offering guidance to new members, contributing to a fun and comfortable work environment, or simply being a reliable component in a robust system. As a recent graduate, I'm eager to learn whatever technologies are required by my team.
 </motion.p>
 <motion.p
      className="Kanit tiny space"
      animate={home_skillanimation}
    >
      {home_skilltext1}
    </motion.p>
    <motion.p
      className="Kanit tiny space"
      animate={home_skillanimation2}
    >
      {home_skilltext2}
    </motion.p>
    <motion.p
      className="Kanit tiny space"
      animate={home_skillanimation3}
    >
      {home_skilltext3}
    </motion.p>
    <motion.p
      className="Kanit tiny space"
      animate={home_subanimation1}
    >
      {home_subtext1}
    </motion.p>
    </Container>
    <Container className='space'>
    <motion.header
      className="Kanit notbig space"
      animate={home_projectanimation1}
    >
      {home_projecttext1}
    </motion.header>
    <motion.header className='Kanit space reallynotbig heavyweight'>Jiltd</motion.header>
    <motion.header className = 'Kanit space tiny'>social network that focuses on users' internal characteristics and deviates from material obsession</motion.header>
    <motion.header className = 'Kanit  tiny'>early development</motion.header>
    
    <motion.p className='Kanit space'> <ul>
      
      <li>
      stack: Jiltd is built with React Native and a Firebase backend.
      </li>
      <li>
      caveat: Expo GO being used in development means that a port to Firebase's React Native web SDK may be inevitable; dev time vs performance.
      </li>
      <li>
      motivation: React native in combination with Expo and Firebase offers a way for a unified codebase with functional backend to serve IOS, Android, and the web. 
      <br></br>Firebase abstracts away technicalities of constructing a robust backend.
      </li>
      <li>
      mission: To connect users to a social network that focuses inward as well as priortizes and incentivizes healthy relationships between people and with social media
      </li>
      
      </ul></motion.p>
      <motion.p className='Kanit space'> The absolute goal is to develop a scaleable social network application that runs on all platforms.
      I am always eager and willing to discuss the technical details of this project with anybody who is interested. 
      I expect to have a live demo avaliable in the coming weeks that should better articulate the project's purpose and functionalities.
      There are also user focused goals related to this project that are beyond expanding my technical set. It's all about learning how to create
      applications that scale and perform well while also filling voids in the current landscape of a market. Also, it's helping me hone my skills with React/React Native.
      
      </motion.p>
      <motion.header className='Kanit space reallynotbig heavyweight'>Bandwagoner</motion.header>
    <motion.header className = 'Kanit space tiny'>web application to help people win arguments on the internet</motion.header>
    <motion.header className = 'Kanit  tiny' > "completed" but  being updated</motion.header>

    <motion.header className = 'Kanit  tiny '>
    <a href="https://github.com/psinha40898/BandWagoner" target="_blank">readme and codebase</a>
    
    </motion.header>

    
    <motion.p className='Kanit space'> <ul>
     
      <li>
      stack:  Bandwagoner is built with Python using flask -- adheres to  the model view controller paradigm 
      </li>
      <li>
    caveat: The recent trend of limitations on API calls to popular social networks makes the scaleability of this web application super interesting
      </li>
      <li>
      motivation: Python is the best choice to interact with the plethora of machine learning and neural network libraries that are built with it. 
      <br></br>
      Also, the performance of the Python runtime environment is negligble in the scope of this project.
      </li>
      <li>
     mission: To explore the possiblities for AI to enhance things we already do; using sentiment analysis to find hypocrisy is just a way to enhance people's ability to identify contradictions.
      </li>
      <li>
      in progress: implement well defined and smooth transitions between APIs and contemplate scaleability with API calls
      </li>
    
      </ul></motion.p>
      <motion.p className='Kanit space'> This project was my introduction to programming usable software. It offers a concept that can be re-engineered in a more performant and scaleable way.
      Most importantly, it incorperates neural networks to supplement user goals.
      
      </motion.p>



    </Container>
  </div>
  );
}

export default Home;