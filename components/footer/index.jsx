"use client"
import React from "react";
import {
  Box,
  Text,

} from "@chakra-ui/react";
import {FaSquareTwitter,FaSquareInstagram} from "react-icons/fa6"
import {FaGithubSquare,FaLinkedin} from "react-icons/fa"
import {HiMail} from "react-icons/hi"

const index = () => {
  return (
    <Box
      width={"100%"}
      height={"auto"}
      display={"flex"}
      mt={"10vh"}
      mb={"2vh"}
      px={"14%"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
     <Text fontWeight={500} fontSize={"16px"} lineHeight={"24px"} color={"gray"}>@2023 Melih Kaan Arac</Text>
<Box display={"flex"} flexDirection={"row"} gap={"15px"}>
<a href="https://www.linkedin.com/in/melihkaanarac/" target="_blank">
<FaLinkedin  cursor="pointer"  size="30" color="#7562E0"/>
</a>
    <a href="https://twitter.com/meliiihkaan" target="_blank">
<FaSquareTwitter cursor="pointer"  size="30" color="#7562E0" />
</a>
<a href="https://github.com/melihkaan240" target="_blank">
<FaGithubSquare cursor="pointer"  size="30" color="#7562E0"/>
</a>
<a href="mailto:officialmelihkaan@gmail.com" target="_blank">
<HiMail  cursor="pointer"  size="30" color="#7562E0"/>
</a>
</Box>
    </Box>
  );
};

export default index;
