import React from 'react'
import { Box, Button, Input, FormControl, Text } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { sendEmail } from '../../actions/sendEmail'
import toast from 'react-hot-toast'
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      senderName: '',
      senderEmail: '',
      senderMessage: ''
    },
    onSubmit: async values => {
      const { data, error } = await sendEmail(values)
      if (error) {
        toast.error(error)
        return
      }

      toast.success('Email send successfully!')
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display={'flex'} flexDirection={'column'} gap={'36px'} id='contact'>
        <Text
          display={'flex'}
          w={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          fontSize={'32px'}
          fontStyle={'normal'}
          fontWeight={600}
          lineHeight={'normal'}
          color={'#7562E0'}
          mt={{ base: '45px', md: '80px' }}
        >
          Connect With Me
        </Text>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'16px'}
          cursor={'pointer'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <FormControl
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            px={{ base: 0, md: '20%' }}
          >
            <Input
              id='senderName'
              name='senderName'
              value={formik.values.senderName}
              onChange={formik.handleChange}
              maxLength={500}
              isRequired
              placeholder='Name:'
              border={'none'}
              width={'70vw'}
              height={{ base: '6vh', md: '8vh' }}
              opacity={'89%'}
              color={'#F5F5F5'}
              bgColor={'#31313F'}
            />
          </FormControl>
          <FormControl
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            px={{ base: 0, md: '20%' }}
          >
            <Input
              type='email'
              id='senderEmail'
              name='senderEmail'
              value={formik.values.senderEmail}
              onChange={formik.handleChange}
              maxLength={500}
              isRequired
              cursor={'pointer'}
              placeholder='Email:'
              border={'none'}
              width={'70vw'}
              height={{ base: '6vh', md: '8vh' }}
              opacity={'89%'}
              color={'#F5F5F5'}
              bgColor={'#31313F'}
            />
          </FormControl>
          <FormControl
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            px={{ base: 0, md: '20%' }}
          >
            <Input
              id='senderMessage'
              name='senderMessage'
              value={formik.values.senderMessage}
              onChange={formik.handleChange}
              isRequired
              cursor={'pointer'}
              placeholder='Message:'
              border={'none'}
              width={'70vw'}
              height={{ base: '10vh', md: '18vh' }}
              opacity={'89%'}
              color={'#F5F5F5'}
              bgColor={'#31313F'}
            />
          </FormControl>
          <Button
            type='submit'
            px={'66px'}
            py={'15px'}
            _hover={{ transform: 'scale(1.1)' }}
            fontWeight={500}
            fontSize={'16px'}
            lineHeight={'24px'}
            color={'white'}
            bgColor={'#7562E0'}
          >
            Send
          </Button>
        </Box>
      </Box>
    </form>
  )
}

export default Contact
