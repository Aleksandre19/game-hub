import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Box>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
