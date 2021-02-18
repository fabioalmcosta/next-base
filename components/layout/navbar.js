import Drawer from './drawer';
import { useDisclosure, Center, IconButton, Icon, Box, useColorMode, Button } from "@chakra-ui/react";
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
            <Button
              onClick={toggleColorMode}

              rightIcon={<Icon as={FaAngleDown} />}
              variant="ghost">
              Fábio Costa
            </Button>
          </Center>
        </Box>
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Navbar;