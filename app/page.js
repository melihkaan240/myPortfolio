"use client"
import { Box } from '@chakra-ui/react'
import HomeComp from "./components/home/index"
import Aboutme from "./components/aboutme/index"
import Project from "./components/project/index"
import Contact from "./components/contact/index"
import Navbar from "./components/navbar/index"
import Footer from "./components/footer/index"

export default function Home() {
  return (
    <Box bg="#1A1A29" w="100%" h="100vh" overflowY="auto">
      <Box
      position="fixed" top={0} left={0} right={0} zIndex={100}
      >
      <Navbar  />
      </Box>
      <Box bg="#1A1A29" w="100%" h="auto" overflowY="auto" pt="70px">
        {/* pt (padding-top) ile Navbar yüksekliği kadar boşluk bırakıyoruz */}
        <HomeComp />
        <Aboutme />
        <Project />
        <Contact />
        <Footer/>
      </Box>
    </Box>

  )
}
