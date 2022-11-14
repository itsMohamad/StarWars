import React, { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";
import { fetchPlanets } from "../services/api";
import Skeleton from "./Skeleton";

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status, refetch, isLoading, isFetching } = useQuery(
    ["planets", page],
    fetchPlanets,
    {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
  return (
    <>
      <h2>planets</h2>
      <button onClick={refetch}>Update Data</button>
      <button
        style={{ color: page === 1 ? "#ae57ff" : "rgb(219, 211, 255)" }}
        onClick={() => setPage(1)}
      >
        Page 1
      </button>
      <button
        style={{ color: page === 2 ? "#ae57ff" : "rgb(219, 211, 255)" }}
        onClick={() => setPage(2)}
      >
        Page 2
      </button>
      <button
        style={{ color: page === 3 ? "#ae57ff" : "rgb(219, 211, 255)" }}
        onClick={() => setPage(3)}
      >
        Page 3
      </button>

      {(isLoading || isFetching) && <Skeleton />}
      {status === "error" && <div>Error fetching Data</div>}
      {status === "success" && (
        <div>
          {data?.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </>
  );
};

export default Planets;
