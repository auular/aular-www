export const isValidCEP = (cep) => {
  if (!cep) cep = "";
  const match = cep.match(/\d+/gi),
    result = match ? match.join("") : null;

  if (result && !/^(.)\1+$/.test(cep.replace(/[\D]/, ""))) {
    return result.length === 8;
  }

  return false;
};
