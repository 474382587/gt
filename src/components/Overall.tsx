import { Image } from '@chakra-ui/image';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout';

const Overall = () => {
  return (
    <>
      <Box w="100%" bgColor="#000" py="24" px={{ md: 6, lg: 12 }}>
        <Box maxW="6xl" marginX="auto">
          <Container>
            <Heading color="#fff" mb="10" fontSize="5xl" fontStyle="italic">
              Before
            </Heading>
          </Container>
          <Flex
            flexDir={{
              sm: 'column',
              md: 'row',
            }}
          >
            <Container
              maxW={{
                base: '90%',
                md: '50%',
              }}
              pb={{
                base: '30px',
                md: '0',
              }}
            >
              <Image src="https://picsum.photos/1200/800?grayscale" />
            </Container>
            <Container
              maxW={{
                base: '90%',
                md: '50%',
              }}
              color="#fff"
              textAlign="left"
            >
              <Heading fontSize="lg" mb="5">
                All troubles?
              </Heading>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores quia atque deserunt obcaecati quibusdam dicta{' '}
              </Text>
              <Text>
                dolor laudantium iusto iste eaque. Explicabo tenetur incidunt
                beatae modi, corporis consectetur ullam. Nesciunt, doloribus?
              </Text>
            </Container>
          </Flex>
        </Box>
      </Box>
      <Box
        w="100%"
        bgColor="#fff"
        py="24"
        px={{ md: 6, lg: 12 }}
        style={{ marginTop: '0' }}
      >
        <Box maxW="6xl" marginX="auto">
          <Container>
            <Heading color="#333" mb="10" fontSize="5xl" fontStyle="italic">
              After
            </Heading>
          </Container>
          <Flex
            flexDir={{
              sm: 'column',
              md: 'row',
            }}
          >
            <Container
              maxW={{
                base: '90%',
                md: '50%',
              }}
              pb={{
                base: '30px',
                md: '0',
              }}
            >
              <Image src="https://picsum.photos/1200/800?grayscale" />
            </Container>
            <Container
              maxW={{
                base: '90%',
                md: '50%',
              }}
              textAlign="left"
            >
              <Heading fontSize="lg" mb="5">
                All troubles?
              </Heading>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores quia atque deserunt obcaecati quibusdam dicta{' '}
              </Text>
              <Text>
                dolor laudantium iusto iste eaque. Explicabo tenetur incidunt
                beatae modi, corporis consectetur ullam. Nesciunt, doloribus?
              </Text>
            </Container>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Overall;
