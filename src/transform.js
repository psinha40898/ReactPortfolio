import React, { useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input, Form, Grid } from 'semantic-ui-react'




const TextTransformer = ({ textList, middleList, resultsList }) => {
    const [text, setText] = useState(textList[0]);
    const [testBool, setBool] = useState(false);
    const [incrementation, setIncrement] = useState(-1);


  
    const changeText = () => {
      if (textList.length === 0 || middleList.length === 0 || resultsList.length === 0) {
        // Don't do anything if any of the lists are empty
        return;
      }
      const currentIndex = textList.indexOf(text);

      const newIncrementation = incrementation + 1;
      // console.log("transform.js debugger: The index" + currentIndex);
      // console.log("transform.js debugger: The top result is " + resultsList[0].props.children);


      // if (currentIndex === 1)
      // {
      //   setText(textList[0])
      //   setBool(false);
      // }
      // else
      // {
      //   setText(textList[1])
      //   setBool(true);
      // }
      console.log(testBool);
      if (newIncrementation === 0)
      {
        setText(textList[0]);
        setIncrement(incrementation+1);
      }
      else if (newIncrementation === 1){
        setText(middleList[0]);
        setIncrement(incrementation+1);


      }
      else if (newIncrementation === 2) {
        setText(resultsList[0]);
        setIncrement(incrementation+1);
        
      }
      else
      {
        setText("");
        setIncrement(-1);
        return;
      }
   
    //   const nextIndex = (currentIndex + 1) % textList.length;
    //   setText(textList[nextIndex]);
    };
    // Call changeText immediately when the component mounts
    useEffect(() => {
      changeText();
  }, [textList, middleList, resultsList]); // Empty dependency array, so this effect only runs once on mount
    useEffect(() => {
      // Start a timer when 'text' changes
      const timer = setTimeout(() => {
        changeText();
      }, 6000); // Adjust this value as needed to control the speed of the loop

      // Cleanup function to clear the timer if the component is unmounted
      return () => clearTimeout(timer);
    }, [text]); // Dependency array. changeText is called every time 'text' changes

 

    const renderElements = (index) => {
      return (

        <AnimatePresence>
          {text === textList[0] && (
            <motion.div
              key="A"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
         
              transition={{
                duration: 0.8,
                delay: 3.5 - ((.55)*index),
                ease: "linear"
              }}
            >
              {textList[index]}
            </motion.div>
          )}
          {text === middleList[0] && (
            <motion.div
              key="B"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
          
              transition={{
         // Added delay to the initial transition
                duration: 0.8,
                delay: 3.5 - ((.55)*index),
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              {middleList[index]}
            </motion.div>
          )}
          {text === resultsList[0] && (
            <motion.div
              key="C"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
         
              transition={{
               // Added delay to the initial transition
                duration: 0.8,
                delay: 3.5 - ((.55)*index),
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              {resultsList[index]}
            </motion.div>
          )}
        </AnimatePresence>
    
      );
    };
  
    return (
      <div>
        {textList.map((_, index) => renderElements(index))}
        {/* <Button onClick={changeText}>next</Button> */}
      </div>
    );
  };
  
  export default TextTransformer;