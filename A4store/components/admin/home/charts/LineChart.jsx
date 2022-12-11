import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts'

const data = [
  { name: 'Js', student: 9, fees: 100 },
  { name: 'Jas', student: 19, fees: 90 },
  { name: 'adfs', student: 29, fees: 34 },
  { name: 'fdg', student: 2, fees: 23 },
  { name: 'dfgh', student: 56, fees: 67 },
  { name: 'dfgh', student: 20, fees: 34 },
]

const LineChart1 = ({ lineChartData, lineChartOptions }) => {
  return (
    <ResponsiveContainer width="80%" aspect={3} height={600}>
      <LineChart
        data={data}
        width={500}
        height={400}
        // margin={{ top: 10, right: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray={'3 3'} />
        <XAxis
          dataKey={'name'}
          interval={'preserveStartEnd'}
          tickFormatter={(v) => v + ' programming'}
        />
        <YAxis dataKey={'fees'} interval={'preserveStartEnd'} />
        <Tooltip
          contentStyle={{ backgroundColor: 'yellow' }}
          itemStyle={{ color: 'black' }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey={'student'}
          stroke="red"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey={'fees'}
          stroke="green"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChart1
