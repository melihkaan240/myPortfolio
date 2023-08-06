"use client"
import { Box } from '@chakra-ui/react'
import HomeComp from "./components/home/index"
import Aboutme from "./components/aboutme/index"
import Project from "./components/project/index"
import Contact from "./components/contact/index"
import Navbar from "./components/navbar/index"

export default function Home() {
  return (
    
 <Box bg={"#1A1A29"} w={"100%"} h={"auto"}  >
 <Navbar/>

       <HomeComp/>
       <Aboutme/>
       <Project/>
       <Contact/>
    </Box>
  )
}
