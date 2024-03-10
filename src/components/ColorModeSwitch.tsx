import { Box, Flex, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Box marginLeft={2}>
        <Text whiteSpace="nowrap">Color Mode</Text>
      </Box>
    </Flex>
  );
};

export default ColorModeSwitch;
