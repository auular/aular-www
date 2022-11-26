import axios from "axios";

const useCoordinates = async (cep) => {
  const { data } = await axios.get(
    `https://brasilapi.com.br/api/cep/v2/${cep}`
  );
  
  return data.location.coordinates;
};

export default useCoordinates;
