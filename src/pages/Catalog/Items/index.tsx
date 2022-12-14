import {
  Flex,
  Box,
  Text,
  Badge,
  Image,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { BsPlusLg } from "react-icons/bs";
import style from "./Itens.module.scss";

export default function Catalog() {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      h="323px"
    >
      <Image
        boxSize="200px"
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <Box p={2} className={style.box}>
        <Tooltip label="Add to Cart" bg="gray.200" color="green">
          <IconButton
            borderRadius="full"
            size="sm"
            colorScheme="secondary"
            aria-label="Add to Cart"
            className={style.button}
            icon={<BsPlusLg />}
          />
        </Tooltip>
        <Badge colorScheme="green" fontSize="8" mr={2}>
          Free Shipping
        </Badge>
        <Badge colorScheme="red" fontSize="8">
          Sale
        </Badge>
        <Text fontSize="lg">Camisa Simples</Text>
        <Text as="b" fontSize="md">
          R$ 20,00
        </Text>
        <Text color="gray" fontSize="10">
          35 Sold
        </Text>
        <Text color="gray" fontSize="10">
          + Shipping: R$ 5,00
        </Text>
      </Box>
    </Box>
  );
}
