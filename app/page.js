"use client"
import { Box, Center } from '@chakra-ui/react'
import HomeComp from "./components/home/index"
import Aboutme from "./components/aboutme/index"
import Project from "./components/project/index"
import Contact from "./components/contact/index"
import Navbar from "./components/navbar/index"
import Footer from "./components/footer/index"

export default function Home() {
  return (

    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} bg="#1A1A29" w="100%" h="auto" overflowY="auto">
      <Box
      position="fixed" top={0} left={0} right={0} zIndex={100}
      >
      <Navbar  />
      </Box>
      <Center  w="100%"  h="auto" display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}  overflowY="auto" pt="70px">
        <HomeComp />
        <Aboutme />
        <Project />
        <Contact />
        <Footer/>
      </Center>
    </Box>

  )
}
