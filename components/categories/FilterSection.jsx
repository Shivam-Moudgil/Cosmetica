import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Container,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import { Text } from 'recharts'

const FilterSection = () => {
  return (
    <Container maxW="23%" display={{ base: 'none', md: 'block' }}>
      <Box>
        <Text fontFamily="lato, sans-serif" fontWeight="700" py={3}>
          Refine
        </Text>
      </Box>

      <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
        <AccordionItem py={4} borderBottom="1px solid #ccc">
          <h2>
            <AccordionButton p={0}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontFamily="lato, sans-serif"
                fontWeight="700"
              >
                Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel h="150" className="scrollbar__hide">
            <Stack spacing={1}>
              <Checkbox value={{ min: 0, max: 1000 }}>
                <Text fontSize={'15'}>Less than ₹1000</Text>
              </Checkbox>
              <Checkbox value={{ min: 1000, max: 2000 }}>
                <Text fontSize={'15'}>₹1000 - ₹2000</Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize={'15'}>₹2000 - ₹3000</Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize={'15'}>₹3000 - ₹4000</Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize={'15'}>Above ₹4000</Text>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem py={4} borderBottom="1px solid #ccc">
          <h2>
            <AccordionButton p={0}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontFamily="lato, sans-serif"
                fontWeight="700"
              >
                Savings
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel h="100" className="scrollbar__hide">
            <Stack spacing={1}>
              <Checkbox>
                <Text fontSize={'15'}>Up tp 25%</Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize={'15'}>25% - 50%</Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize={'15'}>50% - 75%</Text>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem py={4} borderBottom="1px solid #ccc">
          <h2>
            <AccordionButton p={0}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontFamily="lato, sans-serif"
                fontWeight="700"
              >
                Average Reviews
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel h="100" className="scrollbar__hide">
            <Stack spacing={1}>
              <Checkbox>
                <Text fontSize={'15'}>2-3</Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize={'15'}>3-4</Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize={'15'}>4+</Text>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  )
}

export default FilterSection
