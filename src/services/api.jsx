import axios from "axios";
const BASE_URL = "http://swapi.dev/api";
const fetchPeople = async (key) => {
  const myObject = Object.assign({}, key.queryKey);
  const category = myObject[key.queryKey.length - 1];
  const res = await axios.get(`${BASE_URL}/${category}/`);
  return res.data;
};
const fetchPlanets = async (key) => {
  const myObject = Object.assign({}, key.queryKey);
  const page = myObject[key.queryKey.length - 1];
  const category = myObject[0];
  const res = await axios.get(`${BASE_URL}/${category}/?page=${page}`);
  return res.data;
};
export { fetchPeople, fetchPlanets };
