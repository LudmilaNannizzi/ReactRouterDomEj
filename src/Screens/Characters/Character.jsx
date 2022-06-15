import { Container, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Character = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      console.log(response);
      setData(response.data.results);
    };
    getInfo();
  }, []);

  return (
    <Container>
      <Flex flexWrap="wrap">
        {data &&
          data.map((result) => {
            return <Card data={result} key={result.id}></Card>;
          })}
      </Flex>
    </Container>
  );
};
export default Character;
