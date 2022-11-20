import axios from "axios";

const API_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places";

const useMapbox = async (token, street, neighborhood, city, state) => {
  const response = await axios.get(
    `${API_URL}/${street}-${neighborhood}-${city}-${state}.json?access_token=${token}`
  );

  const { data } = response;
  return data.features[0].geometry.coordinates;
};

export default useMapbox;
