import Drawer from './drawer';
import {
  useDisclosure,
  Center,
  IconButton,
  Icon,
  Box,
  useColorMode,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { FaBars, FaMoon, FaBell, FaEnvelope, FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box position="fixed" boxShadow="dark-lg" h="3.5em" w="100%" p={2}>
        <IconButton
          onClick={onOpen}
          variant="ghost"
          aria-label="Send email"
          icon={<Icon as={FaBars} />}
        />
        <Box float="right">
          <Center>
            <IconButton
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Send email"
              icon={<Icon as={FaEnvelope} />}
            />
            <IconButton
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Send email"
              icon={<Icon as={FaBell} />}
            />
            <IconButton
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Send email"
              icon={<Icon as={FaMoon} />}
            />
            <Menu>
              <MenuButton as={Button} variant="ghost" rightIcon={<Icon as={FaAngleDown} />}>
                Fábio Costa
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Center>
        </Box>
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Navbar;