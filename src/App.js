import React, { useState } from "react";
import "./App.css";


function App() {
  const [numObjects, setNumObjects] = useState(0); // numObjects is a var that uses setNumObjects to change the state initial state is 0
  const [objects, setObjects] = useState([]); // objects is a list var that uses setObjects to change the state intial state is an empty list  
  const [pValue, setP] = useState("5");
  const [showObjects, setShowObjects] = useState(false);

  const handleInputChange = (e) => { // this function is called onChange to take the input and parse it as an integer
    const value = parseInt(e.target.value);
    setNumObjects(value);
  };

  const renderObjects = () => { //this function is called onClick to render the proper amount of objects
    const objList = [];
    let indentLevel = 0;
    for (let i = numObjects-1; i > 0 ; i--) {
      const fontSize = i * 8 + 10; // calculate font size based on index
      const style = { fontSize: `${fontSize}px`,  paddingLeft: `${indentLevel * 10}px`}; // create inline style object
      objList.push(<div key={i} style={style}>5* (5,{i}) </div>);
      indentLevel = indentLevel + 2.5;
      if (i === 1)
      {
        setP(5);
        indentLevel++;
        const fontSize = i * 4 + 10; // calculate font size based on index
        const style = { fontSize: `${fontSize}px`,  paddingLeft: `${indentLevel * 10}px`}; // create inline style object
        // print 5 =
        objList.push(<div key = {i} style = {style}>{pValue}   is the base case now plug upwards</div>);
      }
    }

    setObjects(objList); 
    setShowObjects(true);
    
    setTimeout(() => {
      setObjects(objList);
      setShowObjects(true);
    }, 0);

  };
// the input parses the user input as an int and changes the state of numObjects
// the button pushes changes the state of objList
return (
  <div>
<input key={numObjects} type="number" onChange={handleInputChange} />
    <button onClick={renderObjects}>Render Objects</button>
    {showObjects && (
      <div className="objects-container">
        {objects.map((el, index) => (
          <div key={index} className="fade-in-only" style={{ animationDelay: `${index * 0.5}s` }}>
            {el}
          </div>
        ))}
      </div>
    )}
    {showObjects && (
      <button onClick={() => {
        setShowObjects(false);
        setNumObjects(0);
        setObjects([]);
      }}>Reset</button>
    )}
  </div>
);
}

export default App;