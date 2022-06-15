import { Box, Heading } from "@chakra-ui/react";

const Card = ({ data }) => {
  return (
    <>
      <Box>
        <Heading>{data.name}</Heading>
        <img src={data.image} alt="" />
      </Box>
    </>
  );
};
export default Card;
