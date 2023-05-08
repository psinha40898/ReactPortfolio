import React from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function MenuComponent() {
  const [activeItem, setActiveItem] = React.useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

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
      
      {/* <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          onClick={handleItemClick}
        />
      </Menu.Menu> */}
    </Menu>
  );
}

export default MenuComponent;