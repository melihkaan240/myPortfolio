import React from "react";
import {
  Box,
  Text,
  GridItem,
  Grid,
  Flex,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { Barcode, Chainlink, Code, Data } from "iconsax-react";
const index = () => {
  return (
    <Box
      width={"100%"}
      height={"auto"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box px={{sm:"14%",md:"18%"}}>
          <Text
        display={"flex"}
        w={"100%"}
        justifyContent={"center"}
        fontSize={"32px"}
        fontStyle={"normal"}
        fontWeight={600}
        lineHeight={"normal"}
        color={"#7562E0"}
        mt={{ base: "45px", md: "80px" }}
      >
        About Me
      </Text>
      <Text
        display={"flex"}
        w={"100%"}
        justifyContent={"center"}
        fontSize={"18px"}
        fontStyle={"normal"}
        fontWeight={500}
        lineHeight={"32px"}
        color={"white"}
      >
      Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I jhave honed my skills in Web Development and advance i have core understanding of advance UI design principles. 
Here are the major skiills i have. 
      </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        mt={{ base: "25px", md: "45px" }}
        spacing={7}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"end"}
          bgColor={"#7562E0"}
          height={{ base: "20vh", md: "28vh" }}
          width={{ base: "35vw", md: "15vw" }}
          p={"24px"}
        >
          <Code size={40} color="white" />
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            FRONT-END
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            DEVELOPMENT
          </Text>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"end"}
          bgColor={"#BDBDBD"}
          _hover={{ bg: "#7562E0" }}
          height={{ base: "20vh", md: "28vh" }}
          width={{ base: "35vw", md: "15vw" }}
          p={"24px"}
        >
          <Barcode size={40} color="white" />
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            BACK-END
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            DEVELOPMENT
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"end"}
          bgColor={"#BDBDBD"}
          _hover={{ bg: "#7562E0" }}
          height={{ base: "20vh", md: "28vh" }}
          width={{ base: "35vw", md: "15vw" }}
          p={"24px"}
        >
          <Data size={40} color="white" />
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            SQL & NOSQL
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            DATABASE
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"end"}
          bgColor={"#BDBDBD"}
          _hover={{ bg: "#7562E0" }}
          height={{ base: "20vh", md: "28vh" }}
          width={{ base: "35vw", md: "15vw" }}
          p={"24px"}
        >
          <Chainlink size={40} color="white" />
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            WEB3.0
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            DEVELOPMENT
          </Text>
        </Box>
      </SimpleGrid>

      <Text
        display={"flex"}
        justifyContent={"center"}
        fontSize={"32px"}
        fontStyle={"normal"}
        fontWeight={600}
        lineHeight={"normal"}
        color={"#7562E0"}
        mt={{ base: "45px", md: "80px" }}
      >
        The services i offer
      </Text>
      <SimpleGrid
        columns={{ base: 2, md: 3 }}
        mt={{ base: "25px", md: "32px" }}
        spacing={10}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          bgColor={"#1A1A29"}
          borderRadius={"16px"}
          border="3px solid #7562E0"
          height={{ base: "20vh", md: "35vh" }}
          width={{ base: "35vw", md: "20vw" }}
          p={"24px"}
        >
          <Code size={40} color="white" />
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            FRONT-END
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            DEVELOPMENT
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          bgColor={"#1A1A29"}
          borderRadius={"16px"}
          border="3px solid white"
          height={{ base: "20vh", md: "35vh" }}
          width={{ base: "35vw", md: "20vw" }}
          p={"24px"}
        >
          <Code size={40} color="white" />
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            FRONT-END
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            DEVELOPMENT
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          bgColor={"#1A1A29"}
          borderRadius={"16px"}
          border="3px solid #7562E0"
          height={{ base: "20vh", md: "35vh" }}
          width={{ base: "35vw", md: "20vw" }}
          p={"24px"}
        >
          <Code size={40} color="white" />
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            FRONT-END
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            DEVELOPMENT
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          bgColor={"#1A1A29"}
          borderRadius={"16px"}
          border="3px solid white"
          height={{ base: "20vh", md: "35vh" }}
          width={{ base: "35vw", md: "20vw" }}
          p={"24px"}
        >
          <Code size={40} color="white" />
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            FRONT-END
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            DEVELOPMENT
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          bgColor={"#1A1A29"}
          borderRadius={"16px"}
          border="3px solid #7562E0"
          height={{ base: "20vh", md: "35vh" }}
          width={{ base: "35vw", md: "20vw" }}
          p={"24px"}
        >
          <Code size={40} color="white" />
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            FRONT-END
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            DEVELOPMENT
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          bgColor={"#1A1A29"}
          borderRadius={"16px"}
          border="3px solid white"
          height={{ base: "20vh", md: "35vh" }}
          width={{ base: "35vw", md: "20vw" }}
          p={"24px"}
        >
          <Code size={40} color="white" />
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            FRONT-END
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            DEVELOPMENT
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default index;
