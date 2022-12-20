import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Container,
  Select,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import { Text } from 'recharts'

const FilterSection = ({ updateFilters, filters, router }) => {
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
          <AccordionPanel h="80px" className="scrollbar__hide">
            <Select
              value={filters?.price}
              placeholder="select filter"
              onChange={({ target: { value } }) =>
                updateFilters('price', value)
              }
            >
              <option value="100">Less than ₹100</option>
              <option value="150">Less than ₹150</option>
              <option value="200">Less than ₹200</option>
            </Select>
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
              <Checkbox
                value="2-3"
                onChange={({ target: { value, checked } }) => {
                  updateFilters('avgReview', checked ? value : '')
                }}
              >
                2-3
              </Checkbox>
              <Checkbox
                value="3-4"
                onChange={({ target: { value, checked } }) =>
                  updateFilters('avgReview', checked ? value : '')
                }
              >
                3-4
              </Checkbox>
              <Checkbox
                value="4-5"
                onChange={({ target: { value, checked } }) => {
                  updateFilters('avgReview', checked ? value : '')
                }}
              >
                4+
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  )
}

export default FilterSection
