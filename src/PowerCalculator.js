import React, { useState } from "react";
import TextTransformer from "./transform.js";
import ListAnimationComponent from "./demotransform.js";
import ItemDetails from './ItemDetails.js';
import { Button, Input, Form, Grid } from 'semantic-ui-react'

import "./App.css";


function PowerCalculator() {
  
  const [numObjects, setNumObjects] = useState(0); // numObjects is a var that uses setNumObjects to change the state initial state is 0
  const [numBase, setTextObjects] = useState(0);
  const [objects, setObjects] = useState([]); // objects is a list var that uses setObjects to change the state intial state is an empty list  
  const [middle, setMiddle] = useState([]); // objects is a list var that uses setObjects to change the state intial state is an empty list  
  const [results, setResults] = useState([]); // objects is a list var that uses setObjects to change the state intial state is an empty list  
  const [showObjects, setShowObjects] = useState(false);
  const [baseButtonUsed, setBaseButtonUsed] = useState(false);
  //test
  const [baseInput, setBaseInput] = useState("");
  const [exponentInput, setExponentInput] = useState("");
  
  const extractTextAndParseInt = (element) =>
  {
    const textContent = element.props.children;
    return parseInt(textContent[0], 10);
  }

  const setPower = (e) => {
    const value = parseInt(e.target.value);
    setNumObjects(value);
    setExponentInput(e.target.value);
  };

  const setBase = (e) => {
    setBaseButtonUsed(true);
    const value = parseInt(e.target.value);
    setTextObjects(value);
    setBaseInput(e.target.value);
  };

  

  const renderObjects = () => { //this function is called onClick to render the proper amount of objects
    const objList = [];
    const midList = [];
    const resList = [];
    // console.log(numObjects);
    let indentLevel = 0;
    // console.log(baseButtonUsed);
    let numberofBase = numBase; // Create a local variable to store the correct value

    if (!baseButtonUsed)
    {
      numberofBase = 5;
    }
    let parse = true;
    for (let i = numObjects-1; i > 0 ; i--) {
      const fontSize = i * 8 + 10; // calculate font size based on index
      const style = { fontSize: `${fontSize}px`,  paddingLeft: `${indentLevel * 10}px`}; // create inline style object
      objList.push(<div key={i} style={style}>{numberofBase}* ({numberofBase},{i}) </div>); // make this into a variable {v} for 5
      midList.push(objList[objList.length - 1]);
      resList.push(objList[objList.length - 1]);
      // console.log("middle:" + midList[midList.length - 1].props.children);
      // console.log("objList:" + objList[objList.length -1].props.children);
      // console.log("results:" + resList[resList.length -1].props.children);


      if (parse){
      const firstElement = objList[0];
      const textContent = firstElement.props.children;
      // console.log(textContent[0]);
      const parsedtextContent = parseInt(textContent[0]);
      // console.log("TEST" + parsedtextContent);
      parse = false;
      }

      indentLevel = indentLevel + 2.5;
      if (i === 1)
      {
        // setP(numberofBase);
        indentLevel++;
        const fontSize = i * 4 + 10; // calculate font size based on index
        const style = { fontSize: `${fontSize}px`,  paddingLeft: `${indentLevel * 10}px`}; // create inline style object
        // print 5 =
        objList.push(<div key = {i} style = {style}>{numberofBase}</div>);
      }
    }
// set my lists here
    setObjects(objList); 

    // Get the first element in the array

// Create a new element with updated text content

// const updatedElement = React.cloneElement(firstElement, {}, `${numberofBase} * ${Math.pow(numberofBase, midList.length-1)}`);
// console.log("b4zmiddle:" + midList[midList.length-1].props.children);
// updating the midlist
for(let i = 0; i<midList.length; i++)
{
  const firstElement = midList[i];

  const updatedElement = React.cloneElement(firstElement, {}, numberofBase + " * " + Math.pow(numberofBase, midList.length-i));

// Replace the original element with the updated element in the array
// console.log("b4middle:" + midList[i].props.children);

midList[i] = updatedElement;
// console.log("AFmiddle:" + midList[i].props.children);


}

// updating the result list

for(let i = 0; i<resList.length; i++)
{
  const firstElement = resList[i];

const updatedElement = React.cloneElement(firstElement, {}, numberofBase * Math.pow(numberofBase, resList.length-i));

// Replace the original element with the updated element in the array
// console.log("b4res:" + resList[i].props.children);

resList[i] = updatedElement;
// console.log("AFres:" +  resList[i].props.children);


}
// console.log("DEBUG START:");
// console.log("LENGTH OF OBJLIST:" + objList.length);
// console.log("LENGTH OF MIDLIST:"+ midList.length);


    setMiddle(midList);
    setResults(resList);
    // setShowObjects(true);
    
    setTimeout(() => {
      setObjects(objList);
      // setShowObjects(true);
    }, 0);

  };



// the input parses the user input as an int and changes the state of numObjects
// the button pushes changes the state of objList
return (
  <div>
    <Grid className="center aligned">
  <Form>
    <Form.Group>
    <Form.Input placeholder="Base" value={baseInput} onChange={setBase} />
    <Form.Input placeholder="Exponent" value={exponentInput} onChange={setPower} />
      
   </Form.Group>
   <Form.Group>
   <Form.Button basic onClick={renderObjects}>start!</Form.Button> 
   </Form.Group>
  </Form>
  </Grid>

<br></br>
    {showObjects && (
      <div className="objects-container">
        {objects.map((el, index) => (
          // This fades one at a time
          <div key={index} className="fade-in-only" style={{ animationDelay: `${index * 0.5}s` }}> 
            {el}
          </div>
        ))}
      </div>
    )}
    <br></br>
    {showObjects && (
      <button onClick={() => {
        setShowObjects(false);
        setNumObjects(0);
        setObjects([]);
        setBaseInput("");
        setExponentInput("");
      }}>Reset</button>
    )}






<TextTransformer textList={objects} middleList={middle} resultsList={results} />
    
  </div>
  
);
}

export default PowerCalculator;