"use client";
import React,{useState} from "react";
import { Box, Text, Grid, GridItem, Button,chakra,shouldForwardProp } from "@chakra-ui/react";
import { BiSolidUser } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { motion, isValidMotionProp } from 'framer-motion';
import Image from "next/image";
const Index = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    }
  };

  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


  const [animationKey, setAnimationKey] = useState(0);

  const handleAnimationComplete = () => {
    // Animasyon tamamlandığında state'i güncelleyerek animasyonu tekrar başlat
    setAnimationKey((prevKey) => prevKey + 1);
  };
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      overflowX={"hidden"}
      pt={{ base: "30px", md: "113px" }}
      id="home"
    >
      <Grid
        gap={{ base: "90px", md: "100px" }}
        templateColumns="repeat(2, 1fr)"
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <GridItem
          h="auto"
          w="full"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          maxW={{ md: "28vw" }}
          px={{ base: "14%", md: 0 }}
          
        >
          <ChakraBox
           key={animationKey}
           initial={{ x: "-40%" }}
           animate={{ x: 0 }}
           exit={{ x: "100%" }}
           transition={{
             duration: 1,
             ease: "easeInOut",
           }}
          >
          <Text
            fontSize={"32px"}
            fontStyle={"normal"}
            fontWeight={600}
            alignSelf={"self-start"}
            lineHeight={"normal"}
            color={"white"}
          >
            Hello, I am
          </Text>
          <Text
            fontSize={"52px"}
            fontStyle={"normal"}
            fontWeight={600}
            lineHeight={"normal"}
            color={"white"}
            alignSelf={"self-start"}
          >
            Melih Kaan Arac
          </Text>
          <Text
            fontSize={"18px"}
            fontStyle={"normal"}
            fontWeight={500}
            lineHeight={"normal"}
            color={"white"}
          >
            I am a full stack developer. I create seamless web experiences for
            end-users.
          </Text>

          <Box gap={"32px"} mt={{ base: "30px" }} display={"flex"} w={"100%"}>
            <Button
              display={"inline-flex"}
              py={"12px"}
              px={{ base: "15px", md: "25px" }}
              bgColor={"#7562E0"}
              _hover={{ transform: "scale(1.15)" }}
              color={"white"}
              gap={"6px"}
              fontSize={"16px"}
              fontWeight={600}
              lineHeight={"normal"}
              fontStyle={"normal"}
              onClick={() => scrollToSection(`aboutme`)}
            >
              About me <BiSolidUser size={20} />{" "}
            </Button>

            <Button
              display={"inline-flex"}
              border={"2px"}
              borderColor={"#7562E0"}
              _hover={{ transform: "scale(1.15)" }}
              py={"12px"}
              px={{ base: "24px", md: "34px" }}
              bgColor={"#1A1A29"}
              color={"white"}
              gap={"6px"}
              fontSize={"16px"}
              fontWeight={600}
              lineHeight={"normal"}
              fontStyle={"normal"}
              onClick={() => scrollToSection(`projects`)}
            >
              Projects <BsEyeFill size={20} />{" "}
            </Button>
          </Box>
          </ChakraBox>
        </GridItem>
        <GridItem
          position={"relative"}
          display={"flex"}
          alignItems={"end"}
          justifyContent={"center"}
          h="auto"
          w={"100%"}
          
        >
            <ChakraBox
           key={animationKey}
           initial={{ x: "40%" }}
           animate={{ x: 0 }}
           exit={{ x: "100%" }}
           transition={{
             duration: 1,
             ease: "easeInOut",
           }}
          >
          <Box
            display={"flex"}
            position={"relative"}
            h={{ base: "350px", md: "425px" }}
            w={{ base: "300px", sm: "200px", md: "425px" }}
            mb={20}
            
          >
            <Image src={"/melihP.png"} alt="Picture of the author" fill />
          </Box>
          </ChakraBox>
          {/* <Box
          display={"flex"}
            position={"absolute"}
            h={{ base: "350px", md: "475px" }}
            w={{ base: "300px", sm: "200px", md: "475px" }}
            mb={20}
          >
            <Image src={"/profile.png"} fill alt="profile" />
          </Box> */}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Index;