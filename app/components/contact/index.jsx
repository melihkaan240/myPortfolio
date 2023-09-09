import React from 'react'
import { Box ,Button,Input,Stack,Text} from '@chakra-ui/react'
const index = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"36px"} id='contact' >
       <Text
        display={"flex"}
        w={"100%"}
        px={{base:0,md:"14%"}}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"32px"}
        fontStyle={"normal"}
        fontWeight={600} 
        lineHeight={"normal"}
        color={"#7562E0"} 
        mt={{ base: "45px", md: "80px" }}
      >
        Connect With Me
      </Text>
      <Stack spacing={"16px"} cursor={"pointer"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Input  placeholder='Name:'  border={"none"} width={"70vw"} height={{base:"6vh",md:"8vh"}} opacity={"89%"} color={"#F5F5F5"} bgColor={"#31313F"}/>
      <Input cursor={"pointer"} placeholder='Email:' border={"none"}  width={"70vw"} height={{base:"6vh",md:"8vh"}} opacity={"89%"} color={"#F5F5F5"} bgColor={"#31313F"}/>
      <Input cursor={"pointer"} placeholder='Message:' border={"none"}  width={"70vw"} height={{base:"10vh",md:"12vh"}} opacity={"89%"} color={"#F5F5F5"} bgColor={"#31313F"}/>
  <Button px={"66px"} py={"15px"} _hover={{ transform: "scale(1.1)" }}  fontWeight={500} fontSize={"16px"} lineHeight={"24px"} color={"white"} bgColor={"#7562E0"}>Send</Button>
     </Stack>
    </Box>
  )
}

export default index