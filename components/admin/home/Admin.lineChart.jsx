import React from 'react'
import { Box, Card, CardHeader, Flex, Grid, Text } from '@chakra-ui/react'
import {
  lineChartDataDashboard,
  lineChartOptionsDashboard,
} from '../../../assets/chartData'
import LineChart from './charts/LineChart'

const AdminLineChart = () => {
  return (
    <Grid
      templateColumns={{ sm: '1fr', lg: '1.7fr 1.3fr' }}
      maxW={{ sm: '100%', md: '100%' }}
      gap="24px"
      mb="24px"
    >
      {/* Sales Overview */}
      <Card p="28px 0px 0px 0px">
        <CardHeader mb="20px" ps="22px">
          <Flex direction="column" alignSelf="flex-start">
            <Text fontSize="lg" color="#fff" fontWeight="bold" mb="6px">
              Sales Overview
            </Text>
            <Text fontSize="md" fontWeight="medium" color="gray.400">
              <Text as="span" color="green.400" fontWeight="bold">
                (+5%) more
              </Text>{' '}
              in 2021
            </Text>
          </Flex>
        </CardHeader>
        <Box w="100%" minH={{ sm: '300px' }}>
          {/* <LineChart
            lineChartData={lineChartDataDashboard}
            lineChartOptions={lineChartOptionsDashboard}
          /> */}
          <Chart1 />
        </Box>
      </Card>
    </Grid>
  )
}

export default AdminLineChart
