import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import Header from "./Header";
import SideBar from "./sidebar";

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <Box minH="100vh" bg="white">
      <SideBar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
        >
        <DrawerContent>
          <SideBar onClose={onClose}> </SideBar>
        </DrawerContent>
      </Drawer>
      <Header onOpen={onOpen}/>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
