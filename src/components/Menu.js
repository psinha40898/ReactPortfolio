import React, { useEffect, useState } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function MenuComponent() {
  const [activeItem, setActiveItem] = React.useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      setActiveItem("home");
    } else if (path === "/power") {
      setActiveItem("power");
    }
  }, []);

  return (
    <Menu secondary>
      <Menu.Item 
        as={Link}
        to="/"
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        as={Link}
        to="/power"
        name="power"
        active={activeItem === "power"}
        onClick={handleItemClick}
      />
      
    </Menu>
  );
}

export default MenuComponent;