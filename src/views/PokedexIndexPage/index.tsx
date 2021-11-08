import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../common/api/client";
import { Pokedex, PokedexList } from "../../common/api/types";
import * as apiPaths from "../../common/constants/apiPaths";
import { getPokedexPath } from "../../common/utils/path";
import ErrorAlert from "../../components/ErrorAlert";

const PokedexIndexPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pokedexList, setPokedexList] = useState<Pokedex[]>([] as Pokedex[]);

  const getPokedexList = async () => {
    let results = [] as Pokedex[];
    try {
      let result = await client.get<PokedexList>(apiPaths.pokedexList);
      results.push(...result.data.results);
      while (result.data.next) {
        result = await axios.get<PokedexList>(result.data.next);
        results.push(...result.data.results);
      }
      setPokedexList(results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Failed to fetch data.");
    }
  };
  useEffect(() => {
    getPokedexList();
  }, []);

  if (isLoading) {
    return (
      <Flex justify="space-evenly">
        <Spinner />
      </Flex>
    );
  }
  if (error) {
    return <ErrorAlert message={error} />;
  }
  return (
    <div>
      {pokedexList.map((item) => {
        console.log(item.name);
        return (
          <Stack direction="column" key={item.name}>
            <Link to={getPokedexPath(item.name)}>
              <Text>{item.name}</Text>
            </Link>
          </Stack>
        );
      })}
    </div>
  );
};

export default PokedexIndexPage;
