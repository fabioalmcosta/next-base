import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Menu from './menu';

const Component = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer size={'xs'} placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Fábio Almeida Costa</DrawerHeader>
            <DrawerBody p={0}>
              <Menu />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default Component;