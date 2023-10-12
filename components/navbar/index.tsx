'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const Links = [
  { name: 'Home', id: 'home' },
  { name: 'About me', id: 'aboutme' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
]

const NavLink = (props: any) => {
  const { children } = props
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <Box
      as='a'
      px={2}
      py={1}
      rounded={'md'}
      color={'white'}
      cursor={'pointer'}
      _hover={{
        textDecoration: 'none',
        color: '#7562E0',
        bg: 'gray.600'
      }}
      onClick={() => scrollToSection(`${children.id}`)}
    >
      {children.name}
    </Box>
  )
}

export default function Simple () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: 'smooth' })
    }
  }
  return (
    <>
      <Box bg='#181824' px={{ base: '0px', md: '160px' }} w={'full'}>
        <Flex
          h={16}
          alignItems={'center'}
          px={5}
          gap={36}
          justifyContent={'space-between'}
        >
          <IconButton
            size={'md'}
            bgColor={'#7562E0'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            w={'full'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box
              onClick={() => scrollToSection(`home`)}
              cursor={'pointer'}
              style={{
                color: '#7562E0',
                fontSize: '28px',
                fontWeight: '600px',
                fontStyle: 'normal',
                lineHeight: 'normal'
              }}
            >
              MelihKaan.
            </Box>
            <HStack as={'nav'} gap={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, i) => (
                <NavLink key={i}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, i) => (
                <NavLink key={i}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
