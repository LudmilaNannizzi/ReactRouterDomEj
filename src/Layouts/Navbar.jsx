import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex>
      <Link to="/">
        <Button>Home</Button>
      </Link>

      <Link to="characters">
        <Button>Characters</Button>
      </Link>

      <Link to="aboutUs">
        <Button>About us</Button>
      </Link>
    </Flex>
  );
};
export default Navbar;
