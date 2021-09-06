import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

import beforeArcImage from '../images/before_architecture_overview.png';
import afterArcImage from '../images/after_architecture_overview.png';
import beforeSchemaImage from '../images/before_schema.png';
import afterSchemaImage from '../images/after_schema.png';
import beforeDataDiscoveryImage from '../images/before_databook.png';
import afterDataDiscoveryImage from '../images/data_discovery.png';

import './Comparison.css';

const Comparison = () => {
  return (
    <Box maxW="6xl" marginX="auto" id="features" pt="40px">
      <Heading mb="20px" padding="10" lineHeight="1.5">
        Everything a data-driven startup need <br />
        <Text as={'span'} color={'green.400'}>
          in one place
        </Text>{' '}
      </Heading>
      <Tabs marginTop="4">
        <TabList
          justifyContent="center"
          flexDir={{
            base: 'column',
            md: 'row',
          }}
        >
          <Tab
            fontSize={{
              base: 'lg',
              md: '2xl',
            }}
            fontWeight="700"
          >
            Architecture Overview
          </Tab>
          <Tab
            fontSize={{
              base: 'lg',
              md: '2xl',
            }}
            fontWeight="700"
          >
            Scalable Database
          </Tab>
          <Tab
            fontSize={{
              base: 'lg',
              md: '2xl',
            }}
            fontWeight="700"
          >
            From Data Discovery to Insights{' '}
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel paddingBottom="0px">
            <Flex
              paddingY="10px"
              width="100%"
              display={{
                base: 'none',
                md: 'flex',
              }}
            >
              <Heading
                flex="1"
                size="lg"
                alignContent={'center'}
                fontSize={{
                  base: 'md',
                  md: '2xl',
                }}
              >
                Before using BlitzScaling
              </Heading>
              <Heading
                flex="1"
                size="lg"
                alignContent={'center'}
                fontSize={{
                  base: 'md',
                  md: '2xl',
                }}
              >
                <b style={{ color: '#48bb78' }}>With BlitzScaling</b>
              </Heading>
            </Flex>
            <Box pb="30px" pt="30px">
              <Container maxWidth="1200px">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={beforeArcImage}
                      srcSet={beforeArcImage}
                      alt="Without Blitzscaling"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={afterArcImage}
                      srcSet={afterArcImage}
                      alt="With blitzscaling"
                    />
                  }
                />
              </Container>
            </Box>
          </TabPanel>
          <TabPanel  paddingBottom="0px">
            <Flex
              paddingY="10px"
              width="100%"
              display={{
                base: 'none',
                md: 'flex',
              }}
            >
              <Heading
                flex="1"
                size="lg"
                alignContent={'center'}
                fontSize={{
                  base: 'md',
                  md: '2xl',
                }}
              >
                Before using BlitzScaling
              </Heading>
              <Heading
                flex="1"
                size="lg"
                alignContent={'center'}
                fontSize={{
                  base: 'md',
                  md: '2xl',
                }}
              >
                <b style={{ color: '#48bb78' }}>With BlitzScaling</b>
              </Heading>
            </Flex>
            <Box pb="30px" pt="30px">
              <Container maxWidth="1200px">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={beforeSchemaImage}
                      srcSet={beforeSchemaImage}
                      alt="Schema upgrade before blitzscaling"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={afterSchemaImage}
                      srcSet={afterSchemaImage}
                      alt="Schema upgrade with blitzScaling"
                    />
                  }
                />
              </Container>
              <Container maxW="1200px" pt="5">
                <Flex
                  marginY="5"
                  flexDir={{
                    base: 'column',
                    md: 'row',
                  }}
                >
                  <Stack flex="1" padding="3" pt="0" pl="10" textAlign="left">
                    <blockquote
                      className="quotation"
                      style={{
                        fontSize: '24px',
                        textIndent: '-0.45em',
                      }}
                    >
                      <i style={{ color: '#48bb78' }}>With BlitzScaling</i>, we
                      provide a fully managed, horizontal scalable, developer
                      friendly MySQL out of the box.
                    </blockquote>
                  </Stack>
                </Flex>
              </Container>
            </Box>
          </TabPanel>
          <TabPanel  paddingBottom="0px">
            <Flex
              paddingY="10px"
              width="100%"
              display={{
                base: 'none',
                md: 'flex',
              }}
            >
              <Heading
                flex="1"
                size="lg"
                alignContent={'center'}
                fontSize={{
                  base: 'md',
                  md: '2xl',
                }}
              >
                Before using BlitzScaling
              </Heading>
              <Heading
                flex="1"
                size="lg"
                alignContent={'center'}
                fontSize={{
                  base: 'md',
                  md: '2xl',
                }}
              >
                <b style={{ color: '#48bb78' }}>With BlitzScaling</b>
              </Heading>
            </Flex>
            <Box pb="30px" pt="30px">
              <Container maxWidth="1200px">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={beforeDataDiscoveryImage}
                      srcSet={beforeDataDiscoveryImage}
                      alt="Data discovery before blitzScaling"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={afterDataDiscoveryImage}
                      srcSet={afterDataDiscoveryImage}
                      alt="Data discovery with blitzscaling"
                    />
                  }
                />
              </Container>
              <Container maxW="1200px" pt="5">
                <Flex
                  marginY="5"
                  flexDir={{
                    base: 'column',
                    md: 'row',
                  }}
                >
                  <Stack flex="1" padding="3" pt="0" pl="10" textAlign="left">
                    <blockquote
                      className="quotation"
                      style={{
                        fontSize: '24px',
                        textIndent: '-0.45em',
                      }}
                    >
                      <i style={{ color: '#48bb78' }}>With BlitzScaling</i>,
                      from data discovery to generate business insights only
                      takes few minutes.
                    </blockquote>
                  </Stack>
                </Flex>
              </Container>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Comparison;
