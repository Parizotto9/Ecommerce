import { Flex, Center, Container, Box, Text, Divider } from "@chakra-ui/react";
import Itens from "./Items";
import Checkout from "./Checkout";

export default function Cart() {
  return (
    <Flex justifyContent="center" mt="20">
      <Box mr={4}>
        <Flex justifyContent="space-between" ml="40" mr="6">
          <Text as="b">Product Details</Text>
          <Text as="b" ml="4">
            QTY
          </Text>
          <Text as="b" mr="2">
            Total
          </Text>
        </Flex>
        <Divider borderBottom="" mb={4} />
        <Itens />
        <Itens />
      </Box>
      <Box>
        <Checkout />
      </Box>
    </Flex>
  );
}
