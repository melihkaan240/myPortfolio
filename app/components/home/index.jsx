"use client";
import React from "react";
import { Box, Text, Grid, GridItem, Button, Center } from "@chakra-ui/react";
import { BiSolidUser } from 'react-icons/bi';
import { BsEyeFill } from 'react-icons/bs';
import Image from "next/image";
const Index = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      overflowX={"hidden"}
      py={{base:"30px",md:"113px"}}
    >
      <Grid
      gap={{base:"90px",md:"160px"}}
        templateColumns="repeat(2, 1fr)"
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <GridItem
          h="auto"
          w="full"
          maxW={{ md: "28vw" }}
          px={{base:"14%",md:0}}
        >
          <Text
            fontSize={"32px"}
            fontStyle={"normal"}
            fontWeight={600}
            lineHeight={"normal"}
            color={"white"}
          >
            Hello, i'm
          </Text>
          <Text
            fontSize={"52px"}
            fontStyle={"normal"}
            fontWeight={600}
            lineHeight={"normal"}
            color={"white"}
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
            Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.
          </Text>

          <Box gap={"32px"} mt={{base:"30px"}} display={"flex"}  w={"100%"}>
          <Button display={"inline-flex"} py={"12px"} px={{base:"15px",md:"25px"}} bgColor={"#7562E0"}
           _hover={{ transform: "scale(1.15)" }}  color={"white"} gap={"6px"} fontSize={"16px"} 
           fontWeight={600} lineHeight={"normal"} fontStyle={"normal"}>About me <BiSolidUser size={20}/> </Button>

          <Button display={"inline-flex"} border={"2px"} borderColor={"#7562E0"} 
           _hover={{ transform: "scale(1.15)" }}  py={"12px"} px={{base:"24px",md:"34px"}} bgColor={"#1A1A29"} color={"white"}
            gap={"6px"} fontSize={"16px"} fontWeight={600} lineHeight={"normal"} 
            fontStyle={"normal"}>Projects <BsEyeFill size={20}/> </Button>
          

          </Box> 
        </GridItem>
        <GridItem
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          
          h="auto"
          w={"100%"}
        >
          <Box display={"flex"}  position={"relative"} h={{base:"300px",md:"366px"}} w={{base:"300px",sm:"200px",md:"486px"}} mb={20}>
          <Image
            src={"/ellipse.png"}
            alt="Picture of the author"
            fill
          />
          </Box>
          <Box position={"absolute"}  h={{base:"350px",md:"444px"}} w={{base:"300px", sm:"200px", md:"444px"}} mb={20}>
            <Image src={"/profile.png"} fill />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Index;
