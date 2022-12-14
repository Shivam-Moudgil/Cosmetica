import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  AreaChart,
  Area,
} from 'recharts'
import UserCard from '../Admin.userCard'
//dummy data

const UsersBarChart = ({ data, totalUsers, totalActiveUsers }) => {
  return (
    <>
      <Text fontSize={18} fontWeight={600}>
        Daily Sold Items Quantity{' '}
        <Box
          as="span"
          color="red"
          fontWeight={'bold'}
        >{`(${data[0]?.monthName})`}</Box>
      </Text>

      <ResponsiveContainer width={'90%'} aspect={3}>
        <AreaChart
          data={data}
          width={500}
          height={400}
          margin={{ top: 10, right: 10, left: 5, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray={'3 3'} />
          <XAxis
            dataKey={'day'}
            interval={'preserveStartEnd'}
            tickFormatter={(v) => v + ` ${data[0]?.monthName}`}
            tickSize={7}
            fontSize={14}
          />
          <YAxis interval={'preserveStartEnd'} />
          <Tooltip contentStyle={{ borderRadius: '10px' }} />
          <Legend />
          <Area
            type="monotone"
            dataKey="totalQuantity"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
      {/* Users Info */}
      <VStack w="85%" spacing={4}>
        <Text fontSize={18} fontWeight={600}>
          Active customers
        </Text>
        <HStack w="full" justify="center" spacing={10}>
          <UserCard
            title={'customers'}
            totalActiveUsers={totalActiveUsers}
            totalUsers={totalUsers}
          />
        </HStack>
      </VStack>
    </>
  )
}

export default UsersBarChart
