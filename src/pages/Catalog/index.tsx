import {
  Flex,
  Box,
  Text,
  CheckboxGroup,
  Checkbox,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Items from "./Items";

export default function Catalog() {
  return (
    <Flex justifyContent="center" mt="20">
      <Box bg="gray.200" w="200px" borderRadius="lg" p={3}>
        <Text fontSize="2xl">Filter</Text>
        <Box bg="gray.100" p={2} borderRadius="lg" borderWidth="1px">
          <Text fontSize="lg" mb="2">
            Gender
          </Text>
          <CheckboxGroup colorScheme="cyan">
            <Stack spacing={[0, 0]} direction={["row", "column"]}>
              <Checkbox value="masc">Masculine</Checkbox>
              <Checkbox value="fem">Feminine</Checkbox>
              <Checkbox value="neutral">Neutral</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
      </Box>

      <Wrap ml="30px" spacing="30px" w="900px">
        <WrapItem>
          <Items />
        </WrapItem>
        <WrapItem>
          <Items />
        </WrapItem>
        <WrapItem>
          <Items />
        </WrapItem>
        <WrapItem>
          <Items />
        </WrapItem>
        <WrapItem>
          <Items />
        </WrapItem>
      </Wrap>
    </Flex>
  );
}
