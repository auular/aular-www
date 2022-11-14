import axios from "axios";

const useViaCEP = async (cep) => {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
};

export default useViaCEP;
