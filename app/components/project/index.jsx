import React from 'react'
import { Box ,Text,SimpleGrid, Button} from '@chakra-ui/react'
import { Barcode, Chainlink, Code, Data } from "iconsax-react";
import Image from 'next/image';
const index = () => {
  return (
    <Box
    width={"100%"}
    height={"auto"}
    display={"flex"}
    px={"14%"}
    flexDirection={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    >
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
        The services i offer
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
       I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        w={"100%"}
        mt={{ base: "25px", md: "65px" }}
        spacing={10}
      >
       

       
       <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"16px"}
          borderRadius={"8px"}
          bgColor={"#31313F"}
          height={{ base: "45vh", md: "56vh" }}
          width={{ base: "75vw", md: "22vw" }}
          p={"24px"}
        >
          <Image
          src={"/Project.png"}
          width={311}
          height={173}
          />
          <Box>
          <Text display={"flex"} alignItems={"start"} w={"100%"} fontWeight={600} fontSize={"24px"} lineHeight={"36px"} color={"#7562E0"}>TWINDER</Text>
          <Text display={"flex"} alignItems={"start"} w={"100%"} fontWeight={500} fontSize={"18px"} lineHeight={"27px"} color={"white"}>A live Geolocation app for finding tweets and twitter users around you.</Text>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"18px"} >
          <Button px={{base:"28px",md:"35px"}} py={"10px"} fontWeight={600} fontSize={"16px"}  _hover={{ transform: "scale(1.1)"}}
          lineHeight={"24px"} bgColor={"#7562E0"} color={"white"} borderRadius={"8px"} gap={"6px"}>View Live</Button>
          <Button px={{base:"16px",md:"22px"}} py={"10px"} fontWeight={600} fontSize={"16px"}  _hover={{ transform: "scale(1.1)"}}
          lineHeight={"24px"} bgColor={"#31313F"} border={"3px solid #7562E0"} color={"white"} borderRadius={"8px"} gap={"6px"}>Github Repo</Button>
            
        </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"16px"}
          borderRadius={"8px"}
          bgColor={"#31313F"}
          height={{ base: "45vh", md: "56vh" }}
          width={{ base: "75vw", md: "22vw" }}
          p={"24px"}
        >
          <Image
          src={"/Project.png"}
          width={311}
          height={173}
          />
          <Box>
          <Text display={"flex"} alignItems={"start"} w={"100%"} fontWeight={600} fontSize={"24px"} lineHeight={"36px"} color={"#7562E0"}>TWINDER</Text>
          <Text display={"flex"} alignItems={"start"} w={"100%"} fontWeight={500} fontSize={"18px"} lineHeight={"27px"} color={"white"}>A live Geolocation app for finding tweets and twitter users around you.</Text>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"18px"} >
          <Button px={{base:"28px",md:"35px"}} py={"10px"} fontWeight={600} fontSize={"16px"}  _hover={{ transform: "scale(1.1)"}}
          lineHeight={"24px"} bgColor={"#7562E0"} color={"white"} borderRadius={"8px"} gap={"6px"}>View Live</Button>
          <Button px={{base:"16px",md:"22px"}} py={"10px"} fontWeight={600} fontSize={"16px"}  _hover={{ transform: "scale(1.1)"}}
          lineHeight={"24px"} bgColor={"#31313F"} border={"3px solid #7562E0"} color={"white"} borderRadius={"8px"} gap={"6px"}>Github Repo</Button>
            
        </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"16px"}
          borderRadius={"8px"}
          bgColor={"#31313F"}
          height={{ base: "45vh", md: "56vh" }}
          width={{ base: "75vw", md: "22vw" }}
          p={"24px"}
        >
          <Image
          src={"/Project.png"}
          width={311}
          height={173}
          />
          <Box>
          <Text display={"flex"} alignItems={"start"} w={"100%"} fontWeight={600} fontSize={"24px"} lineHeight={"36px"} color={"#7562E0"}>TWINDER</Text>
          <Text display={"flex"} alignItems={"start"} w={"100%"} fontWeight={500} fontSize={"18px"} lineHeight={"27px"} color={"white"}>A live Geolocation app for finding tweets and twitter users around you.</Text>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"18px"} >
          <Button px={{base:"28px",md:"35px"}} py={"10px"} fontWeight={600} fontSize={"16px"}  _hover={{ transform: "scale(1.1)"}}
          lineHeight={"24px"} bgColor={"#7562E0"} color={"white"} borderRadius={"8px"} gap={"6px"}>View Live</Button>
          <Button px={{base:"16px",md:"22px"}} py={"10px"} fontWeight={600} fontSize={"16px"}  _hover={{ transform: "scale(1.1)"}}
          lineHeight={"24px"} bgColor={"#31313F"} border={"3px solid #7562E0"} color={"white"} borderRadius={"8px"} gap={"6px"}>Github Repo</Button>
            
        </Box>
        </Box>
      </SimpleGrid>

    </Box>
  )
}

export default index