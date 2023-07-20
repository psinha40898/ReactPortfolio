import React, { useEffect } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../App.css";
function MenuComponent() {
  const [activeItem, setActiveItem] = React.useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      setActiveItem("home");
    } 
    
    else if (path === "/power") {
      setActiveItem("power");
    }

    else if (path.startsWith("/thoughts")) {
      setActiveItem("thoughts");
    }
  }, []);

  return (
   
    <Menu secondary>
      <Menu.Item 
      className = "Kanit forcedLowercase"
        as={Link}
        to="/"
        name="me"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      {/* <Menu.Item
       className = "Kanit forcedLowercase"
        as={Link}
        to="/power"
        name="power"
        active={activeItem === "power"}
        onClick={handleItemClick}
      /> */}

    <Menu.Item
       className = "Kanit forcedLowercase"
        as={Link}
        to="/thoughts"
        name="my thoughts"
        active={activeItem === "thoughts"}
        onClick={handleItemClick}
      />
      
    </Menu>
   
  );
}

export default MenuComponent;