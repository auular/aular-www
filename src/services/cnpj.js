import axios from "axios";

const useCNPJ = async (cnpj) => {
  const { data } = await axios.get(
    `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
  );
  return data;
};

export default useCNPJ;
