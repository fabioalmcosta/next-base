
import { useState } from 'react';
import { Link, List, ListItem, Icon } from "@chakra-ui/react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Submenu from './submenu';


const Menu = () => {
  const [subMenu, setSubMenu] = useState(false);

  return (
    <>
      <List ml='1em'>
        <Link href='dashboard' style={{ textDecoration: 'none' }}>
          <ListItem textDecoration='none' margin='0.5em' display='flex' alignItems='center' justifyContent='space-between'>
            Submenu 1  <Icon as={FaAngleRight} />
          </ListItem>
        </Link>
        <Link href='login' style={{ textDecoration: 'none' }}>
          <ListItem margin='0.5em' display='flex' alignItems='center' justifyContent='space-between'>
            Submenu 2  <Icon as={FaAngleRight} />
          </ListItem>
        </Link>
        <Link href='dashboard' style={{ textDecoration: 'none' }}>
          <ListItem margin='0.5em' display='flex' alignItems='center' justifyContent='space-between'>
            Submenu 3  <Icon as={FaAngleRight} />
          </ListItem>
        </Link>
        <Link onClick={() => setSubMenu(!subMenu)} style={{ textDecoration: 'none' }}>
          <ListItem margin='0.5em' display='flex' alignItems='center' justifyContent='space-between'>
            Submenu 4  <Icon as={!subMenu ? FaAngleRight : FaAngleDown} />
          </ListItem>
        </Link>
        {subMenu && <Submenu />}
      </List>
    </>
  );
}

export default Menu;