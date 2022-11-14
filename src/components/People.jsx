import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";
import { fetchPeople } from "../services/api";

const People = () => {
  const { data, status } = useQuery("people", fetchPeople, {
    staleTime: 30000,
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <h2>People</h2>
      {status === "loading" && <div>Loading Data ...</div>}
      {status === "error" && <div>Error fetching Data</div>}
      {status === "success" && (
        <div>
          {data?.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </>
  );
};

export default People;
