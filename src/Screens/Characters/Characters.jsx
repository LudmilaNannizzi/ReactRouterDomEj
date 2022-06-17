import { useEffect, useState } from "react";

import { Grid, Select } from "@chakra-ui/react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import Card from "./Card";

const Characters = () => {
  const [data, setData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?status=${searchParams.get(
          "status"
        )}`
      );
      console.log(response);
      setData(response.data.results);
    };
    getInfo();
  }, [searchParams]);
  console.log(searchParams.get("status"));
  const handleOnChange = (e) => {
    const params = e.target.value;
    setSearchParams({ status: params });
  };

  return (
    <>
      <Select placeholder="Estado" onChange={handleOnChange} w="400px">
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </Select>
      <Grid templateColumns="repeat(4, 1fr)" mx="auto" w="90%">
        {data &&
          data.map((result) => {
            return <Card data={result} key={result.id}></Card>;
          })}
      </Grid>
    </>
  );
};
export default Characters;
