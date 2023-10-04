import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export function Pokemon() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const statsApi = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(statsApi)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);
  console.log(data);
}
