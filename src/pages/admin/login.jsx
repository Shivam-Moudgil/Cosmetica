import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Image, HStack, VStack, Box } from '@chakra-ui/react'
import AdminLoginForm from '../../../components/admin/login/Admin.loginForm'
import AdminLoginNav from '../../../components/admin/login/Admin.loginNav'
import axios from 'axios'

const userLogin = async (url, data) => {
  return await axios.post(url, data)
}

const AdminLogin = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const updateFormInuput = (newData) => {
    setLoading(true)
    userLogin('/api/admin/login', newData)
      .then((res) => {
        if (res.status == 200) {
          router.push('/admin')
          setLoading(false)
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }

  return (
    <HStack spacing={0} w="full" justify={'center'}>
      <Box
        position="absolute"
        top="2%"
        left={{ base: '0', lg: '17%' }}
        right={{ base: '0', lg: '17%' }}
      >
        <AdminLoginNav />
      </Box>
      <HStack
        w="50%"
        h="100vh"
        display={{ base: 'none', lg: 'flex' }}
        objectFit="contain"
      >
        <Image
          src="/admin_images/Colorlogowithbackground.svg"
          w="full"
          h="full"
        />
      </HStack>
      <VStack w={{ base: 'full', lg: '50%' }}>
        <AdminLoginForm loading={loading} updateFormInuput={updateFormInuput} />
      </VStack>
    </HStack>
  )
}

export default AdminLogin

AdminLogin.getLayout = function PageLayout(page) {
  return <>{page}</>
}

AdminLogin.getInitialProps = async (ctx) => {
  const cookie = ctx.req?.headers?.cookie
  if (!ctx.req) {
    // Router.replace('/admin')
    return {}
  }
  // if (cookie && ctx.req) {
  //   ctx.res?.writeHead(302, {
  //     Location: '/admin',
  //   })
  //   ctx.res?.end()
  //   return {}
  // }
  return {
    props: {},
  }
}
