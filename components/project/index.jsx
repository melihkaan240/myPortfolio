import React from "react";
import { Box, Text, SimpleGrid, Button } from "@chakra-ui/react";
import { Barcode, Chainlink, Code, Data } from "iconsax-react";
import Image from "next/image";
const index = () => {
  const imageStyle = {
    borderRadius: "2%",
    objectFit: "cover",
  };
  const imageStyle2 = {
    borderRadius: "2%",
  };
  const projectArr = [
    {
      img: "/TodoApp.png",
      title: "To-Do List App",
      description: "A website where you can create your to-do list",
      github: "https://github.com/melihkaan240/TODOAPP-WITH-REACT",
      live: "https://todoapp-with-react.vercel.app/",
    },
    {
      img: "/PossApp.png",
      title: "POSS Application",
      description: "A live product sales app for product sales.",
      github: "https://github.com/melihkaan240/FullStack-Poss-App",
      live: "https://poss-app-client326.onrender.com",
    },

    {
      img: "/NFTmarketPlace.png",
      title: "Nft Market Place",
      description:
        "An NFT marketplace for selling,  buying and displaying NFTs",
      github: "https://github.com/Curr-MarketPlace",
      live: "https://curr-marketplace-live.vercel.app/",
    },
  ];
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      id="projects"
    >
      <Box         px={{base:"14%",md:"5%"}}
 w={"full"} >
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
          Featured Project
        </Text>
        <Text
          display={"flex"}
          minW={"100%"}
          h={"auto"}
          justifyContent={"center"}
          fontSize={"18px"}
          fontStyle={"normal"}
          fontWeight={500}
          lineHeight={"32px"}
          color={"white"}
        >
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        mt={{ base: "25px", md: "65px" }}
        spacing={10}
        px={{base:"14%",md:"5%"}}
      >
        {projectArr.map((items, index) => (
          <Box
            p={{ base: "24px", md: "16px" }}
            key={index}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"25px"}
            borderRadius={"8px"}
            bgColor={"#31313F"}
            height={"56vh"}
            width={{ base: "75vw", md: "20vw" }}
          >
            <Box
              display={"flex"}
              width={"full"}
              height={"full"}
              position={"relative"}
              borderRadius={"md"}
              overflow={"hidden"}
            >
              <Image
                style={{ base: imageStyle, md: imageStyle2 }}
                src={items.img}
                alt="Projects"
                fill
              />
            </Box>
            <Box>
              <Text
                display={"flex"}
                alignItems={"start"}
                w={"100%"}
                fontWeight={600}
                fontSize={"24px"}
                lineHeight={"36px"}
                color={"#7562E0"}
              >
                {items.title}
              </Text>
              <Text
                display={"flex"}
                alignItems={"start"}
                w={"100%"}
                fontWeight={500}
                fontSize={"18px"}
                lineHeight={"27px"}
                color={"white"}
              >
                {items.description}
              </Text>
            </Box>
            <Box
              display={"flex"}
              w={"full"}
              justifyContent={"center"}
              flexDirection={{ base: "column", md: "column", lg: "column", xl: "row" }}
              gap={"18px"}
            >
              <Box w={"full"} >
                <a href={items.live} target="_blank">
                  <Button
                    w={"full"}
                    h={{ base: "5vh", md: "6vh" }}
                    fontWeight={600}
                    fontSize={"16px"}
                    _hover={{ transform: "scale(1.1)" }}
                    lineHeight={"24px"}
                    bgColor={"#7562E0"}
                    color={"white"}
                    borderRadius={"8px"}
                    href={items.live}
                  >
                    View Live
                  </Button>
                </a>
              </Box>

              <a href={items.github} target="_blank" rel="noopener noreferrer">
                <Button
                  width={"full"}
                  h={{ base: "5vh", md: "6vh" }}
                  fontWeight={600}
                  fontSize={"16px"}
                  _hover={{ transform: "scale(1.1)" }}
                  lineHeight={"24px"}
                  bgColor={"#31313F"}
                  border={"3px solid #7562E0"}
                  color={"white"}
                  borderRadius={"8px"}
                >
                  Github Repo
                </Button>
              </a>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default index;
