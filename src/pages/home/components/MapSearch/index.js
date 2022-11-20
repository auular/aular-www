import Input from "../../../../components/Input";
import { useForm } from "react-hook-form";
import { YellowButton } from "../../../../components/YellowButton";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import { useState } from "react";
import { useRouter } from "next/router";
import useMapbox from "../../../../services/mapbox";
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

  const [location, setLocation] = useState();

  const router = useRouter();

  const onSubmit = async (data) => {
    // TODO: mostrar os hoteis no pesquisar
  };

  const onCEPResult = async (address) => {
    const { logradouro, bairro, cidade, estado } = address;
    const data = await useMapbox(
      mapboxToken,
      logradouro,
      bairro,
      cidade,
      estado
    );
    setLocation(data);
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
            id="mapinha"
            center={location}
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
            {location && (
              <Marker
                longitude={location[0]}
                latitude={location[1]}
                onClick={() => router.push(`/hotel/${"churras"}`)}
              >
                <img src="/images/dog-pin.png" style={{ maxWidth: "40px" }} />
              </Marker>
            )}
            <Marker longitude={-100} latitude={40} anchor="bottom">
              <img src="/images/hotel-pin.png" style={{ maxWidth: "40px" }} />
            </Marker>
            <NavigationControl position="bottom-right" />
            <GeolocateControl />
          </Map>
        </div>
      </form>
    </div>
  );
};

export default MapSearch;
