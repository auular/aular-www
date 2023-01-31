import { useSession } from "next-auth/react";
import { Header } from "../../components/Header";
import React, { Suspense, useEffect } from "react";
import {
  serviceOptions,
  petsAccepted,
} from "../register/components/Entrepreneur/checkbox";
import { useBooleanValue } from "./hooks/useBooleanValue";
import { useRouter } from "next/router";
import { useSlug } from "../../hooks/useSlug";
import { useBuffer } from "./hooks/useBuffer";
import axios from "axios";
import api from "../../services/api";

import styles from "./Hotel.module.scss";

export default function Hotel({ hotelInfo, imageBuffer }) {
  const { status, data } = useSession();

  const router = useRouter();

  const { hotel, address, servicesProvided } = hotelInfo;
  const { getContentByBoolean } = useBooleanValue();

  let hotelImage: JSX.Element = <></>;

  if (imageBuffer !== "") {
    hotelImage = useBuffer(imageBuffer);
  }

  const servicesProvidedByHotel = getContentByBoolean(
    servicesProvided,
    serviceOptions,
    "service"
  );

  const petsAcceptedByHotel = getContentByBoolean(
    servicesProvided,
    petsAccepted,
    "Acepted"
  );

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status]);

  if (status === "authenticated")
    return (
      <Suspense fallback={<h2>Loading...</h2>}>
        <Header />
        <div className={styles.hotel}>
          <div className={styles.hotel__header}>
            <div>
              <h2>{hotel.name}</h2>
              <p>
                {address.addressStreet}, {address.addressNumber}
              </p>
              <p>
                {address.addressDistrict}, {address.addressCity}
              </p>
              <div className={styles.hotel__header__rate}>
                <h2>{hotel.rates ?? "0,0"}</h2>
                <span className={styles.hotel__header__rate__stars}>
                  {Array.from({ length: hotel.rates ?? 1 }, () => (
                    <img src="/images/star.svg" />
                  ))}
                </span>
              </div>
            </div>
            <div className={styles.hotel__header__average_price}>
              <p>{servicesProvided.averagePrice} a diária</p>
            </div>
          </div>
          <div className={styles.hotel__content}>
            <ul className={styles.hotel__content__nav}>
              <li>
                <a href="#">Visão Geral</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#pets">Pets aceitos</a>
              </li>
              {/* <li>
                <a href="#images">Imagens</a>
              </li> */}
            </ul>
            <div id="#" className={styles.hotel__content__info}>
              <Suspense fallback={<img src="/images/dog-playing.svg" />}>
                {hotelImage}
              </Suspense>
              <div className={styles.hotel__content__info_description}>
                <h3>Sobre o {hotel.name}</h3>
                <p>{hotel.description}</p>
              </div>
            </div>
            <div id="services" className={styles.hotel__content__services}>
              <h3>Serviços disponíveis no hotel</h3>
              <ul>
                {servicesProvidedByHotel.map(({ content }) => (
                  <li>{content}</li>
                ))}
              </ul>
            </div>
            <div id="pets" className={styles.hotel__content__pets}>
              <h3>Pets aceitos</h3>
              <ul>
                {petsAcceptedByHotel.map(({ content }) => (
                  <li>{content}</li>
                ))}
              </ul>
            </div>
            {/* <div id="images" className={styles.hotel__content__images}>
              <h3>Imagens</h3>
            </div> */}
          </div>
        </div>
      </Suspense>
    );

  return <h2>Loading...</h2>;
}

export async function getStaticPaths() {
  const { data } = await api.get("/hotels");
  // TODO: validar se tem data

  const paths = data.map(({ hotelId }) => {
    return { params: { id: hotelId.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await api.get(`/hotels/allFields/${params.id}`);
  const { buildSlugByName } = useSlug();

  let res;

  try {
    res = await axios.post("http://localhost:3000/api/v1/download", {
      hotelSlug: buildSlugByName(data.hotel.name),
    });
  } catch (err) {
    console.log(err);
  }

  const imageBuffer = res.data?.buffer ?? "";

  return {
    props: {
      hotelInfo: data,
      imageBuffer,
    },
  };
}
