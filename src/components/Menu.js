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
    // Get the route path from window.location.hash, excluding the '#'
    const routePath = window.location.hash.substr(1);

    if (routePath === "/") {
      setActiveItem("home");
    } else if (routePath === "/power") {
      setActiveItem("power");
    } else if (routePath.startsWith("/thoughts")) {
      setActiveItem("thoughts");
    }
  }, []);

  return (
    <Menu secondary>
      <Menu.Item
        className="Kanit forcedLowercase"
        as={Link}
        to="/"
        name="me"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      {/* <Menu.Item
        className="Kanit forcedLowercase"
        as={Link}
        to="/power"
        name="power"
        active={activeItem === "power"}
        onClick={handleItemClick}
      /> */}

      <Menu.Item
        className="Kanit forcedLowercase"
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
