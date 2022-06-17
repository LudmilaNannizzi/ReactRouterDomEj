import { GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      <Link to={`${data.id}`}>
        <GridItem w="250px" p="20px" boxShadow="md" my="15px" borderRadius="lg">
          <Image src={data.image} alt="" borderRadius="full" boxSize="200px" />
          <Heading size="md">{data.name}</Heading>
          <Text>
            Is a {data.species} {data.type}
          </Text>
        </GridItem>
      </Link>
    </>
  );
};
export default Card;
