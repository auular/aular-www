import Input from "../../../../components/Input";
import { useForm } from "react-hook-form";
import { YellowButton } from "../../../../components/YellowButton";
import { useState } from "react";
import { useRouter } from "next/router";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import useCoordinates from "../../../../services/coordinates";
import api from "../../../../services/api";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./MapSearch.module.scss";

const MapSearch = ({ mapboxToken }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [userLocation, setUserLocation] = useState();
  const [hotelsLocations, setHotelLocations] = useState([]);

  const router = useRouter();

  const onSubmit = async () => {
    const { data } = await api.get("/hotels/addresses");
    const hotels = await Promise.all(
      data.map(async ({ hotelId, addressCode }) => {
        const coordinates = await useCoordinates(addressCode);
        return { location: coordinates, hotelId };
      })
    );

    setHotelLocations(
      hotels.filter((hotel) => Object.keys(hotel.location).length !== 0)
    );
  };

  const onCEPResult = async ({ cep }) => {
    const coordinates = await useCoordinates(cep);
    setUserLocation(coordinates);
  };

  return (
    <div className={styles.map_search}>
      <h2>Encontre o lugar certo onde quer que vá</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.map_search__form}
      >
        <div className={styles.map_search__form__input}>
          <Input.CEP
            label="Busque por seu endereço: "
            name="search_cep"
            control={control}
            rules={{ required: true }}
            errors={errors.search_cep}
            onResult={onCEPResult}
          />
          <YellowButton value="Pesquisar" />
        </div>
        <div className={styles.map_search__form__content}>
          <Map
            mapboxAccessToken={mapboxToken}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            reuseMaps={true}
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "25px",
            }}
            initialViewState={{
              longitude: -53,
              latitude: -15,
              zoom: 3,
            }}
          >
            {userLocation && (
              <Marker
                longitude={userLocation.longitude}
                latitude={userLocation.latitude}
              >
                <img src="/images/dog-pin.png" style={{ maxWidth: "40px" }} />
              </Marker>
            )}
            {hotelsLocations.map(({ hotelId, location }) => (
              <Marker
                key={hotelId + new Date()}
                longitude={location.longitude}
                latitude={location.latitude}
                anchor="bottom"
                style={{ cursor: "pointer" }}
                onClick={() => router.push(`/hotel/${hotelId}`)}
              >
                <img src="/images/hotel-pin.png" style={{ maxWidth: "40px" }} />
              </Marker>
            ))}
            <NavigationControl position="bottom-right" />
            <GeolocateControl showAccuracyCircle={true} />
          </Map>
        </div>
      </form>
    </div>
  );
};

export default MapSearch;
