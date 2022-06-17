import { Container, Flex, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Character = () => {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${params.id}`
      );
      setData(response.data);
    };
    getInfo();
  }, []);

  return (
    <Container>
      <Flex>
        <Text>{data?.name}</Text>
        <Image src={data?.image} />
      </Flex>
    </Container>
  );
};
export default Character;
