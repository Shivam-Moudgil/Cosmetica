import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Bar,
} from 'recharts'
import UserCard from '../Admin.userCard'
//dummy data

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
]

const UsersBarChart = () => {
  return (
    <>
      <Text fontSize={18} fontWeight={600}>
        Users related Statistics
      </Text>

      <ResponsiveContainer width={'90%'} aspect={3}>
        <BarChart
          data={data}
          width={500}
          height={400}
          margin={{ top: 10, right: 10, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray={'3 3'} />
          <XAxis
            dataKey={'name'}
            interval={'preserveStartEnd'}
            // tickFormatter={(v) => v + ' programming'}
          />
          <YAxis interval={'preserveStartEnd'} />
          <Tooltip
            contentStyle={{ backgroundColor: 'yellow' }}
            itemStyle={{ color: 'black' }}
          />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <VStack w="85%" spacing={4}>
        <Text fontSize={18} fontWeight={600}>
          Active Users
        </Text>
        <HStack w="full" justify="center" spacing={10}>
          <UserCard />
          <UserCard />
          <UserCard />
        </HStack>
      </VStack>
    </>
  )
}

export default UsersBarChart
