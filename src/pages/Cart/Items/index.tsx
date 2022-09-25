import { useState, useEffect } from "react";
import style from "./Itens.module.scss";
import {
  IconButton,
  Text,
  Center,
  Box,
  Flex,
  Image,
  ButtonGroup,
  useFocusEffect,
} from "@chakra-ui/react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
interface Props {
  product: Item;
  getValues: React.Dispatch<React.SetStateAction<number>>;
  setTotal: any;
}
type Item = {
  name: string;
  img: string;
  qty: number;
  price: number;
};

export default function Itens({ product, getValues, setTotal }: Props) {
  const { name, img, qty, price } = product;
  // let [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  const [setTot, total] = setTotal;
  useEffect(() => {
    setTot(total + price);
  }, []);

  const value = 20.0;
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      alignItems="center"
      className={style.card}
    >
      <Box className={style.card__img}>
        <Image src={img} alt={name} className={style.img} />
      </Box>
      <Box ml="-10" w="190px" className={style.card__desc}>
        <Text fontSize="2xl">{name}</Text>
        <Text color="grey" fontSize="md">
          R$ {price}
        </Text>
      </Box>
      <ButtonGroup
        className={style.card__quantity}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        h={7}
      >
        <IconButton
          variant="outline"
          aria-label="Minus"
          // onClick={() => setQuantity(quantity - 1)}
          onClick={() => getValues(price)}
          icon={<BsDashLg />}
        />
        <Center w="30px" as="span">
          {qty}
        </Center>
        <IconButton
          variant="outline"
          aria-label="Plus"
          // onClick={() => setQuantity(quantity + 1)}
          icon={<BsPlusLg />}
        />
      </ButtonGroup>
      <Center w="100px" as="span">
        R$ {price * qty}
      </Center>
    </Flex>
  );
}
