
import { useState } from 'react';
import { Link, List, ListItem, Icon, Center } from "@chakra-ui/react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Submenu from './submenus/submenu';


const Menu = () => {
  const [subMenu, setSubMenu] = useState(false);

  return (
    <>
      <List pl='1.5em' pr='1.5em'>
        <Link href='dashboard' style={{ textDecoration: 'none' }}>
          <ListItem textDecoration='none' margin='0.5em' display='flex' alignItems='center' justifyContent='space-between'>
            Dashboard  <Icon as={FaAngleRight} />
          </ListItem>
        </Link>
        <Link href='login' style={{ textDecoration: 'none' }}>
          <ListItem margin='0.5em' display='flex' alignItems='center' justifyContent='space-between'>
            Form  <Icon as={FaAngleRight} />
          </ListItem>
        </Link>
        <Link href='dashboard' style={{ textDecoration: 'none' }}>
          <ListItem margin='0.5em' display='flex' alignItems='center' justifyContent='space-between'>
            Table Grid  <Icon as={FaAngleRight} />
          </ListItem>
        </Link>
        <Link onClick={() => setSubMenu(!subMenu)} style={{ textDecoration: 'none' }}>
          <ListItem margin='0.5em' display='flex' alignItems='center' justifyContent='space-between'>
            Submenu  <Icon as={!subMenu ? FaAngleRight : FaAngleDown} />
          </ListItem>
        </Link>
        {subMenu && <Submenu />}
      </List>
    </>
  );
}

export default Menu;