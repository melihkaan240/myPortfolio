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
import { Barcode, Chainlink, Code, Data,JavaScript,HierarchySquare3} from "iconsax-react";
const index = () => {
  return (
    <Box
      width={"100%"}
      height={"auto"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      id="aboutme"
    >
      <Box px={{base:"14%",md:"18%"}}>
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
      Hello, my name is Melih Kaan. As a Full Stack Web Developer, I am proficient in front-end, back-end, and SQL skills. Additionally, I have elevated my foundational knowledge in web development to an advanced level. Here are the core skills that I have;
      </Text>
      </Box>

      {/* About me skills */}
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
          _hover={{ bg: "#BDBDBD" }}

          height={{ base: "20vh", md: "28vh" }}
          width={{ base: "35vw", md: "15vw" }}
          p={"16px"}
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
          p={"16px"}
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
          p={"16px"}
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
            size={"16px"}
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
        The Services I Offer
      </Text>
      {/* Servicess skills */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
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
          height={{ base: "40vh", md: "40vh" }}
          width={{ base: "75vw", md: "20vw" }}
          p={"24px"}
        >
         <JavaScript size={40} color="white"/>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            NPM AND NODE.JS

          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
           I have core understanding of NPM. I can also develop general purpose applications with NodeJS
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
          height={{ base: "40vh", md: "40vh" }}
          width={{ base: "75vw", md: "20vw" }}
          p={"24px"}
        >
          <Code size={40} color="white" />
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"#7562E0"}
          >
             WEB DEVELOPMENT
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS
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
          height={{ base: "40vh", md: "40vh" }}
          width={{ base: "75vw", md: "20vw" }}
          p={"24px"}
        >
         <HierarchySquare3 size={40} color="white"/>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
            VERSION CONTROL
          </Text>
          <Text
            size={"24px"}
            fontWeight={600}
            lineHeight={"36px"}
            color={"white"}
          >
           I can use version control systems well, and Github are my go-to tool.
          </Text>
        </Box>
       
        
        
      </SimpleGrid>
    </Box>
  );
};

export default index;
