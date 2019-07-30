import axios from "./axios";

function query(type, pro, year, score) {
  return axios.get(`/json/${type}/${pro}/${year}/${score}.json`);
}

export { query };
