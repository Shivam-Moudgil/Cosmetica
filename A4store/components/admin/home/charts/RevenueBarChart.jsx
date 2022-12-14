import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts'
//dummy data

const RevenueBarChart = ({ data }) => {
  return (
    <>
      <Text fontSize={18} fontWeight={600}>
        Daily Sale Revenue{' '}
        <Box
          as="span"
          color="red"
          fontWeight={'bold'}
        >{`(${data[0].monthName})`}</Box>
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
            dataKey={'day'}
            // interval={'preserveStartEnd'}
            tickFormatter={(v) => v + ` ${data[0].monthName}`}
            tickSize={7}
            fontSize={14}
          />
          <YAxis interval={'preserveStartEnd'} />
          <Tooltip
            contentStyle={{ borderRadius: '10px' }}
            // itemStyle={{ color: 'red' }}
          />
          <Legend />
          <Bar
            type="monotone"
            dataKey="revenue"
            stroke="#cc6a14"
            fillOpacity={1}
            fill="#cc6a14"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default RevenueBarChart
