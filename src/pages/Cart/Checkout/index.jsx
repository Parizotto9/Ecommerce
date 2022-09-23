import {
  Box,
  Text,
  Button,
  Center,
  Spacer,
  Flex,
  Divider,
} from "@chakra-ui/react";

export default function Checkout() {
  return (
    <Box
      bg="gray.200"
      justifyContent="center"
      p="8"
      borderRadius="xl"
      w="300px"
    >
      <Text as="b" fontSize="2xl">
        Order Summary
      </Text>
      <Flex mt="4">
        <Text fontSize="md">Sub-total</Text>
        <Spacer />
        <Text>R$ 20</Text>
      </Flex>
      <Flex>
        <Text fontSize="md">Shipping</Text>
        <Spacer />
        <Text>R$ 20</Text>
      </Flex>
      <Divider borderColor="white" my="4" />
      <Flex mb="2">
        <Text fontSize="md">Total</Text>
        <Spacer />
        <Text>R$ 20</Text>
      </Flex>
      <Center>
        <Button width="100%" colorScheme="cyan" color="white">
          Checkout
        </Button>
      </Center>
    </Box>
  );
}
