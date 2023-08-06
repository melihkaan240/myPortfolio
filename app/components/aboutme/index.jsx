import React from "react";
import { Box, Text } from "@chakra-ui/react";
const index = () => {
  return (
    <Box
      width={"100%"}
      height={"40vh"}
      display={"flex"}
      px={"14%"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text color={"#7562E0"} fontSize={"32px"} fontStyle={"normal"} fontWeight={600} lineHeight={"normal"}>About me</Text>
      <Text color={"white"}>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I jhave honed my skills in Web Development and advance i have core understanding of advance UI design principles. 
          Here are the major skiills i have. </Text>
    </Box>
  );
};

export default index;
